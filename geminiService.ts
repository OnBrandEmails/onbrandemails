import { GoogleGenAI, Type, Schema } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface StrategyIdea {
  campaignName: string;
  subjectLine: string;
  previewText: string;
  strategicReasoning: string;
}

export const generateStrategyIdeas = async (
  brandName: string,
  niche: string,
  targetAudience: string
): Promise<StrategyIdea[]> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return [
      {
        campaignName: "The 'Did We Mess Up?' Win-Back",
        subjectLine: "It's been 60 days. Be honest.",
        previewText: "Did we drop the ball? Tell us.",
        strategicReasoning: "Falsifiable statements get opened. We trigger the fear of broken trust to reignite dormant customers."
      },
      {
        campaignName: "Post-Purchase Value Add",
        subjectLine: "Don't wear your new [Item] yet.",
        previewText: "Read this first. Trust us.",
        strategicReasoning: "Stop selling. Start teaching. We increase LTV by making them experts at using what they just bought."
      },
      {
        campaignName: "The VIP Access",
        subjectLine: "You're in. Everyone else is out.",
        previewText: "Your secret access code is inside.",
        strategicReasoning: "Exclusivity isn't a tactic. It's human nature. We leverage status to drive immediate conversions."
      }
    ];
  }

  const model = "gemini-2.5-flash";

  const schema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        campaignName: { type: Type.STRING },
        subjectLine: { type: Type.STRING },
        previewText: { type: Type.STRING },
        strategicReasoning: { type: Type.STRING },
      },
      required: ["campaignName", "subjectLine", "previewText", "strategicReasoning"],
    },
  };

  const prompt = `
    You are a world-class Direct Response Copywriter for OnBrand Emails, an agency for 8-figure Shopify brands.
    Create 3 high-ROI email campaign concepts for:
    Brand Name: ${brandName}
    Niche: ${niche}
    Target Audience: ${targetAudience}

    CRITICAL COPYWRITING RULES (FOLLOW THESE OR FAIL):
    1. Kaplan's Law of Words: If a word isn't working for you, it's against you. Cut the fluff.
    2. Make it CONCRETE. No "productive routines", say "waking up at 6am".
    3. Make it FALSIFIABLE. Bold claims that can be proven true or false.
    4. Write with the delete key. Short sentences.
    5. Don't sound like a marketer. Sound like the customer.
    6. Differentiation: If a competitor could write the subject line, throw it out.

    Output format: JSON only.
  `;

  try {
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.8, // Slightly higher for creativity
      }
    });

    const text = result.text;
    if (!text) return [];
    
    return JSON.parse(text) as StrategyIdea[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate strategy ideas.");
  }
};
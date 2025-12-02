import React, { useState } from 'react';
import { generateStrategyIdeas, StrategyIdea } from './geminiService';
import { Sparkles, Loader2, Brain, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const GeminiIdeator: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [ideas, setIdeas] = useState<StrategyIdea[]>([]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !niche || !audience) return;

    setLoading(true);
    setGenerated(false);
    try {
      const results = await generateStrategyIdeas(brandName, niche, audience);
      setIdeas(results);
      setGenerated(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-white relative border-y border-gray-100">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 text-white bg-brand-dark px-4 py-1 rounded-full text-sm font-bold mb-6"
          >
            <Sparkles size={16} fill="currentColor" />
            <span>AI Strategy Demo</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">
            Taste The Strategy <br /> <span className="text-gray-400">Before You Pay A Dime.</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Most agencies hide their process. We show ours. Use our AI brain to generate 3 customized campaigns for your brand. Right now. For free.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Input Form */}
          <div className="lg:w-1/3 bg-brand-bg p-8 rounded-3xl border border-gray-200 h-fit lg:sticky lg:top-24 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-brand-dark border-b border-gray-200 pb-4">Brand Intake</h3>
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-brand-dark text-xs font-bold uppercase tracking-widest mb-2">Brand Name</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-4 text-brand-dark focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition placeholder-gray-400"
                  placeholder="e.g. Apex Athletics"
                />
              </div>
              <div>
                <label className="block text-brand-dark text-xs font-bold uppercase tracking-widest mb-2">Niche</label>
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-4 text-brand-dark focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition placeholder-gray-400"
                  placeholder="e.g. Streetwear"
                />
              </div>
              <div>
                <label className="block text-brand-dark text-xs font-bold uppercase tracking-widest mb-2">Target Audience</label>
                <input 
                  type="text" 
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-4 text-brand-dark focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition placeholder-gray-400"
                  placeholder="e.g. Men 25-35"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading || !brandName || !niche}
                className="w-full py-4 bg-brand-accent text-white font-bold text-lg rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                {loading ? 'Analyzing...' : 'Generate Campaigns'}
              </button>
            </form>
          </div>

          {/* Results Area */}
          <div className="lg:w-2/3 space-y-6">
            {!generated && !loading && (
              <div className="h-full min-h-[500px] border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-500 p-8 text-center bg-brand-bg/50">
                <Brain className="w-24 h-24 mb-6 opacity-20 text-brand-dark" />
                <h4 className="text-xl font-bold text-gray-600 mb-2">The Brain is Idle</h4>
                <p>Feed it your brand details to wake it up.</p>
              </div>
            )}
            
            {loading && (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-brand-bg/50 rounded-3xl border border-gray-200">
                <div className="w-20 h-20 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mb-8"></div>
                <p className="text-brand-dark text-xl font-display font-bold animate-pulse">Running Kaplan's Laws...</p>
                <p className="text-gray-500 text-sm mt-2">Checking falsifiability constraints.</p>
              </div>
            )}

            {generated && ideas.map((idea, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-brand-accent transition-colors shadow-lg"
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-display font-bold text-brand-dark">
                    {idea.campaignName}
                  </h4>
                  <span className="bg-brand-bg text-brand-dark border border-brand-dark/10 text-xs font-bold px-3 py-1 rounded-full">CONCEPT {idx + 1}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">Subject Line</span>
                    <p className="text-brand-dark font-medium text-lg leading-snug">"{idea.subjectLine}"</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">Preview Text</span>
                    <p className="text-gray-600 text-lg leading-snug">"{idea.previewText}"</p>
                  </div>
                </div>

                <div className="bg-brand-accent/5 p-6 rounded-xl border-l-4 border-brand-accent">
                  <span className="text-brand-accent text-sm font-bold uppercase tracking-wider mb-2 block flex items-center gap-2">
                    <Check size={16} /> The Strategy
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    {idea.strategicReasoning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiIdeator;

import React, { useState } from 'react';
import { Brain, PenTool, BarChart3, Layers, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: "Retention Strategy",
    desc: "We don't just send emails. We map out the entire customer journey, identifying drop-off points and plugging leaks with automated flows.",
    color: "text-brand-accent"
  },
  {
    icon: PenTool,
    title: "World-Class Design",
    desc: "Ugly emails convert less. Our designers are top 1% global talent. We create on-brand, visually stunning emails that demand attention.",
    color: "text-brand-dark"
  },
  {
    icon: BarChart3,
    title: "Data Obsessed",
    desc: "We live in Klaviyo analytics. We A/B test everything—subject lines, send times, CTA buttons, and layout—to squeeze every drop of ROI.",
    color: "text-blue-500"
  },
  {
    icon: Layers,
    title: "Full Implementation",
    desc: "From copywriting to design to scheduling and segmentation. We handle 100% of the workload so you can focus on product.",
    color: "text-purple-500"
  }
];

const Features: React.FC = () => {
  const [activeView, setActiveView] = useState<'wireframe' | 'design'>('design');

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-brand-dark">
            Not Another <span className="text-gray-400 line-through decoration-brand-accent">Generalist Agency</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Most agencies are hands without a brain. We are specialized retention engineers. 
            We increase your Customer Lifetime Value (CLV), effectively lowering your CAC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-default">
              <div className={`p-3 bg-brand-bg w-fit rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <f.icon className={`w-8 h-8 ${f.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Interactive Design Showcase */}
        <div className="relative rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-emerald-500 to-brand-dark"></div>
           
           <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 md:p-20 flex flex-col justify-center space-y-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                <h3 className="text-3xl font-display font-bold text-brand-dark">Design That <span className="text-brand-accent">Sells</span></h3>
                <p className="text-gray-600 text-lg">
                  Copy is food. Presentation is the plate. If it looks bad, they won't eat it.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-700 flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                    Custom Figma Designs (No Templates)
                  </p>
                  <p className="text-gray-700 flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                    Mobile-First Optimization
                  </p>
                  <p className="text-gray-700 flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                    Dark Mode Compatible
                  </p>
                </div>
                
                {/* Toggle Control */}
                <div className="bg-gray-100 p-2 rounded-xl inline-flex w-fit gap-2 border border-gray-200">
                  <button 
                    onClick={() => setActiveView('wireframe')}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeView === 'wireframe' ? 'bg-white text-brand-dark shadow-md' : 'text-gray-500 hover:text-brand-dark'}`}
                  >
                    The Brain (Structure)
                  </button>
                  <button 
                    onClick={() => setActiveView('design')}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeView === 'design' ? 'bg-brand-accent text-white shadow-md' : 'text-gray-500 hover:text-brand-dark'}`}
                  >
                    The Hands (Beauty)
                  </button>
                </div>
                <p className="text-xs text-gray-400 italic mt-2 flex items-center gap-2">
                  <MousePointer2 size={12} /> Toggle to see how we think vs. how we design.
                </p>
              </div>

              <div className="relative h-[600px] bg-brand-bg flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply"></div>
                  
                  {/* The Phone Container */}
                  <div className="relative w-[300px] h-[580px] border-[8px] border-brand-dark rounded-[3rem] overflow-hidden bg-white shadow-2xl z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-dark rounded-b-xl z-20"></div>
                    
                    {/* Content */}
                    <motion.div 
                      key={activeView}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full overflow-y-auto no-scrollbar bg-white"
                    >
                      {activeView === 'design' ? (
                        <img 
  src="/john-october.jpg"
  alt="High Fidelity Email Design"
  className="w-full h-auto object-cover"
/>
                      ) : (
                        <div className="w-full h-full bg-gray-50 p-4 space-y-4 pt-10">
                          <div className="w-full h-40 border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center text-gray-400 font-mono text-xs text-center p-2 rounded-lg">
                            HERO IMAGE<br/>(Lifestyle shot)
                          </div>
                          <div className="space-y-2">
                            <div className="h-6 bg-gray-200 w-3/4 mx-auto rounded"></div>
                            <div className="h-3 bg-gray-100 w-full rounded"></div>
                            <div className="h-3 bg-gray-100 w-5/6 mx-auto rounded"></div>
                          </div>
                          <div className="h-12 bg-brand-dark text-white rounded-lg flex items-center justify-center font-bold font-mono text-xs shadow-md">
                            PRIMARY CTA
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-32 bg-gray-100 rounded border border-gray-200"></div>
                            <div className="h-32 bg-gray-100 rounded border border-gray-200"></div>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Overlay Label */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white/90 backdrop-blur text-brand-dark text-xs font-mono rounded-full border border-gray-200 shadow-sm z-30">
                      {activeView === 'design' ? 'Final Output' : 'Structural Blueprint'}
                    </div>
                  </div>

                  {/* Aesthetic blobs */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const brands = [
    { name: "LUMIÈRE", style: "font-serif italic" },
    { name: "Vanguard.", style: "font-sans font-bold" },
    { name: "HYDRA", style: "tracking-tighter font-display" },
    { name: "EcoFlow", style: "font-sans" },
    { name: "CODE/WEAR", style: "font-mono" },
    { name: "KINETIC", style: "font-display font-black" },
    { name: "AURA", style: "font-serif" },
    { name: "NEXUS", style: "tracking-widest" }
  ];

  return (
    <section id="results" className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      
      {/* Infinite Scroll Marquee */}
      <div className="mb-20 w-full relative">
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Trusted by hyper-growth Shopify brands</p>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-scroll whitespace-nowrap flex gap-20 items-center">
            {/* Double the list to create seamless loop */}
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <span key={idx} className={`text-3xl text-gray-300 ${brand.style} hover:text-brand-dark transition-all duration-300 cursor-default select-none`}>
                {brand.name}
              </span>
            ))}
          </div>
          
          <div className="absolute top-0 left-0 bg-gradient-to-r from-white to-transparent w-32 h-full z-10"></div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-white to-transparent w-32 h-full z-10"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-10 -left-10 text-9xl text-brand-accent font-serif opacity-20">"</div>
            <h3 className="text-2xl md:text-4xl font-display font-medium leading-relaxed mb-8 relative z-10 text-brand-dark">
                OnBrand didn't just design pretty emails. They overhauled our entire backend strategy. Our <span className="text-brand-dark bg-brand-accent/20 px-2 rounded box-decoration-clone">revenue from email jumped from 15% to 42%</span> in just 90 days. They are the real deal.
            </h3>
            <div className="flex flex-col items-center gap-2">
                <img src="https://picsum.photos/id/64/100/100" alt="CEO" className="w-16 h-16 rounded-full border-2 border-brand-accent shadow-md" />
                <div>
                    <p className="font-bold text-brand-dark">Sarah Jenkins</p>
                    <p className="text-brand-accent text-sm font-bold">CMO, EcoFlow</p>
                </div>
                <div className="flex gap-1 text-brand-accent mt-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    name: "Alex, Founder of HypeBeast",
    revenue: "$2.4M/yr",
    thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sarah, CMO at PureSkin",
    revenue: "$800k/mo",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Marcus, CEO of LiftTech",
    revenue: "$1.2M/mo",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  }
];

const VideoTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
            Don't Just Take Our <span className="text-brand-accent">Word</span> For It.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See what 8-figure founders say about handing the keys to their email channel to OnBrand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden mb-4 border border-gray-200 shadow-xl">
                <img 
                  src={t.thumbnail} 
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play fill="#91B943" className="text-brand-accent ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-brand-dark font-bold text-lg">{t.name}</h3>
              <p className="text-brand-accent text-sm font-mono font-bold">{t.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
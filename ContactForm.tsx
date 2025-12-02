import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, AlertCircle, Lock } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    revenue: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
        <section id="audit" className="py-24 bg-brand-bg flex items-center justify-center">
            <div className="bg-white border border-brand-accent/20 p-12 rounded-2xl text-center max-w-lg mx-4 shadow-xl">
                <CheckCircle2 className="w-16 h-16 text-brand-accent mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-brand-dark mb-4">Application Received</h3>
                <p className="text-gray-600 mb-8">
                    Thanks, {formData.name}. We are reviewing {formData.website} now. If we see untapped revenue potential, you'll hear from us within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-brand-accent underline hover:text-brand-dark transition">
                    Start over
                </button>
            </div>
        </section>
    )
  }

  return (
    <section id="audit" className="py-24 bg-brand-dark relative">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
            Stop Leaving Money <br/> <span className="text-brand-accent">On The Table.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We are expensive. We are exclusive. But we pay for ourselves in the first 30 days.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-accent font-bold text-lg border border-brand-accent/20 shrink-0">1</div>
                <div>
                    <h4 className="text-white font-bold mb-1">Qualification</h4>
                    <p className="text-gray-500 text-sm">We only partner with brands doing $100k+/mo. Why? Because math. We need traffic volume to make our split tests statistically significant.</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-accent font-bold text-lg border border-brand-accent/20 shrink-0">2</div>
                <div>
                    <h4 className="text-white font-bold mb-1">The Audit</h4>
                    <p className="text-gray-500 text-sm">We don't guess. We verify. We look at your Klaviyo account and show you exactly where you're losing money.</p>
                </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-2 mb-6 text-gray-500 text-xs uppercase tracking-widest font-bold">
                    <Lock size={14} /> Secure Application
                </div>

                <h3 className="text-3xl font-bold text-brand-dark mb-2">Apply For A Partnership</h3>
                <p className="text-gray-500 mb-8 text-sm">Limited spots for Q3. Serious inquiries only.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs uppercase tracking-wider text-brand-dark font-bold mb-2 block">Name</label>
                            <input 
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text" 
                                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-dark focus:border-brand-accent outline-none focus:ring-1 focus:ring-brand-accent transition" 
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-wider text-brand-dark font-bold mb-2 block">Email</label>
                            <input 
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email" 
                                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-dark focus:border-brand-accent outline-none focus:ring-1 focus:ring-brand-accent transition" 
                                placeholder="work@brand.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-wider text-brand-dark font-bold mb-2 block">Website URL</label>
                        <input 
                            required
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            type="url" 
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-dark focus:border-brand-accent outline-none focus:ring-1 focus:ring-brand-accent transition" 
                            placeholder="https://brand.com"
                        />
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-wider text-brand-dark font-bold mb-2 block">Monthly Revenue</label>
                        <select 
                            required
                            name="revenue"
                            value={formData.revenue}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-dark focus:border-brand-accent outline-none focus:ring-1 focus:ring-brand-accent transition appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Select Revenue Range</option>
                            <option value="<50k">Less than $50k</option>
                            <option value="50k-100k">$50k - $100k</option>
                            <option value="100k-500k">$100k - $500k</option>
                            <option value="500k-1m">$500k - $1M</option>
                            <option value="1m+">$1M+</option>
                        </select>
                    </div>

                    {formData.revenue && (formData.revenue === "<50k" || formData.revenue === "50k-100k") && (
                         <div className="flex items-start gap-2 text-yellow-600 text-xs bg-yellow-50 p-3 rounded border border-yellow-200">
                            <AlertCircle size={14} className="mt-0.5 shrink-0" />
                            <p>We typically require $100k/mo revenue. We may refer you to our starter program.</p>
                         </div>
                    )}

                    <button type="submit" className="w-full bg-brand-accent text-white font-bold text-lg py-4 rounded-lg hover:bg-brand-dark transition-colors flex justify-center items-center gap-2 group mt-2 shadow-lg">
                        Apply Now <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
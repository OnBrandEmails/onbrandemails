import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl font-display font-bold text-white mb-2">OnBrand<span className="text-brand-accent">Emails</span></h2>
                <p className="text-gray-400 text-sm max-w-xs">
                    The Klaviyo agency for Shopify brands who care about profit, not just open rates.
                </p>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin size={24} /></a>
                <a href="mailto:hello@onbrandemails.com" className="text-gray-400 hover:text-white transition"><Mail size={24} /></a>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} OnBrand Emails. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
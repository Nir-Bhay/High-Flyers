import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-blue-700 to-purple-800"></div>
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="inline-block animate-bounce mb-4">
          <span className="text-4xl">✈️</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Ready to Start Your <br/>
          <span className="text-gold-400">Journey to Success?</span>
        </h2>
        
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 10,000+ students who achieved their dreams with High Flyers Education. 
          Limited seats available for the upcoming session.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-500 text-navy-900 font-bold rounded-xl shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Enroll Now - Limited Seats
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Book Free Counselling
          </button>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-blue-200">
           <span className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
             New Batch Starting January 2025
           </span>
           <span className="hidden md:block">•</span>
           <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
             <MessageCircle className="w-4 h-4" />
             WhatsApp Us: +91 9599094154
           </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
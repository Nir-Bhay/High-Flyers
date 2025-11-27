import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">Success Stories</h2>
          <p className="text-gray-500 mt-2">Hear from our students who made us proud.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Featured Testimonial */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative border border-gray-100 text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white text-white">
              <Quote size={32} />
            </div>

            <div className="mt-8 mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current text-gold-500" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-navy-800 font-medium leading-relaxed italic">
                "High Flyers Education transformed my entire approach to studies. Commerce Baba's teaching methodology and personal attention helped me score 95% in boards and crack CA Foundation in my first attempt."
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                alt="Student" 
                className="w-16 h-16 rounded-full object-cover border-2 border-gold-400 mb-3" 
              />
              <h4 className="text-lg font-bold text-navy-900">Priya Sharma</h4>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold mt-1">
                95% in CBSE XII | CA Foundation Cleared
              </span>
            </div>
          </div>

          {/* Smaller Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 opacity-70 scale-95">
             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-12 h-12 rounded-full object-cover" />
                <div>
                   <p className="text-sm text-gray-700 italic">"Best coaching for MPPSC in Chhindwara."</p>
                   <p className="text-xs font-bold text-navy-800 mt-1">- Rahul Verma, MPPSC Aspirant</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-12 h-12 rounded-full object-cover" />
                <div>
                   <p className="text-sm text-gray-700 italic">"The foundation course cleared all my basics."</p>
                   <p className="text-xs font-bold text-navy-800 mt-1">- Neha Gupta, Class 10th</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
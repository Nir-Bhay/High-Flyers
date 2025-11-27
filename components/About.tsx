import React from 'react';
import { CheckCircle2, Monitor, Users, Brain, Target, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: <CheckCircle2 className="w-6 h-6 text-green-600" />, title: "Consistent Results", desc: "14+ Years of excellence in Boards & Competitive Exams" },
    { icon: <Brain className="w-6 h-6 text-blue-600" />, title: "Expert Faculty", desc: "Top mentors for UPSC, MPPSC, SSC & Commerce" },
    { icon: <Monitor className="w-6 h-6 text-purple-600" />, title: "Smart Classes", desc: "Interactive learning with Online + Offline support" },
    { icon: <Target className="w-6 h-6 text-red-600" />, title: "Personal Mentorship", desc: "Individual attention and doubt clearing sessions" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
           <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">About Us</span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-2">
             About High Flyers Education
           </h2>
           <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-navy-900 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Classroom Environment" 
                className="w-full h-[400px] md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 right-0 bg-gold-500 text-white px-8 py-4 rounded-tl-3xl font-bold text-lg shadow-lg">
                Since 2010
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-2xl font-bold text-navy-800">Why Students Trust <span className="text-gold-600">High Flyers?</span></h3>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              For over 14 years, High Flyers Education (Commerce Baba) has been a trusted name in shaping careers. We don't just teach; we transform students into achievers through a disciplined approach, concept-based learning, and regular performance tracking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-navy-800 font-medium italic text-lg mb-6">
                "Join the institute where success takes flight. ✈️"
              </p>
              <button className="text-navy-800 font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors flex items-center gap-2 group">
                Learn More About Us 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
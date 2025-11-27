import React from 'react';
import { Play, Phone, GraduationCap, BookOpen, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent hidden lg:block pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-8 animate-[fadeInLeft_1s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-navy-900 rounded-full shadow-sm border border-gold-200 animate-float">
              <span className="text-xl">🏆</span>
              <span className="font-semibold text-sm tracking-wide uppercase">14+ Years of Trust & Legacy</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-navy-900 font-heading font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.1]">
                BUILDING INDIA'S <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-blue-600">
                  NEXT TOPPERS
                </span>
              </h2>
              <div className="h-1 w-32 bg-gold-500 rounded-full ml-1"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl font-medium">
              Empowering students from <span className="text-navy-800 font-bold">Class 8th to 12th</span> (Foundation & Commerce) and guiding aspirants for India's toughest competitive exams — <span className="text-navy-800 font-bold">UPSC, MPPSC, SSC, Bank</span> — with proven results.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {['💼 Commerce Expert', '🎯 Competitive Exams', '📚 Foundation (8-12)', '💻 Online + Offline'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-navy-800 shadow-sm hover:border-gold-400 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-bold text-lg shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span>🎯</span> Explore Courses
              </button>
              
              <button className="px-8 py-4 rounded-2xl bg-white border-2 border-navy-100 text-navy-800 font-bold text-lg hover:border-navy-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 group shadow-sm">
                <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center group-hover:bg-navy-800 group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                Success Stories
              </button>
            </div>

            <a href="tel:9599094154" className="inline-flex items-center gap-2 text-gray-500 hover:text-navy-800 font-medium transition-colors ml-2">
              <Phone className="w-4 h-4" />
              <span>Or Call for Counselling: <span className="font-bold">9599094154</span></span>
            </a>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-200">
               <div className="flex items-center gap-2">
                  <div className="flex text-gold-500"><span className="text-xl">★</span><span className="text-xl">★</span><span className="text-xl">★</span><span className="text-xl">★</span><span className="text-xl">★</span></div>
                  <span className="font-bold text-navy-900">4.9/5</span>
                  <span className="text-sm text-gray-500">Ratings</span>
               </div>
               <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  <span className="font-bold text-navy-900">50K+</span>
                  <span className="text-sm text-gray-500">Subscribers</span>
               </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-[45%] relative animate-[fadeInRight_1s_ease-out_0.2s]">
             <div className="relative z-10 ml-auto mr-auto lg:mr-0 lg:ml-auto w-[90%] max-w-[500px]">
                {/* Main Mentor Image Container - Using a professional image from Unsplash */}
                <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-blue-100">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Commerce Baba Mentor" 
                      className="w-full h-[550px] object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay at bottom for text readability if needed */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float shadow-xl">
                   <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                      <Trophy className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Result</p>
                      <p className="text-navy-900 font-bold">100% Pass</p>
                   </div>
                </div>

                <div className="absolute top-1/2 -left-12 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float-delayed shadow-xl z-20">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <GraduationCap className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Students</p>
                      <p className="text-navy-900 font-bold">10,000+ Alumni</p>
                   </div>
                </div>

                <div className="absolute -bottom-8 right-12 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float shadow-xl z-20">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <BookOpen className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Mode</p>
                      <p className="text-navy-900 font-bold">Online & Offline</p>
                   </div>
                </div>
                
                {/* Decorative 3D elements */}
                <div className="absolute top-20 -left-20 w-32 h-32 bg-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
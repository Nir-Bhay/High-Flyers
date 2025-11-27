import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-center">
      
      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-navy-800 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-navy-700 hover:-translate-y-1 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919599094154" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-navy-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
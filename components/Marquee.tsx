import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "🎉 Admissions Open for 2024-25 Batch",
    "🏆 100% Results in Board Exams",
    "📚 New MPPSC Batch Starting Soon",
    "💻 Download Our App on Play Store",
    "🎯 Free Demo Classes Available",
    "⭐ Trusted by 1000+ Students"
  ];

  return (
    <div className="bg-gradient-to-r from-gold-500 to-orange-500 py-3 overflow-hidden relative z-20 shadow-md">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 text-white font-medium tracking-wide">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-white/50"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
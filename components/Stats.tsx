import React, { useEffect, useState, useRef } from 'react';

const StatItem: React.FC<{ label: string; value: string; icon: string; delay: number }> = ({ label, value, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center p-6 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-3xl mb-4 border border-white/20 shadow-inner">
        {icon}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tight">{value}</h3>
      <p className="text-blue-200 font-medium uppercase tracking-wider text-sm">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy-800/50 to-navy-900 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          <StatItem icon="🏆" value="14+" label="Years of Excellence" delay={0} />
          <StatItem icon="👨‍🎓" value="10k+" label="Students Trained" delay={200} />
          <StatItem icon="📈" value="95%" label="Success Rate" delay={400} />
          <StatItem icon="🥇" value="50+" label="Toppers Created" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
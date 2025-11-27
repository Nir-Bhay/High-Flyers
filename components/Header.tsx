import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Lock } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', active: true },
    { name: 'Courses', hasDropdown: true },
    { name: 'Results', hasDropdown: false },
    { name: 'About', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-navy-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-gold-400/50 transition-all duration-300">
             {/* Abstract Eagle/Phoenix Icon using SVG */}
             <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#F59E0B" fillOpacity="0.2" />
                <path d="M3 14L12 18L21 14" />
                <path d="M2 9C2 9 4 20 12 20C20 20 22 9 22 9" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-navy-800 text-lg md:text-2xl leading-tight tracking-tight">
              High Flyers
            </span>
            <span className="font-script text-gold-600 text-base md:text-lg leading-none -mt-1">
              Education
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group cursor-pointer h-full flex items-center">
              <span className={`font-medium text-[15px] transition-colors duration-200 flex items-center gap-1 ${link.active ? 'text-navy-800 font-semibold' : 'text-gray-600 hover:text-navy-800'}`}>
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 mt-0.5" />}
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ease-out ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-navy-800 hover:bg-slate-100 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-navy-800 text-navy-800 font-semibold hover:bg-navy-50 transition-all text-sm">
            <Lock className="w-4 h-4" />
            Login
          </button>
          
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-navy-800 to-blue-600 text-white font-semibold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300 text-sm">
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-navy-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px] py-4' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href="#" className="text-lg font-medium text-gray-700 hover:text-navy-800 py-2 border-b border-gray-100">
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 rounded-lg border-2 border-navy-800 text-navy-800 font-bold">Login</button>
            <button className="w-full py-3 rounded-lg bg-navy-800 text-white font-bold">Register Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
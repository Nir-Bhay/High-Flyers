import React from 'react';
import { Youtube, Instagram, Facebook, Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 pt-16 pb-8 border-t border-navy-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                 <span className="text-2xl">🦅</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">High Flyers</h3>
                <p className="text-gold-500 text-sm font-script">Education</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering students since 2010 with quality education for Commerce & Competitive Exams. Where success takes flight.
            </p>
            <div className="space-y-3 pt-2">
              <a href="#" className="flex items-start gap-3 hover:text-white transition-colors group">
                <MapPin className="w-5 h-5 text-gold-500 mt-1 shrink-0 group-hover:animate-bounce" />
                <span className="text-sm">Parasia Road, Chhindwara, Madhya Pradesh 480001</span>
              </a>
              <a href="tel:9599094154" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm">9599094154</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Success Stories', 'Our Team', 'Contact Us', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold-400 hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {['Commerce (11th-12th)', 'Foundation (8th-10th)', 'UPSC Preparation', 'MPPSC Preparation', 'SSC & Bank Exams'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold-400 hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-navy-800 p-4 rounded-xl">
               <p className="text-xs text-gray-400 mb-2">Join our Telegram channel for free notes</p>
               <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors">
                 Join Telegram
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 High Flyers Education. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { ArrowRight, Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  price: string;
  originalPrice: string;
  gradient: string;
  badge: string;
  icon: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, subtitle, tags, price, originalPrice, gradient, badge, icon }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full">
    {/* Header */}
    <div className={`h-40 ${gradient} p-6 relative`}>
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wide border border-white/20">
        {badge}
      </div>
      <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl">
        {icon}
      </div>
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10"></div>
    </div>

    {/* Content */}
    <div className="pt-10 px-6 pb-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-navy-900 mb-1">{title}</h3>
      <p className="text-gray-500 font-medium text-sm mb-4">{subtitle}</p>

      {/* Features */}
      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <BookOpen className="w-4 h-4 text-gold-500" />
          <span>Complete Syllabus Coverage</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Clock className="w-4 h-4 text-gold-500" />
          <span>Regular Tests & Analysis</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Users className="w-4 h-4 text-gold-500" />
          <span>Small Batch Size</span>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-sm text-gray-400 line-through block">{originalPrice}</span>
            <span className="text-2xl font-bold text-navy-800">{price}</span>
            <span className="text-xs text-gray-500">/year</span>
          </div>
          <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">Best Value</span>
        </div>
        
        <button className="w-full py-3 rounded-xl border-2 border-navy-800 text-navy-800 font-bold hover:bg-navy-800 hover:text-white transition-all flex items-center justify-center gap-2 group">
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Commerce', 'Competitive Exams', 'Foundation'];

  return (
    <section className="py-20 bg-slate-50" id="courses">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Our Programs</span>
          <h2 className="text-4xl font-heading font-bold text-navy-900 mt-4 mb-4">Comprehensive Courses</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Designed by experts to help you crack the toughest exams and build a strong foundation.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-navy-800 text-white shadow-lg shadow-navy-800/20 scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard 
            title="Commerce Stream"
            subtitle="Class 11th & 12th | CA | CS Foundation"
            tags={['Accountancy', 'Economics', 'Business Studies']}
            price="₹35,000"
            originalPrice="₹45,000"
            gradient="bg-gradient-to-br from-orange-400 to-amber-600"
            badge="Bestseller"
            icon="💼"
          />
          <CourseCard 
            title="Competitive Exams"
            subtitle="UPSC | MPPSC | SSC | Bank PO"
            tags={['General Studies', 'CSAT', 'Current Affairs']}
            price="₹45,000"
            originalPrice="₹60,000"
            gradient="bg-gradient-to-br from-blue-600 to-indigo-700"
            badge="Popular"
            icon="🏛️"
          />
          <CourseCard 
            title="Foundation Course"
            subtitle="Class 8th, 9th & 10th - All Subjects"
            tags={['Maths', 'Science', 'Social Studies']}
            price="₹25,000"
            originalPrice="₹30,000"
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
            badge="New Batch"
            icon="🌱"
          />
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-navy-800 font-bold hover:text-gold-600 transition-colors">
            View All Courses <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
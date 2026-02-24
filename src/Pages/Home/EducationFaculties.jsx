import React, { useState, useEffect } from 'react';
import Container from '../../Common/Container';

const defaultFaculties = [
  {
    title: 'Web Development',
    description: 'Master modern web technologies including React, Node.js, and full-stack development.',
    icon: '💻',
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
  },
  {
    title: 'App Development',
    description: 'Build cross-platform mobile apps with React Native, Flutter, and native technologies.',
    icon: '📱',
    color: 'from-purple-500 to-purple-600',
    bgLight: 'bg-purple-50',
  },
  {
    title: 'Cyber Security',
    description: 'Learn ethical hacking, network security, and protect systems from cyber threats.',
    icon: '🔒',
    color: 'from-red-500 to-red-600',
    bgLight: 'bg-red-50',
  },
  {
    title: 'Design & Multimedia',
    description: 'Create stunning visuals with UI/UX design, graphic design, and motion graphics.',
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
    bgLight: 'bg-pink-50',
  },
  {
    title: 'Digital Marketing',
    description: 'Drive business growth with SEO, social media marketing, and content strategy.',
    icon: '📈',
    color: 'from-green-500 to-green-600',
    bgLight: 'bg-green-50',
  },
  {
    title: 'Data Science',
    description: 'Analyze data, build ML models, and make data-driven decisions with Python.',
    icon: '📊',
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
  },
];

const EducationFaculties = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Faculties
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Education Faculties
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore our diverse range of faculties designed to equip you with industry-ready skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultFaculties.map((faculty, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${faculty.bgLight} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {faculty.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {faculty.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {faculty.description}
              </p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${faculty.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EducationFaculties;

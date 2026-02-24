import React from 'react';
import Container from '../../Common/Container';
import { FaChalkboardTeacher, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import inspireImg from '../../assets/InspireTeacher/teacher-6831688_640.webp';

const benefits = [
  { icon: FaChalkboardTeacher, text: 'Create and manage your own courses' },
  { icon: FaUsers, text: 'Connect with thousands of eager students' },
  { icon: FaChartLine, text: 'Track your growth and student engagement' },
];

const InspireAsTeacher = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={inspireImg}
              alt="Become a teacher"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-blue-500/10 rounded-2xl blur-lg" />
          </div>

          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Join Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Share Your Knowledge, Shape the Future
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Join our platform and become a beacon of knowledge and inspiration.
              Connect with eager students, create transformative courses, and make
              a real impact. Let's build the future of education together!
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="text-blue-600" />
                    </div>
                    <p className="text-slate-600 font-medium">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <Link to="/TeachOn" className="primary_btn inline-block">
              Become a Teacher
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InspireAsTeacher;

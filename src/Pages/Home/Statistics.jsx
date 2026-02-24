import React from 'react';
import Container from '../../Common/Container';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaAward } from 'react-icons/fa';

import statistics_img from '../../assets/banner-img/img-8.jpg';

const stats = [
  { icon: FaUserGraduate, end: 5000, label: 'Satisfied Students', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: FaAward, end: 10, label: 'Years Experience', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: FaBookOpen, end: 15, label: 'Faculty Courses', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: FaChalkboardTeacher, end: 100, label: 'Expert Teachers', color: 'text-orange-500', bg: 'bg-orange-50' },
];

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={statistics_img}
              alt="Learning environment"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-2xl blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
          </div>

          <div>
            <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Ideal Learning Partner
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              With over 10 years of excellence in education, we've empowered 5,000+ students through expert-led courses and personalized learning support.
            </p>

            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`text-lg ${stat.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold mb-1">
                      {inView && <CountUp start={0} end={stat.end} duration={2.5} />}+
                    </h3>
                    <p className="text-slate-400 text-sm capitalize">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Statistics;

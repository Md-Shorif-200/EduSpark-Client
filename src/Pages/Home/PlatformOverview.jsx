import React, { useEffect, useState, useMemo } from 'react';
import Container from '../../Common/Container';
import useClass from '../../Hooks/useClass';
import usePayments from '../../Hooks/usePayments';
import { FaUsers, FaBookOpen, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const PlatformOverview = () => {
  const [classes] = useClass();
  const [payments] = usePayments();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const overviewStats = useMemo(() => [
    {
      icon: FaUsers,
      value: 1200,
      label: 'Active Users',
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: FaBookOpen,
      value: classes?.length || 0,
      label: 'Total Classes',
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: FaGraduationCap,
      value: payments?.length || 0,
      label: 'Enrollments',
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: FaTrophy,
      value: 98,
      label: 'Success Rate %',
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
  ], [classes, payments]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Platform Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Overview
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A snapshot of our growing community and the impact we're making in education
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {overviewStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 text-center border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-xl ${stat.textColor}`} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  {inView && <CountUp start={0} end={stat.value} duration={2.5} />}
                  {stat.label !== 'Success Rate %' && '+'}
                  {stat.label === 'Success Rate %' && '%'}
                </h3>
                <p className="text-slate-500 text-sm font-medium capitalize">
                  {stat.label === 'Success Rate %' ? 'Success Rate' : stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PlatformOverview;

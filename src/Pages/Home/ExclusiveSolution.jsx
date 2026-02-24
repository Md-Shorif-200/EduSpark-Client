import React from 'react';
import Container from '../../Common/Container';
import { FaHandHoldingHeart, FaVideo } from 'react-icons/fa';
import { FaIndustry } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';

const solutions = [
  {
    icon: FaHandHoldingHeart,
    title: 'Lifetime Support',
    description: 'Enjoy lifetime access to expert guidance and mentorship. We help with technical challenges, career advice, and continuous growth.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: FaIndustry,
    title: 'Job Placement',
    description: 'Get connected with top companies and exciting opportunities. We offer resume help, interview coaching, and job board access.',
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: GiSkills,
    title: 'Internship Program',
    description: 'Gain real-world experience through hands-on internships. Work on live projects and build a strong professional portfolio.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: FaVideo,
    title: 'Class Recordings',
    description: 'Access high-quality class recordings anytime. Revisit lessons, learn at your own pace, and strengthen your skills.',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
];

const ExclusiveSolution = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Exclusive Solutions That Set Us Apart
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We go beyond just courses — we provide a complete ecosystem for your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-xl ${item.textColor}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 capitalize">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mx-auto mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveSolution;

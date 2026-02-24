import React from 'react';
import Container from '../../Common/Container';

import img_1 from '../../assets/partnership/img-1.png';
import img_2 from '../../assets/partnership/img-2.png';
import img_3 from '../../assets/partnership/img-3.png';
import img_4 from '../../assets/partnership/img-4.png';
import img_5 from '../../assets/partnership/img-5.jpeg';

const partners = [
  {
    logo: img_5,
    name: 'Programming Hero',
    description: 'Interactive and engaging coding courses that make learning to code easier and more enjoyable.',
  },
  {
    logo: img_1,
    name: 'Apple',
    description: 'Advanced digital tools and resources that enhance the online learning experience.',
  },
  {
    logo: img_3,
    name: 'TutorialBD',
    description: 'High-quality educational content and tutorials, empowering students with knowledge.',
  },
  {
    logo: img_4,
    name: 'W3Schools',
    description: 'Comprehensive, easy-to-follow web development tutorials and documentation.',
  },
];

const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted By The Best
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Partners
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We collaborate with leading organizations to bring you the best learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="w-full h-20 flex items-center justify-center mb-5 overflow-hidden rounded-xl bg-slate-50 p-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {partner.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdSlowMotionVideo, MdOutlinePhoneInTalk } from 'react-icons/md';
import Container from '../../Common/Container';

import img1 from '../../assets/about_us/about-img-1.jpg';
import img2 from '../../assets/about_us/about-img-2.jpg';

const features = [
  'Innovative Learning',
  'Unlimited Access',
  'Superior Results',
  'Digital Education',
];

const AboutUs = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex gap-4 md:gap-6">
            <div className="flex-1 space-y-4">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={img1}
                  alt="Students learning"
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg text-blue-600 text-2xl cursor-pointer hover:scale-110 transition-transform">
                  <MdSlowMotionVideo />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <MdOutlinePhoneInTalk className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase">Online Support</h3>
                    <p className="font-bold">+88 01972144240</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-end">
              <img
                src={img2}
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Over 10 Years in Distance Learning for Skill Development
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              At EduSpark, we believe that quality education should be accessible to everyone.
              Our expert-led courses are designed to help learners gain real-world skills and
              advance their careers. Join us in shaping a future where knowledge knows no boundaries!
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-500 shrink-0" />
                  <span className="text-slate-600 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="secondary_btn uppercase text-sm">Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import Container from '../../Common/Container';

const videos = [
  {
    url: 'https://www.youtube.com/embed/l4xtqOoz3QA?si=7ZUYo-RZt__vlqmv',
    title: 'Student Success Story 1',
  },
  {
    url: 'https://www.youtube.com/embed/SH8VxZcY04g?si=yaHugx_KYXt-xE3r',
    title: 'Student Success Story 2',
  },
  {
    url: 'https://www.youtube.com/embed/UpY3cqpYTJQ?si=ftDz4e_4LhNiLIWn',
    title: 'Student Success Story 3',
  },
  {
    url: 'https://www.youtube.com/embed/Ag3zMEJtHAA?si=Tfe37nuAtSMGrBf_',
    title: 'Student Success Story 4',
  },
];

const SuccesStory = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Success Stories
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Watch how our students transformed their careers with EduSpark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccesStory;

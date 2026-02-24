import React, { useState, useEffect } from 'react';
import Container from '../../Common/Container';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const defaultFeedbacks = [
  {
    name: 'Sarah Johnson',
    role: 'Web Development Student',
    feedback: 'EduSpark transformed my career. The courses are well-structured and the instructors are incredibly supportive. I landed my dream job within 3 months!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Data Science Student',
    feedback: 'The hands-on projects and real-world applications made learning so much more effective. I highly recommend EduSpark to anyone serious about upskilling.',
    rating: 5,
  },
  {
    name: 'Amina Rahman',
    role: 'UI/UX Design Student',
    feedback: 'The community here is amazing. I got constant feedback on my projects and the mentorship program helped me grow exponentially as a designer.',
    rating: 4,
  },
];

const Feedback = () => {
  const axiosPublic = useAxiosPublic();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axiosPublic.get('/feedback')
      .then(res => setFeedbacks(res.data))
      .catch(() => setFeedbacks([]));
  }, [axiosPublic]);

  const displayFeedbacks = feedbacks.length > 0 ? feedbacks.slice(0, 3) : defaultFeedbacks;

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hear from our students about how EduSpark has helped them achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayFeedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
            >
              <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.feedback || item.review}
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < (item.rating || 5) ? 'text-amber-400' : 'text-slate-200'}
                    size={14}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {(item.name || 'S')[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">{item.name || 'Student'}</h4>
                  <p className="text-slate-400 text-xs">{item.role || 'Student'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Feedback;

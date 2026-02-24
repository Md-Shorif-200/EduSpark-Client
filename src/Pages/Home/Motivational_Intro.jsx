import React from "react";
import Container from "../../Common/Container";
import img_1 from "../../assets/Motivational_Intro/img-1.jpg";
import img_2 from "../../assets/Motivational_Intro/img-2.jpg";
import img_3 from "../../assets/Motivational_Intro/img-3.jpg";

const cards = [
  { img: img_1, title: "Coaching" },
  { img: img_2, title: "Consulting" },
  { img: img_3, title: "Courses" },
];

const Motivational_Intro = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            How We Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Explore How We Can Help You
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            The ultimate planning solution for learners who want to reach their
            personal and professional goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={card.img}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={card.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl font-bold capitalize mb-4">
                  {card.title}
                </h3>
                <button className="primary_btn opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 uppercase text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Motivational_Intro;

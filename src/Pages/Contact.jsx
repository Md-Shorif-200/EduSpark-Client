import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Call Us",
    detail: "+880 1234-567890",
    sub: "Mon–Fri, 9 AM – 6 PM",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    detail: "contact@eduspark.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    detail: "Dhaka, Bangladesh",
    sub: "Gulshan-2, Road 45",
  },
  {
    icon: FaClock,
    title: "Office Hours",
    detail: "Sun – Thu",
    sub: "9:00 AM – 6:00 PM",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero */}
      <div className="relative bg-linear-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-400/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            We'd Love to Hear
            <br />
            <span className="text-indigo-200">From You</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-indigo-100/80">
            Have questions about our courses or platform? We're here to help you
            on your learning journey. Reach out and let's connect.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-700 font-medium text-sm">{item.detail}</p>
              <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form + Map / Illustration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column – supplementary info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours. We value your feedback, questions, and ideas.
              </p>
            </div>

            <div className="bg-linear-to-br from-indigo-50 to-indigo-100/60 rounded-2xl p-6 space-y-4">
              <h4 className="font-semibold text-gray-900">
                Why reach out to us?
              </h4>
              {[
                "Course enrollment inquiries",
                "Partnership & collaboration",
                "Technical support",
                "Feedback & suggestions",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-600 text-white text-[10px]">
                    ✓
                  </span>
                  <span className="text-gray-600 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231946!2d90.4112!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f7efc4b1%3A0x209a42ed3a60ef42!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
                className="w-full h-52"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right column – form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 md:p-10">
              {submitted && (
                <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-3 text-sm font-medium animate-fadeIn">
                  <FaCheckCircle className="text-green-500 text-lg shrink-0" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className={`w-full rounded-xl border ${
                        errors.name
                          ? "border-red-400 focus:ring-red-300"
                          : "border-gray-200 focus:ring-indigo-200"
                      } bg-gray-50/60 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 transition`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Enter a valid email",
                        },
                      })}
                      className={`w-full rounded-xl border ${
                        errors.email
                          ? "border-red-400 focus:ring-red-300"
                          : "border-gray-200 focus:ring-indigo-200"
                      } bg-gray-50/60 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 transition`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className={`w-full rounded-xl border ${
                      errors.subject
                        ? "border-red-400 focus:ring-red-300"
                        : "border-gray-200 focus:ring-indigo-200"
                    } bg-gray-50/60 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 transition`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={5}
                    className={`w-full rounded-xl border ${
                      errors.message
                        ? "border-red-400 focus:ring-red-300"
                        : "border-gray-200 focus:ring-indigo-200"
                    } bg-gray-50/60 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 transition resize-none`}
                    placeholder="Tell us more about what you need..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-indigo-200/50 hover:shadow-lg hover:shadow-indigo-300/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <FaPaperPlane className="text-sm" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="bg-indigo-50/60 border-t border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Prefer a quick chat?
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Our support team is just a click away on live chat, available
              during office hours.
            </p>
          </div>
          <a
            href="mailto:contact@eduspark.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaEnvelope />
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

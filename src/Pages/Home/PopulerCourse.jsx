import React, { useState, useMemo, useCallback } from 'react';
import useClass from '../../Hooks/useClass';
import Class_Catagory_tab from '../../Pages/Class/Class_Catagory_tab';
import Loading from '../../Common/Loading';
import Container from '../../Common/Container';

const categories = [
  { name: 'Web Development', key: 'web_development' },
  { name: 'App Development', key: 'app_development' },
  { name: 'Cyber Security', key: 'cyber_security' },
  { name: 'Design & Multimedia', key: 'design_and_multimedia' },
  { name: 'Digital Marketing', key: 'digital_marketing' },
  { name: 'Office Management', key: 'office_management' },
];

const PopulerCourse = () => {
  const [classes, refetch, isLoading] = useClass();
  const [activeTab, setActiveTab] = useState(categories[0].key);

  const approvedClasses = useMemo(() => {
    if (!classes) return [];
    return classes.filter((c) => c.status === 'approved');
  }, [classes]);

  const activeClasses = useMemo(
    () =>
      approvedClasses
        .filter((data) => data.category === activeTab)
        .sort((a, b) => (b.totalEnrollments || 0) - (a.totalEnrollments || 0))
        .slice(0, 8),
    [approvedClasses, activeTab]
  );

  const activeName = useMemo(
    () => categories.find((c) => c.key === activeTab)?.name,
    [activeTab]
  );

  const handleTabClick = useCallback((key) => {
    setActiveTab(key);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Top Picks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Explore Popular Courses
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleTabClick(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="min-h-[350px]">
          {activeClasses.length > 0 ? (
            <Class_Catagory_tab key={activeTab} class_catagory={activeClasses} />
          ) : (
            <div className="flex flex-col items-center justify-center py-24 animate-fadeIn">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No courses available yet</h3>
              <p className="text-slate-500 text-center max-w-sm leading-relaxed">
                We're working on adding amazing courses in{' '}
                <span className="font-medium text-slate-700">{activeName}</span>. Check back soon!
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PopulerCourse;

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useClass from "../../Hooks/useClass";
import Class_Catagory_tab from "../../Pages/Class/Class_Catagory_tab";
import Loading from "../../Common/Loading";

const PopulerCourse = () => {
  const [classes, refetch, isLoading] = useClass();

  const approvedClass = classes.filter(
    (classData) => classData.status === "approved"
  );
  const sortedClass = approvedClass.sort(
    (a, b) => b.totalEnrollments - a.totalEnrollments
  );
  const populerClasses = sortedClass.slice(0, 8);

  const categories = [
    { name: "Web Development", key: "web_development" },
    { name: "App Development", key: "app_development" },
    { name: "Cyber Security", key: "cyber_security" },
    { name: "Design & Multimedia", key: "design_and_multimedia" },
    { name: "Digital Marketing", key: "digital_marketing" },
    { name: "Office Management", key: "office_management" }
  ];

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white pt-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl  font-bold title_color mb-3">
            Explore Popular Courses
          </h1>
          <p className="text-base paragraph_color max-w-2xl mx-auto">
            Discover our most enrolled courses and start your learning journey
          </p>
        </div>

        <Tabs>
          {/* Tab List - Professional Design */}
          <TabList className="flex flex-wrap justify-center gap-2  border-0 bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-sm ">
            {categories.map((category) => (
              <Tab
                key={category.key}
                className="relative cursor-pointer px-6 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 focus:outline-none"
                selectedClassName="!text-white !bg-gradient-to-r !from-blue-500 !to-blue-600 !shadow-md"
              >
                <span className="relative z-10">
                  {category.name}
                </span>
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          <div className="min-h-[400px] bg-white rounded-2xl shadow-sm p-6 mt-4">
            {categories.map((category) => {
              const categoryClasses = populerClasses.filter(
                (data) => data.category === category.key
              );

              return (
                <TabPanel key={category.key} className="animate-fadeIn">
                  {categoryClasses.length > 0 ? (
                    <Class_Catagory_tab class_catagory={categoryClasses} />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        No courses available yet
                      </h3>
                      <p className="text-gray-500 text-center max-w-sm">
                        We're working on adding amazing courses in {category.name}. Check back soon!
                      </p>
                    </div>
                  )}
                </TabPanel>
              );
            })}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PopulerCourse;
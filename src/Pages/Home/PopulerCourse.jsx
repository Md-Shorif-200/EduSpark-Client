import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useClass from '../../Hooks/useClass';
import Class_Catagory_tab from '../../Pages/Class/Class_Catagory_tab';

const PopulerCourse = () => {
  const [classes, refetch, isLoading] = useClass();

  const approvedClass = classes.filter(classData => classData.status === 'approved');
  const sortedClass = approvedClass.sort((a,b) => b.totalEnrollments - a.totalEnrollments);
  const populerClasses = sortedClass.slice(0,8);

  const web_development = populerClasses.filter(data => data.category === "web_development");
  const app_development = populerClasses.filter(data => data.category === "app_development");
  const cyber_security = populerClasses.filter(data => data.category === "cyber_security");
  const design_and_multimedia = populerClasses.filter(data => data.category === "design_and_multimedia");
  const digital_marketing = populerClasses.filter(data => data.category === "digital_marketing");
  const office_management = populerClasses.filter(data => data.category === "office_management");
 ;

  return (
    <div className='secondary_bg_color common_padding py-10'>
      <div className='bg-white px-4 pb-10 rounded-2xl'>
        <div className='pt-6 pb-12 text-center'>
          <h1 className='section_title'>Explore Popular Courses</h1>
        </div>

        <Tabs>
          <TabList className=" sm:flex  gap-4 mb-8 border-b-2 border-gray-200 border-none">
            <Tab className="cursor-pointer px-4 py-2 my-2 bg-[#EAECF0] border border-gray-300  rounded hover:bg-blue-500 hover:text-white focus:outline-none" selectedClassName="bg-blue-500 text-white font-semibold">
             Web Development
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 my-2 bg-[#EAECF0] border border-gray-300 rounded hover:bg-blue-500 hover:text-white focus:outline-none" selectedClassName="bg-blue-500 text-white font-semibold">
              App Development
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 my-2 bg-[#EAECF0] border border-gray-300 rounded hover:bg-blue-500 hover:text-white focus:outline-none" selectedClassName="bg-blue-500 text-white font-semibold">
                  Cyber Security
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 my-2 bg-[#EAECF0] border border-gray-300 rounded hover:bg-blue-500 hover:text-white focus:outline-none" selectedClassName="bg-blue-500 text-white font-semibold">
             Design & Multimedia
            </Tab>

               <Tab className="cursor-pointer px-4 py-2 my-2 bg-[#EAECF0] border border-gray-300 rounded hover:bg-blue-500 hover:text-white focus:outline-none" selectedClassName="bg-blue-500 text-white font-semibold">
                Digital Marketing
            </Tab>


               <Tab className="cursor-pointer px-4 py-2 my-2 bg-[#EAECF0] border border-gray-300 rounded hover:bg-blue-500 hover:text-white focus:outline-none" selectedClassName="bg-blue-500 text-white font-semibold">
               Office Management
            </Tab>


          </TabList>

          <TabPanel>
            <Class_Catagory_tab class_catagory={web_development} />
          </TabPanel>
          <TabPanel>
            <Class_Catagory_tab class_catagory={app_development} />
          </TabPanel>
          <TabPanel>
            <Class_Catagory_tab class_catagory={cyber_security} />
          </TabPanel>
          <TabPanel>
            <Class_Catagory_tab class_catagory={design_and_multimedia} />
          </TabPanel>
          <TabPanel>
            <Class_Catagory_tab class_catagory={digital_marketing} />
          </TabPanel>
          <TabPanel>
            <Class_Catagory_tab class_catagory={office_management} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PopulerCourse;


import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import img from '../../assets/InspireTeacher/teacher-6831688_640.webp'

// matarial ui accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClassDetailsAccordion from './ClassDetailsAccordion';

// react icons

import { RiHome2Line } from "react-icons/ri";
import { FaStar, FaStarHalf } from 'react-icons/fa';

import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoProjectSymlink } from 'react-icons/go';

import { LiaCertificateSolid, LiaCircleNotchSolid, LiaCriticalRole } from "react-icons/lia";
import useClass from '../../Hooks/useClass';


const ClassDetails = () => {
     const classData = useLoaderData()
     const {user} = useAuth()
     const {id} = useParams();
 
      const [classes,refetch,isLoading] = useClass()

      
      
      
      const classDetails = classes.find(cls => cls._id == id);

      console.log(classDetails);
      

      
  
  
            
    //  const {_id,title,name ,email, price ,description, status , image,duration,totalEnrollments,totalLectures,totalProjects,courseCurriculam,time,category}  = classDetails;

   
     
              
               const gettingStarted = classDetails?.courseCurriculam.slice(0,5)
                console.log(gettingStarted);
                

    return (
        <div className='classs_details_container mb-40 z-0   '>

            
<div className="class_cnt bg-[#F2F7FD] px-2 lg:px-16">
                    <p className="subtitle text-gray-400  items-center pt-4 hidden lg:flex">    <RiHome2Line></RiHome2Line>/ <span> {classDetails?.category} </span>/ <span>{classDetails?.title} </span>  </p>

                    <div className="w-[16%] primary_bg_color px-2 py-1 text-white text-center rounded-xl font-semibold mt-16 hidden md:block">  {classDetails?.category} </div>
                  <h1 className='text-3xl font-bold mt-4 capitalize secondary_text_color'> {classDetails?.title} </h1>
                
                <div className='block md:flex gap-10 items-center capitalize  py-8 secondary_text_color'>
                       <div className='flex items-center gap-x-4 '>
                            <img src={img} alt="" className='w-12 h-12 rounded-full' />
                              <div className=''>
                                  <h1 className='secondary_text_color font-semibold'>teacher</h1>
                                  <p className='font-semibold mt-1'>{name} </p>
                              </div>
                       </div>

                       <div className='my-6'>
                                  <h1 className='secondary_text_color font-semibold'>category</h1>
                                  <p className='font-semibold mt-1'>{classDetails?.category} </p>
                        </div>


                              <div className='my-6'>
                                  <h1 className='secondary_text_color font-semibold'>last updated</h1>
                                  <p className='font-semibold mt-1'>{classDetails?.time} </p>
                              </div>

                              <div className='my-6'>
                                        <ul className='flex gap-1 text-md my-1'>
                                               <li className='text-[#F4B400]'>  <FaStar></FaStar> </li>
                                               <li className='text-[#F4B400]'>  <FaStar></FaStar> </li>
                                               <li className='text-[#F4B400]'>  <FaStar></FaStar> </li>
                                               <li className='text-[#F4B400]'>  <FaStar></FaStar> </li>
                                               <li className='text-[#7c7a75]'>  <FaStarHalf></FaStarHalf> </li>
                                             </ul>
                                  <p> 0/0 </p>
                              </div>
                   
                </div>

                  </div>


                 <div className=' lg:flex justify-between'>
                 <div className="class_details lg:w-[65%]">
           


           <div className="about_class px-2 lg:px-16">
                 <h1 className='about_heading'>About Course</h1>
                <p> {classDetails?.description?.slice(0,400)} </p>
           </div>
           {/* //id={`panel${index}-header`}     aria-controls={`panel${index}-content`} */}
           <div className="course_curriculam px-2 lg:px-16">
                 <h1 className='about_heading'>course curriculam </h1>

                 {/* matarial ui accordion */}
                 <div>

<Accordion defaultExpanded className=''>
 <AccordionSummary
   expandIcon={<ExpandMoreIcon />}
   aria-controls="panel1-content"
   id="panel1-header"
  
 >
   <Typography component="span">Getting Started</Typography>
 </AccordionSummary>
 <AccordionDetails>
   <Typography>
          <ul>
            {
               gettingStarted?.map((data,index) => <li>  <ClassDetailsAccordion key={index} accordionData={data}></ClassDetailsAccordion> </li>)
            }
            
          </ul>
   </Typography>
 </AccordionDetails>
</Accordion>

<Accordion>
 <AccordionSummary
   expandIcon={<ExpandMoreIcon />}
   aria-controls="panel2-content"
   id="panel2-header"
 >
   <Typography component="span">Header</Typography>
 </AccordionSummary>
 <AccordionDetails>
   <Typography>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
     malesuada lacus ex, sit amet blandit leo lobortis eget.
   </Typography>
 </AccordionDetails>
</Accordion>
</div>
{/* accordion ends */}
           </div>

    </div>


     
                {/* enroll card */}
      <div className="enroll_card lg:pr-14 mt-4  lg:-mt-40 sticky ">
      <div className="card bg-base-100 w-full lg:w-90 shadow-sm">
<figure className='p-4'> 
<img
src={classDetails?.image}
alt={classDetails?.title}
 className='w-full'
/>
</figure>
<div className="px-4 lg:px-8  py-4">
<div className="w-full">
<Link to={`/payment/${classDetails?._id}`} > <button className="primary_btn my-4 uppercase"> <span>enroll now</span></button> </Link>
</div>
<h2 className="card-title my-4">This Course Includes : </h2>

<div className="card_cnt">
 <div className='flex items-center justify-between text-xl '>
             <div className="flex items-center gap-x-2">
                  <MdOutlineSlowMotionVideo></MdOutlineSlowMotionVideo>
      <p> Lectures </p>
             </div>
      <p> {classDetails?.totalLectures} </p>
 </div>
 
 <div className="divider my-2"></div>

 <div className='flex items-center justify-between text-xl '>
          <div className="flex items-center gap-x-2">
                  <GoProjectSymlink></GoProjectSymlink>

       <p>Project</p>
          </div>
       <p>{classDetails?.totalProjects} </p>
 </div>
 
 <div className="divider my-2"></div>

 <div className='flex items-center justify-between text-xl '>
               <div className="flex items-center gap-x-2">
                  <LiaCircleNotchSolid></LiaCircleNotchSolid>
         <p> certificate </p>
               </div>
         <p> Yes </p>
 </div>
 
 <div className="divider my-2"></div>
</div>

</div>
</div>
         </div>

                 </div>

        </div>
    );
};

export default ClassDetails;
    







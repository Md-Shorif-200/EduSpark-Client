import React from 'react';

// import ChatForm from "../../Common/chatForm";
// import ShadcnUi from "../../Common/ShadcnUi";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import EducationFaculties from "./EducationFaculties";
import ExclusiveSolution from "./ExclusiveSolution";
import Feedback from "./Feedback";
import InspireAsTeacher from "./InspireAsTeacher";
import Partners from "./Partners";
import PlatformOverview from "./PlatformOverview";
import PopulerCourse from "./PopulerCourse";
import Statistics from "./Statistics";
import SuccessHistory from "./SuccesStory";
import Motivational_Intro from './Motivational_Intro';


const Home = () => {
    return (
        <div>
                   {/* <ShadcnUi></ShadcnUi> */}
                    {/* <ChatForm></ChatForm> */}
               <Banner></Banner>
               <PopulerCourse></PopulerCourse>
                                <Motivational_Intro></Motivational_Intro>
               {/* <AboutUs></AboutUs> */}
               {/* <EducationFaculties></EducationFaculties> */}
               {/* <Partners></Partners> */}
               <Statistics></Statistics>
               {/* <Feedback></Feedback> */}
               {/* <PlatformOverview></PlatformOverview> */}
               {/* <InspireAsTeacher></InspireAsTeacher> */}
               {/* <ExclusiveSolution></ExclusiveSolution> */}
               {/* <SuccessHistory></SuccessHistory> */}
        </div>
    );
};

export default Home;
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


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <AboutUs></AboutUs>
               <EducationFaculties></EducationFaculties>
               {/* <Partners></Partners> */}
               <PopulerCourse></PopulerCourse>
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
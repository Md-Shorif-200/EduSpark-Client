import Banner from "./Banner";
import ExclusiveSolution from "./ExclusiveSolution";
import Feedback from "./Feedback";
import InspireAsTeacher from "./InspireAsTeacher";
import Partners from "./Partners";
import PlatformOverview from "./PlatformOverview";
import PopulerCourse from "./PopulerCourse";
import SuccessHistory from "./SuccesStory";


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <Partners></Partners>
               <PopulerCourse></PopulerCourse>
               <Feedback></Feedback>
               <PlatformOverview></PlatformOverview>
               <InspireAsTeacher></InspireAsTeacher>
               <ExclusiveSolution></ExclusiveSolution>
               <SuccessHistory></SuccessHistory>
        </div>
    );
};

export default Home;
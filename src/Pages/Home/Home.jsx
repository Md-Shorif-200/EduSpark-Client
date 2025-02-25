import Banner from "./Banner";
import Feedback from "./Feedback";
import Partners from "./Partners";
import PlatformOverview from "./PlatformOverview";
import PopulerCourse from "./PopulerCourse";


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <Partners></Partners>
               {/* <PopulerCourse></PopulerCourse> */}
               <Feedback></Feedback>
               <PlatformOverview></PlatformOverview>
        </div>
    );
};

export default Home;
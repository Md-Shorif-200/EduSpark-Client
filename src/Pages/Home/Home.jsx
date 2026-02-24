import React, { lazy, Suspense } from 'react';
import Loading from '../../Common/Loading';
import Banner from './Banner/Banner';

const PopulerCourse = lazy(() => import('./PopulerCourse'));
const Motivational_Intro = lazy(() => import('./Motivational_Intro'));
const AboutUs = lazy(() => import('./AboutUs'));
const EducationFaculties = lazy(() => import('./EducationFaculties'));
const Partners = lazy(() => import('./Partners'));
const Statistics = lazy(() => import('./Statistics'));
const Feedback = lazy(() => import('./Feedback'));
const PlatformOverview = lazy(() => import('./PlatformOverview'));
const InspireAsTeacher = lazy(() => import('./InspireAsTeacher'));
const ExclusiveSolution = lazy(() => import('./ExclusiveSolution'));
const SuccessHistory = lazy(() => import('./SuccesStory'));

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <PopulerCourse />
        <Motivational_Intro />
        <AboutUs />
        <EducationFaculties />
        <Partners />
        <Statistics />
        <Feedback />
        <PlatformOverview />
        <InspireAsTeacher />
        <ExclusiveSolution />
        <SuccessHistory />
      </Suspense>
    </div>
  );
};

export default Home;

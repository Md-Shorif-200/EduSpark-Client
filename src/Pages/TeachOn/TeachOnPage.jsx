

import Loading from '../../Common/Loading';
import useRole from '../../Hooks/useRole';
import RejectionMeassage from './RejectionMeassage';



import TeacherConfirmation from './TeacherConfirmation';

const TeachOnPage = () => {

    const [data,isLoading] = useRole();
    const status = data?.status;

    if(isLoading){
         return <Loading></Loading>
    }
    

    

       return (
           <div>

             {status === 'accepted' &&  <TeacherConfirmation></TeacherConfirmation>}
                  {status === 'rejected' &&  <RejectionMeassage></RejectionMeassage>}
           </div>
       )


}

export default TeachOnPage;
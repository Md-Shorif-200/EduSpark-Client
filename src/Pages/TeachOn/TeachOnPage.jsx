import React from 'react';
import TeachOnApplyForm from './TeachOnApplyForm';
import useRole from '../../Hooks/useRole';
import TeacherStatusMeassage from './TeacherStatusMeassage';

const TeachOnPage = () => {
                    const [role,isLoading] = useRole();
                     console.log(role);
                     
    return (
        <div>
            

                    {
                        role === 'teacher' ? 
                        <>
                        <TeacherStatusMeassage></TeacherStatusMeassage>
                        </> 
                        :
                          <>
                 <TeachOnApplyForm></TeachOnApplyForm>
                          
                          </>
                    }


         

        </div>
    );
};

export default TeachOnPage;
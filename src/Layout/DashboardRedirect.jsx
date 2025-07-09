import React from 'react';
import useRole from '../Hooks/useRole';
import Loading from '../Common/Loading';
import { Navigate } from 'react-router-dom';

const DashboardRedirect = () => {
      const [data,refetch,isLoading]= useRole();
      const role = data.role;
      console.log(role);
      
      if(isLoading || !role){
            return <Loading></Loading>
      }

                            

                    if(role === 'admin'){
                           return <Navigate to='/dashboard/admin'></Navigate>
                    }else if(role === 'student'){
                        return <Navigate to='/dashboard/student'></Navigate>
                    }else{
                          return <Navigate to='/dashboard/teacher'></Navigate>
                    }


};

export default DashboardRedirect;
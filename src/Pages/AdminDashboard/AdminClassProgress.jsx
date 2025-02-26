import React from 'react';
import { useParams } from 'react-router-dom';
import ClassProgress from '../TeacherDashboard/ClassProgress';

const AdminClassProgress = () => {
      const {id} = useParams()
       console.log(id);
       
    return (
        <div>
             <ClassProgress></ClassProgress>
        </div>
    );
};

export default AdminClassProgress;
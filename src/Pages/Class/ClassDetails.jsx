
import { Link, useLoaderData, useParams } from 'react-router-dom';



const ClassDetails = () => {
     const classData = useLoaderData()

  
            
            const {_id,title, name, email ,price, description, image,status} = classData;


    return (
        <div>
            <div className="course_cnt">
              
            </div>
            <div className="course_img"></div>
        </div>
    );
};

export default ClassDetails;
      // <Link to={`/payment/${_id}`} className="btn btn-primary w-[120px] my-4">pay</Link>
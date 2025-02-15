import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useClass from "../../Hooks/useClass";



const AllClasses = () => {
    const axiosSecure = useAxiosSecure()

    const [classes,refetch] = useClass()
  

    return (
          <div>
              <h1> total class  : {classes.length} </h1>
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>image</th>
              <th>email</th>
              <th>description</th>
              <th></th>
              <th>action</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
    
            {
                classes.map((singleClass,index) =>
                    <tr>
                <th> {index + 1}</th>
                <td> {singleClass.title} </td>
                <td> {singleClass.image} </td>
                <td> {singleClass.email} </td>
                <td> {singleClass.description} </td>
                <td>  <button className="btn">approve</button>  </td>
                <td>  <button className="btn">reject</button>  </td>
                <td>  <button className="btn">progress</button>  </td>
         
              </tr>)
            }
       
          </tbody>
        </table>
      </div>
          </div>
    );
};

export default AllClasses;
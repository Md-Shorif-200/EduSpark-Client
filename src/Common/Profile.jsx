import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";



const Profile = () => {
  
  const {user} = useAuth();
  const  [data, isLoading] = useRole();
  
  const userName = user?.displayName;
  const email = user?.email;
  const image = user?.photoURL;
  const phone = '0124698745';
  const role = data.role


   
   


    return (
        <div className="">
            <div className="hero  bg-base-200 min-h-screen " >
  <div className="hero-content flex-col  md:flex-row gap-x-14">
    <img
      src={image}
      class=" w-[250px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-md font-semibold capitalize my-3">  name :         {userName}     </h1>
      <h1 className="text-md font-semibold capitalize my-3">  email :         {email}     </h1>
      <h1 className="text-md font-semibold capitalize my-3">  phone :         {phone}     </h1>
      <h1 className="text-md font-semibold capitalize my-3">  role :         {role}     </h1>

    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;
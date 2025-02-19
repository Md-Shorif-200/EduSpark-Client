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
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className=""> {userName} </h1>
      <h1 className=""> {email} </h1>
      <h1 className=""> {phone} </h1>
      <h1 className=""> {role} </h1>

    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;
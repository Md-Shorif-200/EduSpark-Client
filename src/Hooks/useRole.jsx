import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["role"],
        // enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/role/${user.email}`);

      return data;
    },
  });

  return [data, refetch, isLoading];
};

export default useRole;


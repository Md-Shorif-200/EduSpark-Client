import Loading from "../../Common/Loading";
import useRole from "../../Hooks/useRole";
import RejectionMeassage from "./RejectionMeassage";

import TeacherConfirmation from "./TeacherConfirmation";
import TeachOnApplyForm from "./TeachOnApplyForm";

const TeachOnPage = () => {
  const [data, , isLoading] = useRole();
  const status = data?.status;
  const role = data?.role;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {status === "accepted" && role === "teacher" ? (
        <TeacherConfirmation />
      ) : status === "rejected" ? (
        <RejectionMeassage />
      ) : (
        <TeachOnApplyForm />
      )}
    </div>
  );
};

export default TeachOnPage;

import { useParams } from "react-router-dom";

const DashBoard = () => {
  const { dashboardName } = useParams();

  return (
    <div>
      This is DashBoard : {dashboardName}
    </div>
  );
};

export default DashBoard;

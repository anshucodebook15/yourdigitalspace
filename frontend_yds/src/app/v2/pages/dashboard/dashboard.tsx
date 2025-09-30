import Header from "../../components/main/header";
import StatCard from "../../components/main/statcard";
// import AttendanceTable from "../../components/main/table/Attendencetable";
import { useLayoutContext } from "../../layouts/mainlayout";

const StatsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <StatCard
      title="Total Employees"
      value="126"
      change="+12.5%"
      color="green"
    />
    <StatCard title="Today Present" value="68" change="+5.2%" color="green" />
    <StatCard title="Managers" value="12" change="+3" color="green" />
    <StatCard title="Absents" value="21" change="-2.1" color="red" />
  </div>
);

const Dashboard = () => {
  const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        pageTitle={"Welcome, Rahul Siwal!"}
      />
      <StatsCards />
      {/* <AttendanceTable /> */}
    </>
  );
};

export default Dashboard;

import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";
import EmployeeRegister from "./register.employee/register.employee";
// import EmployeeTable from "./table.employee/table.employee";

const Employees = () => {
  const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Employees & Stats"}>
        {/* Export Button */}
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium">
          Export Report
        </button>

        {/* New Campaign */}
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium">
          Add Employee
        </button>
      </Header>

      {/* <EmployeeTable /> */}
      <EmployeeRegister />
      <div className="py-2"></div>
      {/* <TestEmployeeRegister /> */}
    </>
  );
};

export default Employees;

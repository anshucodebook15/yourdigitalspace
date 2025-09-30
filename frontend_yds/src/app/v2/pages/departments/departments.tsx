import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";
import DepartmentTable from "./departmentTable";

const Departments = () => {
  const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Departments"} />
      <DepartmentTable />
    </>
  );
};

export default Departments;

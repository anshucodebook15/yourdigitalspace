import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";


const Timesheet = () => {
 const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Employees & Stats"} />
      <h1>Header is here to go arround</h1>
    </>
  );
}

export default Timesheet
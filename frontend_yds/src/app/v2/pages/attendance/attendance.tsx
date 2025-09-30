import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";
import AttendanceTable from "./table.attendance";

const Attendance = () => {
  const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Attendances"} />
      <AttendanceTable />
    </>
  );
};

export default Attendance;

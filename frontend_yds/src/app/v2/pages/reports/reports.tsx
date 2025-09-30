import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";


const Reports = () => {
const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Reports"} />
      <h1>Header is here to go arround</h1>
    </>
  );
}

export default Reports
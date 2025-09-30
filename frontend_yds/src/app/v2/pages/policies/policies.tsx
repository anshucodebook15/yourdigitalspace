import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";


const Policies = () => {
 const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Policies"} />
      <h1>Header is here to go arround</h1>
    </>
  );
}

export default Policies
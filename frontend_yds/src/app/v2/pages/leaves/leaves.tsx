import Header from "../../components/main/header";
import { useLayoutContext } from "../../layouts/mainlayout";

const Leaves = () => {
  const { toggleSidebar } = useLayoutContext() as any;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} pageTitle={"Leaves Requests"} />
      <h1>Header is here to go arround</h1>
    </>
  );
};

export default Leaves;

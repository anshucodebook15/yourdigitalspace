import { Main } from "../components/main";

const Layout = ({ children }: any) => {
  return (
    <div className="yds_system_design">
      {/* <Sidebar /> */}
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

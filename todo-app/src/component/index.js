import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="my-5">
        {/* <div className="alert alert-danger">Dummy text</div> */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

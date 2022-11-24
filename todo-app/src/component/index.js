import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="alert alert-danger">Dummy text</div>
      <Outlet />
    </>
  );
};

export default Layout;

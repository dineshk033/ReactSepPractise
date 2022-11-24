import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <h5>Product Dashboard</h5>
      <Outlet />
    </>
  );
};

export default ProductLayout;

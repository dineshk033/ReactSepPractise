import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  let params = useParams();
  console.log(params.productID); // "hotspur"

  useEffect(() => {
    //APi
  }, []);

  return (
    <>
      <h5>Single Product</h5>
    </>
  );
};

export default SingleProduct;

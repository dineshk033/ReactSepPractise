import { useEffect } from "react";
/**
 * scenario 1
 * useEffect(() => {
    console.log("it has been called for only one time while mounting");
  }, []);
 * scenario 2
 useEffect(() => {
    console.log("it has called from effect", data, read);
  }, [data, read]);
 based on dependancey change it will invoke useEffect
 */
const EffectComponent = ({ data, read }) => {
  useEffect(() => {
    console.log("it has called from effect", data, read);
    return () => {
      //do unsubscribe here
      //unmounting/ detroy phase
    };
  }, [data, read]);
  return (
    <>
      <h6>Use Effect</h6>
    </>
  );
};

export default EffectComponent;

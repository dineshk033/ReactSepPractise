import FeatureHomePage from "../features/homepage";
import { ContainerFluid } from "../shared/common-styled";

const Homepage = (props) => {
  console.log(props);
  return (
    <>
      <ContainerFluid>
        <FeatureHomePage data={props.data} />
      </ContainerFluid>
    </>
  );
};

export default Homepage;

import TemplateOne from "../../shared/components/card/template1";
import Banner from "./banner";
import { Grid, Title } from "./homepage-styled";

const FeatureHomePage = ({ data }) => {
  return (
    <>
      <Banner />
      <Grid>
        <div></div>
        <TemplateOne {...data[0]} />
        <TemplateOne {...data[2]} />
        <TemplateOne {...data[1]} />
        <TemplateOne {...data[3]} />
      </Grid>
    </>
  );
};

export default FeatureHomePage;

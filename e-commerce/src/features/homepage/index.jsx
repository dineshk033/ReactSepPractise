import { useEffect, useState } from "react";
import TemplateOne from "../../shared/components/card/template1";
import Banner from "./banner";
import { Grid } from "./homepage-styled";

const FeatureHomePage = ({ data }) => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    const TEMP = [];
    console.log("entered", data);
    data.forEach((item) => {
      if (!TEMP.includes(item.brand)) {
        TEMP.push(item.brand);
        // setBrand([...brand, item.brand]);
      }
    });

    setBrand(TEMP);
  }, [data]);
  console.log(brand);
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

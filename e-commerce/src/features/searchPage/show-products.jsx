import TemplateOne from "../../shared/components/card/template1";
import { Container, ProductFlex } from "./search-styled";

const ShowProducts = ({ data }) => {
  return (
    <Container>
      <h5>Show Products</h5>
      <ProductFlex>
        {data.map((item) => {
          return <TemplateOne key={item.display_name} {...item} />;
        })}
      </ProductFlex>
    </Container>
  );
};

export default ShowProducts;

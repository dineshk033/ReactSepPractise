import styled from "styled-components";
import { Caption, Title } from "../../common-styled";

const Container = styled.div`
  text-align: center;
`;

const TemplateOne = ({ image_url, display_name, brand }) => {
  return (
    <Container>
      <img
        style={{ marginBottom: "10px" }}
        src={image_url}
        alt={display_name}
        width="100%"
        height="200"
      />
      <Caption fontSize="md">{brand}</Caption>
      <Title fontSize="xm">{display_name}</Title>
      <Caption bold color="success" fontSize="md">
        upto 75% off
      </Caption>
    </Container>
  );
};

TemplateOne.defaultProps = {
  display_name: "Awesome Granite Sausages Becker and Borer",
  in_stock: "6",
  image_url: "https://loremflickr.com/640/480/fashion?lock=80096",
  categories: "Mouse, Fashion",
  price: "$361",
  discount: "3",
  color: "grey",
  seller_names: "Simonis, Becker and Borer",
  brand: "Modern",
  description:
    "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  review: [],
  ratings: "3",
};

export default TemplateOne;

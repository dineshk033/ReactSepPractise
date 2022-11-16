import { useEffect, useState } from "react";
import { Container, LinkItem } from "./search-styled";

const FilteredSection = ({ data, handleBrandFilter }) => {
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    const TEMP = [];
    const COLOR = [];

    data.forEach((item) => {
      if (!TEMP.includes(item.brand)) {
        TEMP.push(item.brand);
      }
      if (!COLOR.includes(item.color)) {
        COLOR.push(item.color);
      }
    });

    setBrand(TEMP);
    setColor(COLOR);
  }, [data]);

  const iterate = (arg) => {
    return arg.map((item) => (
      <LinkItem key={item} onClick={() => handleBrandFilter(item)}>
        {item}
      </LinkItem>
    ));
  };

  return (
    <Container>
      <h5>Filter</h5>
      <h5>Brand</h5>
      {iterate(brand)}
      <h5>Color</h5>
      {iterate(color)}
    </Container>
  );
};

export default FilteredSection;

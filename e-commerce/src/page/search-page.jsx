import { useEffect, useState } from "react";
import styled from "styled-components";
import FilteredSection from "../features/searchPage/filter-section";
import ShowProducts from "../features/searchPage/show-products";
import { ContainerFluid } from "../shared/common-styled";
import { createMockRecords } from "../shared/utils/mockResponse";

const Container = styled(ContainerFluid)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`;
export const SearchPageComponent = () => {
  /**original records */
  const [state, setState] = useState([]);
  /**filterd records */
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const DATA = createMockRecords(20);
    setState(DATA);
    setFiltered(DATA);
  }, []);

  const handleBrandFilter = (arg) => {
    const FILTER = state.filter((item) => arg === item.brand);
    setFiltered(FILTER);
  };

  return (
    <>
      <h5>Its Search page</h5>
      <Container>
        <FilteredSection data={state} handleBrandFilter={handleBrandFilter} />
        <ShowProducts data={filtered} />
      </Container>
    </>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  padding: 1rem;
`;

export const LinkItem = styled.div`
  color: ${(props) => props.theme.color.primary};
  padding: ${(props) => props.theme.padding.sm};
  cursor: pointer;
`;

export const ProductFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

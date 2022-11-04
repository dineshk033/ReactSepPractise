import styled from "styled-components";

export const ContainerTodo = styled.div`
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const ItemContainer = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

ItemContainer.defaultProps = {
  justify: "space-between",
};

export const Flex = styled.div`
  display: flex;
`;

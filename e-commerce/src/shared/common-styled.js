import styled from "styled-components";

export const ContainerFluid = styled.div`
  padding: 1rem 10rem;
`;

export const Caption = styled.div`
  font-size: ${(props) => props.theme.fontSize[props.fontSize]};
  color: ${(props) => props.theme.color[props.color]};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
`;

Caption.defaultProps = {
  fontSize: "xm",
  color: "lightGrey",
  bold: false,
};

export const Title = styled.h5`
  font-size: ${(props) => props.theme.headingFontSize[props.fontSize]};
  color: ${(props) => props.theme.color[props.color]};
  margin: 0.6rem 0 1rem;
`;

Title.defaultProps = {
  fontSize: "md",
  color: "dark",
};

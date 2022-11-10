import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
`;

export const LogoTitle = styled.h5`
  margin: ${(props) => props.theme.margin.md} 0;
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => props.theme.headingFontSize.md};
`;
LogoTitle.defaultProps = {
  color: "primary",
};

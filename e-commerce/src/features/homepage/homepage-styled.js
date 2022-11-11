import styled from "styled-components";

/**
 * theme we are fetting becoz of theme provider,
 * theme providers provide theme from the themes object in src\theme
 * i need to check the key or add new values means, we need to update in theme file
 */
export const Title = styled.h6`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.headingFontSize.lg};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

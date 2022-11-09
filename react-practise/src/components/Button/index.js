import styled from "styled-components";

const COLOR = {
  primary: "#0d6efd",
  danger: "#dc3545",
  primaryHover: "#0b5ed7",
  dangerHover: "#bb2d3b",
};

const CustomButton = styled.button`
  background-color: ${(props) => COLOR[props.color]};
  color: #fff;
  padding: 1rem;
  margin: 1rem;
  border: none;
  outline: none;
  min-width: 120px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR["primaryHover"]};
  }
`;

const SuccessButton = styled(CustomButton)`
  &.danger {
    background-color: ${COLOR["danger"]};
  }
`;

const Button = ({ label, children }) => {
  return (
    <SuccessButton color="primary" className="danger">
      {children}
    </SuccessButton>
  );
};

Button.defaultProps = {
  label: "Primary",
};

export default Button;

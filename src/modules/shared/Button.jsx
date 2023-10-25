import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  min-height: 48px;
  min-width: 178px;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children || "text"}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

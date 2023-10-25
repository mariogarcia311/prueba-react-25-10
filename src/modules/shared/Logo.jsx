import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const StyledLogo = styled.div`
  img {
    width: ${(props) => (props.width ? props.width : "62px")};
  }
`;

const Logo = ({ children, width }) => {
  return (
    <StyledLogo width={width}>
      {children || <img src={logo} alt="Logo" />}
    </StyledLogo>
  );
};

Logo.propTypes = {
  children: PropTypes.element,
  width: PropTypes.string,
};

export default Logo;

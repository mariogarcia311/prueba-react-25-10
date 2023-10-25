import { Container } from "../shared/Container";
import { NavBar } from "../shared/NavBar";
import PropTypes from "prop-types";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};

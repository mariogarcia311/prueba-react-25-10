import { NavBar } from "../shared/NavBar";
import PropTypes from "prop-types";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};

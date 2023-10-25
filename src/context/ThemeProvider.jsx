import { useMemo, useReducer } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "./ThemeContext";
import ThemeReducer, { initialTheme } from "./ThemeReducer";

const ThemeProvider = ({ children }) => {
  const [store, dispatch] = useReducer(ThemeReducer, initialTheme());
  const storeDispatch = useMemo(() => [store, dispatch], [store, dispatch]);
  return (
    <ThemeContext.Provider value={storeDispatch}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element,
};

export default ThemeProvider;

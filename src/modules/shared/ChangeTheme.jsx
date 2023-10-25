import { useContext, useEffect, useState } from "react";
import { Toggle } from "./Toggle";
import { ThemeContext } from "../../context/ThemeContext";
import { types } from "../../context/ThemeReducer";

export const ChangeTheme = () => {
  const [store, dispatch] = useContext(ThemeContext);
  const [isdark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(store.theme == "dark");
  }, [store.theme]);

  const handleToggle = () => {
    setIsDark(!isdark);
    dispatch({
      type: types.change,
      payload: {
        store,
      },
    });
  };

  return (
    <div>
      <Toggle
        label={`Modo ${isdark ? "Oscuro" : "Claro"}`}
        checked={isdark}
        onChange={handleToggle}
      />
    </div>
  );
};

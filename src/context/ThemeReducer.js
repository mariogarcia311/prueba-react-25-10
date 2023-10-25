export const initialTheme = () => {
  const userPreferredColorScheme = localStorage.getItem(
    "userPreferredColorScheme"
  );

  const currentColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  let theme = userPreferredColorScheme || currentColorScheme;

  document.documentElement.setAttribute("data-theme", theme);

  return { theme };
};

export const types = {
  change: "change theme",
};

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case types.change: {
      let theme = state.theme;
      if (theme === "light") {
        localStorage.setItem("userPreferredColorScheme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        theme = "dark";
      } else {
        localStorage.setItem("userPreferredColorScheme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        theme = "light";
      }
      return { theme };
    }
    default:
      break;
  }
};

export default ThemeReducer;

export default function useDate() {
  const userPreferredColorScheme = localStorage.getItem(
    "userPreferredColorScheme"
  );

  const currentColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  let theme = userPreferredColorScheme || currentColorScheme;

  document.documentElement.setAttribute("data-theme", theme);

  function toggleTheme() {
    if (theme === "light") {
      localStorage.setItem("userPreferredColorScheme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      theme = "dark";
    } else {
      localStorage.setItem("userPreferredColorScheme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      theme = "light";
    }
  }
  return { theme, toggleTheme };
}

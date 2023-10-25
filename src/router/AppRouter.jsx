import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BillsPage } from "../pages/BillsPage";
import { LoginPage } from "../pages/LoginPage";
import ThemeProvider from "../context/ThemeProvider";

export const AppRouter = () => {
  const router = createBrowserRouter([
    { path: "/", element: <BillsPage /> },
    { path: "login", element: <LoginPage /> },
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

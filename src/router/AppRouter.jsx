import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { BillsPage } from "../pages/BillsPage";
import { LoginPage } from "../pages/LoginPage";
import ThemeProvider from "../context/ThemeProvider";

export const AppRouter = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="bills-page" replace /> },
    { path: "login", element: <LoginPage /> },
    { path: "bills-page", element: <BillsPage /> },
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

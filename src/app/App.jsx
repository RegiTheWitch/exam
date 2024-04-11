import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppContextProvider } from "./context/context";

export const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

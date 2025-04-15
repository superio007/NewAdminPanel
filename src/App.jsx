import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./Layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Homapage from "./Pages/Homepage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import TryPage from "./Pages/TryPage.jsx";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <ThemeProvider>
            <MainLayout />
          </ThemeProvider>
        }
      >
        <Route path="/" element={<Homapage />} />
        <Route path="/try" element={<TryPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

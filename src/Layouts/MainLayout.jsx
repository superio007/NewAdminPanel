import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/General/Navbar.jsx";
import Footer from "../components/General/Footer.jsx";
import SideBar from "../components/General/SideBar.jsx";
import { useTheme } from "../context/ThemeContext";

const MainLayouts = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex relative w-full">
        <div className="fixed top-16 left-0 h-full z-20">
          <SideBar />
        </div>
        <div className="flex-1 flex justify-center items-center ml-16">
          <Outlet />
        </div>
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default MainLayouts;

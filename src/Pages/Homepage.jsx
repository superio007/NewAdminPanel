// Homapage.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import SiteAudit from "../components/Home/SitAudit";

const Homapage = () => {
  const { theme } = useTheme(); // This only works if wrapped with ThemeProvider

  return (
    <div
      className={`w-full h-[100vh] ${theme === "light" ? "bg-gray-100" : "bg-[#101727]"}`}
    >
      <SiteAudit theme={theme} />
      {/* other components */}
    </div>
  );
};

export default Homapage;

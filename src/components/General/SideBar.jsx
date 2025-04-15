import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // adjust the path as needed

const SideBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed h-full group w-16 hover:w-40 transition-all duration-300
    ${
      theme === "light"
        ? "bg-white border-r border-gray-200"
        : "bg-gray-800 border-r border-gray-700"
    }
    flex flex-col py-4 z-10`}
    >
      <div className="flex flex-col space-y-6 w-full">
        {[
          { to: "/", icon: "fa-home", label: "Home" },
          { to: "/files", icon: "fa-file-alt", label: "Files" },
          { to: "/edit", icon: "fa-pen", label: "Edit" },
          { to: "/table", icon: "fa-table", label: "Table" },
          { to: "/stats", icon: "fa-chart-bar", label: "Statistics" },
          { to: "/global", icon: "fa-globe", label: "Global" },
          { to: "/search", icon: "fa-search", label: "Search" },
          { to: "/link", icon: "fa-link", label: "Link" },
          { to: "/cog", icon: "fa-cog", label: "Settings" },
          { to: "/sync", icon: "fa-sync-alt", label: "Sync" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 space-x-4 transition-all duration-300
                ${theme === "light" ? "text-black" : "text-white"} 
                ${
                  isActive
                    ? theme === "light"
                      ? "bg-blue-50 text-blue-500"
                      : "bg-blue-900 text-blue-300"
                    : ""
                }`
            }
          >
            <div className="w-6 text-center">
              <i className={`fas ${icon}`}></i>
            </div>
            <span
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } overflow-hidden transition-all duration-300 
                  group-hover:inline-block hidden whitespace-nowrap`}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

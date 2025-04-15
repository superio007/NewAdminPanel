import React , { useState } from "react";
import { useTheme } from "../../context/ThemeContext"; // Import the context hook

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Use the context to access theme and toggleTheme
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("agencyspot.seoscientist");

  const options = [
    "agencyspot.seoscientist",
    "agencyspot.client1",
    "agencyspot.client2",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`flex justify-between items-center px-6 py-3 ${
          theme === "light"
            ? "bg-white border-b border-gray-200"
            : "bg-gray-800 border-b border-gray-700"
        }`}
      >
        <div className="flex items-center">
          <h1
            className={`text-xl font-semibold ${
              theme === "light" ? "" : "text-white"
            }`}
          >
            SEO Scientist
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative inline-block text-left">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer px-3 py-2 rounded-full flex items-center space-x-2 ${
                theme === "light" ? "bg-gray-100" : "bg-gray-700"
              }`}
            >
              <i
                className={`fas fa-building text-sm ${
                  theme === "light" ? "" : "text-white"
                }`}
              ></i>
              <span
                className={`${theme === "light" ? "" : "text-white"} text-sm`}
              >
                {selected}
              </span>
              <i
                className={`fas fa-chevron-down text-xs ${
                  theme === "light" ? "" : "text-white"
                }`}
              ></i>
            </div>

            {isOpen && (
              <div
                className={`absolute right-0 mt-2 w-50 rounded-md shadow-lg z-10 ${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
              >
                <ul className="py-1">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                        theme === "light"
                          ? "text-gray-900 hover:bg-gray-100"
                          : "text-white hover:bg-gray-700"
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer !rounded-button whitespace-nowrap"
          >
            {theme === "light" ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas text-white fa-sun"></i>
            )}
          </button>
          <button className="p-2 rounded-full cursor-pointer !rounded-button whitespace-nowrap">
            <i
              className={`${
                theme === "light" ? "" : "text-white"
              } fas fa-expand-alt`}
            ></i>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

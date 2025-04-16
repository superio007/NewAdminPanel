import React from "react";
const Footer = ({ theme, toggleTheme }) => {
  return (
    <>
      <div
        className={`text-center ${
          theme === "light" ? "" : "text-white bg-[#1e2a3a]"
        } px-6 py-3`}
      >
        &copy; 2025 SEO Scientist. All Rights Reserved.
      </div>
    </>
  );
};
export default Footer;

import React from "react";
import { useState } from "react";
// import Charts from "./Charts"; // Assuming you have a Charts component
const MainContent = ({ theme }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-[#1e2a3a]"
      } p-6 rounded-2xl shadow-md w-full max-w-7xl mx-auto`}
    >
      <div className="flex flex-col space-y-6">
        {/* Tab buttons */}
        <div
          className={`mb-6 overflow-x-auto p-3 rounded-lg ${
            theme === "light" ? "bg-[#f9fafc]" : "bg-[#364153]"
          }`}
        >
          <div className="flex space-x-6">
            {[
              "Overview",
              "Issues",
              "Crawled Pages",
              "Statistics",
              "Compare Crawls",
              "Progress",
              "JS Impact",
              "Keywords",
              "On-Page",
              "Technical",
            ].map((tab) => (
              <button
                key={tab}
                className={`pb-3 px-1 font-medium whitespace-nowrap cursor-pointer !rounded-button ${
                  theme === "light" ? "" : "text-white"
                } ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;

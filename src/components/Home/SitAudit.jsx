import React from "react";
const SiteAudit = ({ theme }) => {
  return (
    <div
      className={`m-6 ${
        theme === "light" ? "bg-white" : "bg-[#1e2a3a]"
      } p-6 rounded-2xl shadow-md w-full max-w-7xl mx-auto`}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2
              className={`${
                theme === "light" ? "" : "text-white"
              } text-xl font-semibold`}
            >
              Site Audit
            </h2>{" "}
            |
            <p
              className={`${
                theme === "light" ? "" : "text-white"
              } text-sm text-gray-500 `}
            >
              <i className={`fas fa-globe`}></i> No website selected{" "}
            </p>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            • Updated: April 6, 2025 • Campaign #4
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`${
              theme === "light"
                ? "bg-[#f3f4f6] text-black"
                : "bg-[#364153] text-white"
            } px-3 py-2 rounded-md text-sm`}
          >
            Rerun Audit
          </button>
          <button
            className={`border ${
              theme === "light" ? "" : "border-[#364153] text-white"
            } px-3 py-2 rounded-md text-sm`}
          >
            Export
          </button>
          <button
            className={`border ${
              theme === "light" ? "" : "border-[#364153] text-white"
            } px-3 py-2 rounded-md text-sm`}
          >
            Share
          </button>
          <button
            className={`${
              theme === "light" ? "" : "border-[#364153] text-white"
            } border p-1.5 rounded-md`}
          >
            <i className={`fas fa-cog`}></i>
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div
        className={`flex flex-wrap items-center p-3 rounded-lg ${
          theme === "light" ? "bg-gray-50" : "bg-gray-700"
        }`}
      >
        <div className="flex items-center mr-6">
          <i
            className={` ${
              theme === "light" ? "" : "text-white"
            } fas fa-mobile-alt mr-2`}
          ></i>
          <span className={theme === "light" ? "" : "text-white"}>Mobile</span>
        </div>
        <div className="flex items-center mr-6">
          <i
            className={`${theme === "light" ? "" : "text-white"} fas fa-code mr-2`}
          ></i>
          <span className={theme === "light" ? "" : "text-white"}>
            JS rendering: Disabled
          </span>
        </div>
        <div className="flex items-center mr-6">
          <i className={`${theme === "light" ? "" : "text-white"} fas fa-file mr-2`}></i>
          <span className={theme === "light" ? "" : "text-white"}>
            Pages crawled: 159/500
          </span>
        </div>
        <div className="flex items-center mr-6">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className={theme === "light" ? "" : "text-white"}>
              Health Score: 80%
            </span>
          </span>
        </div>
        <div className="flex items-center">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className={theme === "light" ? "" : "text-white"}>
              Issues: 806
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SiteAudit;

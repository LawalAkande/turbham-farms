"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MobileDropdown = () => {
  const [activeTab, setActiveTab] = useState("Select Service");
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownChange = (tabName, path) => {
    setActiveTab(tabName);
    router.push(path);
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative py-[70px] w-[342px] self-center drop-shadow-[0_2px_0_2px_rgba(0, 0, 0, 0.25)] drop-shadow-md">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-[#F7F7F7] border-r rounded-[12px_0_0_12px] w-full flex justify-between items-center p-2"
        >
          <span className="text-[#00A85A]">
            {activeTab === "PAAS"
              ? "PLANTING AS A SERVICE (PAAS)"
              : activeTab === "OAAS"
              ? "OFF-TAKING AS A SERVICE (OAAS)"
              : activeTab === "PRAAS"
              ? "PROCESSING AS A SERVICE (PRAAS)"
              : activeTab === "WAAS"
              ? "WAREHOUSE AS A SERVICE (WAAS)"
              : "Select Service"}
          </span>
          <svg
            className="h-4 w-4 transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute z-10 w-full bg-white border rounded-b-[12px] border-t-0 mt-1">
            <a
              onClick={() => handleDropdownChange("PLANTING AS A SERVICE (PAAS)", "/paas")}
              className={`block px-4 py-2 ${activeTab === "PAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"} hover:bg-gray-100`}
            >
              PLANTING AS A SERVICE (PAAS)
            </a>
            <a
              onClick={() => handleDropdownChange("OFF-TAKING AS A SERVICE (OAAS)", "/oaas")}
              className={`block px-4 py-2 ${activeTab === "OAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"} hover:bg-gray-100`}
            >
              OFF-TAKING AS A SERVICE (OAAS)
            </a>
            <a
              onClick={() => handleDropdownChange("PROCESSING AS A SERVICE (PRAAS)", "/praas")}
              className={`block px-4 py-2 ${activeTab === "PRAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"} hover:bg-gray-100`}
            >
              PROCESSING AS A SERVICE (PRAAS)
            </a>
            <a
              onClick={() => handleDropdownChange("WAREHOUSE AS A SERVICE (WAAS)", "/waas")}
              className={`block px-4 py-2 ${activeTab === "WAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"} hover:bg-gray-100`}
            >
              WAREHOUSE AS A SERVICE (WAAS)
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDropdown;

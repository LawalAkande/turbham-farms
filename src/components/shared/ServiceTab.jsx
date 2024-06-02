"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ServiceTab = ({ setActiveTab, activeTab }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("Select Service");
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const isActive = (routeName) => {
    return pathname.includes(routeName);
  };

  const handleDropdownChange = (e) => {
    router.push(e.target.value);
    setDropdownOpen(false);
  };

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderServiceTabs = () => (
    <div className="sticky flex items-center justify-center py-[70px] drop-shadow-[0_2px_0_2px_rgba(0, 0, 0, 0.25)] drop-shadow-md cursor-pointer">
      <div
        className="relative flex flex-col items-center w-[234px] h-[61px] justify-center bg-[#F7F7F7]  border-r rounded-s-xl"
        onClick={() => handleTabChange("PAAS")}
      >
        <h5
          className={`flex self-center ${
            activeTab === "PAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          PAAS
        </h5>
        <p
          className={`flex self-center ${
            activeTab === "PAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          PLANTING AS A SERVICE
        </p>
        <div className={`border-b-2 w-[95%] absolute top-[100%] flex self-end
        ${
          activeTab === "PAAS" ? "border-[#00A85A]" : ""
        }`} ></div>
      </div>

      <div
        className="relative flex flex-col items-center w-[234px] h-[61px] justify-center bg-[#F7F7F7]  border-r "
        onClick={() => handleTabChange("OAAS")}
      >
        <h5
          className={`flex self-center ${
            activeTab === "OAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          OAAS
        </h5>
        <p
          className={`flex self-center ${
            activeTab === "OAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          OFF-TAKING AS A SERVICE
        </p>
        <div className={`border-b-2 w-[100%] absolute top-[100%]
        ${
          activeTab === "OAAS" ? "border-[#00A85A]" : ""
        }`} ></div>
      </div>

      <div
        className="relative flex flex-col items-center w-[234px] h-[61px] justify-center bg-[#F7F7F7]  border-r "
        onClick={() => handleTabChange("PRAAS")}
      >
        <h5
          className={`flex self-center ${
            activeTab === "PRAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          PRAAS
        </h5>
        <p
          className={`flex self-center ${
            activeTab === "PRAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          PROCESSING AS A SERVICE
        </p>
        <div className={`border-b-2 w-[100%] absolute top-[100%]
        ${
          activeTab === "PRAAS" ? "border-[#00A85A]" : ""
        }`} ></div>
      </div>

      <div
        className="relative flex flex-col items-center w-[234px] h-[61px] justify-center bg-[#F7F7F7] rounded-e-xl"
        onClick={() => handleTabChange("WAAS")}
      >
        <h5
          className={`flex self-center ${
            activeTab === "WAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          WAAS
        </h5>
        <p
          className={`flex self-center ${
            activeTab === "WAAS" ? "text-[#00A85A]" : "text-[#7F7F7F]"
          }`}
        >
          WAREHOUSE AS A SERVICE
        </p>
        <div className={`border-b-2 w-[95%] absolute top-[100%] flex self-start
        ${
          activeTab === "WAAS" ? "border-[#00A85A]" : ""
        }`} ></div>
      </div>
    </div>
  );

  const renderServiceDropdown = (activeTab) => (
    <div className="flex items-center justify-center w-full">
      <div className="relative py-[70px] w-[342px]  self-center drop-shadow-[0_2px_0_2px_rgba(0, 0, 0, 0.25)] drop-shadow-md">
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
            {/* <Link legacyBehavior> */}
              <a
                onClick={(e) =>
                  handleDropdownChange(e, "PAAS")
                }
                className={`block px-4 py-2 ${
                  activeTab === "PAAS"
                    ? "text-[#00A85A]"
                    : "text-[#7F7F7F]"
                } hover:bg-gray-100`}
              >
                PLANTING AS A SERVICE (PAAS)
              </a>
            {/* </Link> */}
            {/* <Link legacyBehavior> */}
              <a
                onClick={(e) =>
                  handleDropdownChange(e, "OAAS")
                }
                className={`block px-4 py-2 ${
                  activeTab === "OAAS"
                    ? "text-[#00A85A]"
                    : "text-[#7F7F7F]"
                } hover:bg-gray-100`}
              >
                OFF-TAKING AS A SERVICE (OAAS)
              </a>
            {/* </Link> */}
            {/* <Link  legacyBehavior> */}
              <a
                onClick={(e) =>
                  handleDropdownChange(e, "PRAAS")
                }
                className={`block px-4 py-2 ${
                  activeTab === "PRAAS"
                    ? "text-[#00A85A]"
                    : "text-[#7F7F7F]"
                } hover:bg-gray-100`}
              >
                PROCESSING AS A SERVICE (PRAAS)
              </a>
            {/* </Link> */}
            {/* <Link  legacyBehavior> */}
              <a
                onClick={(e) =>
                  handleDropdownChange(e, "WAAS")
                }
                className={`block px-4 py-2 ${
                  activeTab === "WAAS"
                    ? "text-[#00A85A]"
                    : "text-[#7F7F7F]"
                } hover:bg-gray-100`}
              >
                WAREHOUSE AS A SERVICE (WAAS)
              </a>
            {/* </Link> */}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {isClient && windowWidth > 930
        ? renderServiceTabs()
        : renderServiceDropdown()}
    </>
  );
};

export default ServiceTab;

"use client";
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { sidebarLearnItems } from "../../mockdata/sidebarItems";

const Sidebar = ({ showSideBar }) => {
  // const router = useRouter();

  // const sideBarClass =
  //   router.pathname === "/blog" ||
  //   router.pathname === "/partner-with-us" ||
  //   router.pathname === "/our-mission"
  //     ? `bg-red-400 text-white`
  //     : `bg-yellow-300`;

  return (
    <div
      className={`w-full right-0 bottom-0 fixed top-[100px] overflow-y-scroll xl:hidden z-50 transition-all duration-500  ${"bg-white"} ${
        showSideBar ? "left-0 opacity-1" : "-left-100 opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-14 border-t border-t-GreenHaza">
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex justify-center">
            <div className="flex gap-1 md:gap-2 cursor-pointer">
              <div className={`text-center flex flex-col gap-4 `}>
                {sidebarLearnItems.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

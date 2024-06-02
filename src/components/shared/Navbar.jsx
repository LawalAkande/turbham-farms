"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logos/turbham-farms-logo.svg";
import Button from "../../components/shared/Button";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const menuItems = [
    { href: "/our-services", label: "Services" },
    // { href: "", label: "Blog" },
    { href: "contact-us", label: "Contact Us" },
    { href: "about-us", label: "About" },
  ];

  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
    console.log("Hellow");
  };
  const closeSidebar = () => setShowSideBar(false);

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Turbham Farms Logo"
              className="w-36 md:w-44 lg:w-fit"
            />
          </Link>

          <div className="flex items-center">
            <div className="hidden md:flex flex-row items-center space-x-4 lg:space-x-10 ">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              href=""
              title="Get Started"
              className="border border-black rounded-xl p-4 hover:border-GreenHaza hover:bg-GreenHaza hover:text-white"
            />
          </div>
          <div
            onClick={toggleSidebar}
            className="md:hidden flex flex-col space-y-2 justify-center  cursor-pointer w-fit transition-all duration-500"
          >
            <span className="w-8 h-[2px] bg-black"></span>
            <span className="w-8 h-[2px] bg-black"></span>
            <span className="w-8 h-[2px] bg-black"></span>
          </div>
        </div>
      </div>
      <Sidebar showSideBar={showSideBar} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Navbar;

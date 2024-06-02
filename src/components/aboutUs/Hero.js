"use client";
import React from "react";
import HeroImage from "../../../public/assets/images/paas/paas1.jpg";
import Image from "next/image";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 912);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <header className="relative w-[100%] h-[100%]">
          <Image
            src="/assets/images/about-us/heroMobile.png"
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h5 className="absolute top-[-10%] left-[31%] translate-x-[-50%] translate-y-[-35%] font-windsorpro-bold  text-AquaDeep text-[34px] leading-[2.5rem]">
            About Us
          </h5>
          <p className="absolute top-[18%] left-[43%] translate-x-[-50%] translate-y-[-50%] text-xs font-medium leading-[0.975rem]">
            As a proud subsidiary of Turbham Technology, we bring innovation to
            agriculture, transforming spaces into vibrant green havens. Join us
            on a journey of sustainable growth an community empowerment.
          </p>
        </header>
      ) : (
        <header className="relative w-[100%] h-[100%] px-[27px]">
          <Image
            src="/assets/images/about-us/hero-image.png"
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h5 className="absolute top-[20%] left-[35%] translate-x-[-50%] translate-y-[-50%] font-windsorpro-bold  text-7xl text-AquaDeep leading-[5.29rem] max-lg:text-[34px] max-lg:leading-[2.5rem]">
            About Us
          </h5>
          <p className="absolute top-[35%] left-[52%] translate-x-[-35%] translate-y-[-50%] text-xl font-normal leading-[1.625rem] max-lg:text-xs max-lg:font-medium max-lg:leading-[0.975rem] w-[596px] max-lg:w-[400px] text-[#292626]">
            As a proud subsidiary of Turbham Technology, we bring innovation to
            agriculture, transforming spaces into vibrant green havens. Join us
            on a journey of sustainable growth an community empowerment.
          </p>
        </header>
      )}
    </>
  );
};

export default Hero;

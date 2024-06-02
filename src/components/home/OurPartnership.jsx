import Image from "next/image";
import React from "react";
import fmard_logo from "../../../public/assets/logos/fmard-logo.svg";
import shine_bridge_logo from "../../../public/assets/logos/shine-bridge-logo.svg";
import oyo_state_the_pacesetter_logo from "../../../public/assets/logos/oyo-state-the-pacesetter-logo.svg";
import logo from "../../../public/assets/logos/logo-1.svg";

const OurPartnership = () => {
  return (
    <div className="bg-SnowDrift py-2 md:py-4">
      <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-center md:space-x-20">
        <h4 className="text-SherwoodGreen text-2xl md:text-4xl max-w-md font-windsorpro-bold">
          Our Partnership
        </h4>
        <div className="flex flex-row items-center space-x-4 md:space-x-8">
          <Image
            src={shine_bridge_logo}
            alt="shine_bridge_logo"
            className="cursor-pointer w-20 md:w-32 lg:w-fit"
          />
          <div className="flex flex-col items-center justify-center">
            <Image
              src={logo}
              alt="Institute of bast cultures of the National Academy of Sciences"
              className="cursor-pointer w-12 md:w-16 lg:w-24"
            />
            <p className="text-[8px] max-w-[10rem] text-center">
              Institute of bast cultures of the National Academy of Sciences -
              Ukraine
            </p>
          </div>
          <Image
            src={oyo_state_the_pacesetter_logo}
            alt="oyo_state_the_pacesetter_logo"
            className="cursor-pointer w-20 md:w-32 lg:w-fit"
          />
          <Image
            src={fmard_logo}
            alt="fmard Logo"
            className="cursor-pointer w-20 md:w-32 lg:w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default OurPartnership;

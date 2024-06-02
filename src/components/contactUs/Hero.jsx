import React from "react";

//import images
import lets_talk_img from "../../../public/assets/images/contact-us/lets-talk-img.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="space-y-16 py-4 md:py-28">
      <div className="hidden md:block relative">
        <div className="space-y-4">
          <h3 className="absolute top-6 right-0 transform -translate-x-1/2 text-AquaDeep text-3xl md:text-[4.2rem] font-windsorpro-bold">
            Let&apos;s Talk, Contact Us
          </h3>
          <p className="absolute top-28 right-[38%] transform translate-x-1/2 text-BalticSea max-w-xl md:text-lg font-light">
            Let&apos;s Cultivate Success Together! Reach out using the form
            below, and specify your service of interest. We&apos;re here to
            transform your agricultural journey with Turbham Farms
          </p>
        </div>
        <Image src={lets_talk_img} alt="hero picture" className="w-full px-6" />
      </div>
    </div>
  );
};

export default Hero;

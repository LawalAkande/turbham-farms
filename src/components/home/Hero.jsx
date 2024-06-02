import React from "react";

//import images
import home_hero_mobile_img from "../../../public/assets/images/home/home-hero-mobile-img.png";
import home_hero_img from "../../../public/assets/images/home/home-hero-img.png";
import home_hero_img_2 from "../../../public/assets/images/home/home-hero-img-2.png";
import Image from "next/image";
// import Button from "../shared/Button";

const Hero = () => {
  return (
    <div className="md:space-y-16 md:py-28 lg:px-6">
      <div className="lg:hidden ">
        <div className="container mx-auto">
          <h3 className="w-full flex flex-col text-AquaDeep text-3xl font-windsorpro-bold">
            <span>Nurturing Nature,</span> <span>Cultivating Tomorrow</span>
          </h3>
        </div>
        <div className="relative w-full -top-20">
          {/* <div className="absolute top-52 right-4">
            <Button
              href=""
              title="Lear More"
              className="w-fit rounded-md border px-2 py-1 bg-GreenHaza text-white border-GreenHaza font-medium hover:text-GreenHaza hover:bg-white"
            />
          </div> */}
          <p className="absolute left-20 top-28 text-xs text-BalticSea md:text-xl font-light">
            As a proud subsidiary of Turbham Technology, we bring innovation to
            agriculture, transforming spaces into vibrant green havens. Join us
            on a journey of sustainable growth and community empowerment.
          </p>
          <Image
            src={home_hero_mobile_img}
            className="w-full"
            alt="hero picture"
          />
        </div>
      </div>

      <div className="hidden lg:block relative w-full">
        <div className="absolute top-0 right-0">
          <Image src={home_hero_img_2} className="w-64" alt="hero picture" />
        </div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 space-y-4 md:space-y-8">
          <h3 className="w-full flex flex-col md:space-y-12 text-AquaDeep text-3xl md:text-[65px] font-windsorpro-bold">
            <span>Nurturing Nature,</span> <span>Cultivating Tomorrow</span>
          </h3>
        </div>
        {/* <div className="absolute top-[27rem] right-32">
          <Button
            href=""
            title="Lear More"
            className="w-fit rounded-xl border px-12 py-3.5 bg-GreenHaza text-white border-GreenHaza font-medium hover:text-GreenHaza hover:bg-white"
          />
        </div> */}
        <p className="absolute top-64 right-[38%] transform translate-x-1/2 text-BalticSea max-w-xl md:text-xl font-light">
          As a proud subsidiary of Turbham Technology, we bring innovation to
          agriculture, transforming spaces into vibrant green havens. Join us on
          a journey of sustainable growth and community empowerment.
        </p>
        <Image src={home_hero_img} alt="hero picture" />
      </div>
    </div>
  );
};

export default Hero;

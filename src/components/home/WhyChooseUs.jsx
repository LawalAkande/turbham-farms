import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
import why_choose_us_img from "../../../public/assets/images/home/why-choose-us-img.svg";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto space-y-10 md:space-y-12 py-12 md:py-24">
      <div className="">
        <h3 className="flex flex-col md:space-y-3 text-Dune text-3xl md:text-6xl max-w-md font-windsorpro-bold">
          Why Choose Us
        </h3>
      </div>

      <div className="relative">
        <Image src={why_choose_us_img} alt="why choose us img" />
        <div className="w-full absolute left-0 top-0 space-y-4 md:space-y-8">
          {/* <div className="w-[40%]">
            <Button
              href="/"
              title="See all case studies"
              className="w-fit md:rounded-xl border px-2 py-1 md:px-7 md:py-3.5 text-xs md:text-base rounded-md text-white bg-GreenHaza font-medium hover:bg-white hover:text-GreenHaza"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

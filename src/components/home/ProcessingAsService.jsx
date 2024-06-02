import React from "react";

//import images
import praas_img from "../../../public/assets/images/home/praas_img.jpg";
import Image from "next/image";
// import Button from "../shared/Button";

const ProcessingAsService = () => {
  return (
    <div className="container mx-auto space-y-16 py-4 md:py-28">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row ">
        <div className="w-full md:w-1/2">
          <h3 className="flex flex-col md:space-y-6 text-Dune text-3xl md:text-[56px] font-windsorpro-bold">
            <span>Processing as a</span> <span>Service (PRAAS)</span>
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-DavyGrey text-lg md:text-xl font-light">
            We ensure that farmers produce gains exposure and recognition. This
            approach not only enhances the value of agricultural products but
            also contributes to the overall growth and sustainability of farming
            communities.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="w-full absolute left-0 top-0 space-y-4 md:space-y-8">
          {/* <div className="w-[40%]">
            <Button
              href="/"
              title="Read Less"
              className=" w-fit md:rounded-xl border px-2 py-1 md:px-7 md:py-3.5 text-xs md:text-base rounded-md text-GreenHaza border-GreenHaza font-medium hover:text-white hover:bg-GreenHaza"
            />
          </div> */}
        </div>
        <Image src={praas_img} alt="Processing service picture" />
      </div>
    </div>
  );
};

export default ProcessingAsService;

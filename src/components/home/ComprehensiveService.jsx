import React from "react";

//import images
import comprehensive_service_img from "../../../public/assets/images/home/comprehensive_service_img.jpg";
import Image from "next/image";
import Button from "../shared/Button";

const ComprehensiveService = () => {
  return (
    <div className="container mx-auto space-y-16 py-4 md:py-28">
      <div className="flex justify-center mb-32">
        <h3 className="max-w-4xl text-GreenHaza text-3xl md:text-6xl font-windsorpro-bold text-center ">
          Comprehensive Service
        </h3>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row ">
        <div className="w-full md:w-1/2">
          <h3 className="flex flex-col md:space-y-3 text-Dune text-3xl md:text-6xl max-w-md font-windsorpro-bold">
            <span>Planting as a</span> <span>Service (PAAS)</span>
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-DavyGrey text-lg md:text-xl font-light">
            Through Planting as a Service (PAAS), Turbham Farms not only offers
            tailored planting solutions but also supports farmers with access to
            machinery at prices below traditional market rates. We believe in
            making modern farming practices accessible and affordable for all.
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
        <Image src={comprehensive_service_img} alt="comprehensive picture" />
      </div>
    </div>
  );
};

export default ComprehensiveService;

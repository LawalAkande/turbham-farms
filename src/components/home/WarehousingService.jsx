import React from "react";

//import images
import warehouse_img from "../../../public/assets/images/home/warehouse_img.jpg";
import Image from "next/image";
// import Button from "../shared/Button";

const WarehousingService = () => {
  return (
    <div className="container mx-auto space-y-16 py-4 md:py-8 lg:pl-24">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row ">
        <div className="w-full md:w-1/2">
          <h3 className="flex flex-col md:space-y-6 text-Dune text-3xl md:text-[56px] font-windsorpro-bold">
            <span>Warehousing</span> <span>(WAAS)</span>
          </h3>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <p className="text-DavyGrey text-lg md:text-xl font-light">
              Secure Storage Solutions: Turbham Farms introduces Warehousing as
              a Service (WAAS), a pinnacle of secure storage solutions for
              agricultural products.
            </p>
            <p className="text-DavyGrey text-lg md:text-xl font-light">
              Our state-of-the-art facilities ensure the safety and quality of
              your esteemed produce.
            </p>
          </div>
          <div>
            <p className="text-DavyGrey text-lg md:text-xl font-light">
              &quot;Strategic Inventory Management: Efficiency elevated to an
              art form. Turbham Farms employs cutting-edge inventory management,
              allowing for meticulous organization and readiness of your premium
              products for distribution.&quot;
            </p>
          </div>
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
        <Image src={warehouse_img} alt="ware house picture" />
      </div>
    </div>
  );
};

export default WarehousingService;

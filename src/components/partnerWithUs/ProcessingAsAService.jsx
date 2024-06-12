import React from "react";
import Image from "next/image";
import PraasImage from "../../../public/assets/images/partner-with-us/praas.png";

const ProcessingAsAService = () => {
  return (
    <section className="flex justify-between px-20 max-lg:px-4 items-center max-lg:flex-col max-lg:items-center">
      <div className=" flex flex-col gap-4  md:w-1/2 md:pt-36">
        <h2 className="text-BalticSea text-xl font-bold md:text-4xl">
          Processing as a Service (PRAAS)
        </h2>

        <p className="max-w-[343px] text-sm text-DavyGrey md:max-w-2xl w-full md:text-xl font-light">
          We ensure that farmers' produce gains exposure and recognition. This
          approach not only enhances the value of agricultural products but also
          contributes to the overall growth and sustainability of farming
          communities
        </p>
      </div>

      <div className="w-full h-auto overflow-hidden rounded-xl md:max-w-[548px]">
        <Image
          src={PraasImage}
          alt="praas image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ProcessingAsAService;

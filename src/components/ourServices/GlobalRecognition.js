import React from "react";
import Image from "next/image";

const GlobalRecognition = () => {
  return (
    <div className="lg:flex items-center gap-[48px] max-md:flex-col">
      <div className="relative w-full h-96 flex items-center justify-center rounded-2xl lg:h-[660px] lg:rounded-3xl overflow-hidden animate-fadeUp">
        <Image
          alt="image three"
          src="/assets/images/praas/praas3.png"
          layout="fill"
          objectFit="contain"
          className="w-full h-full object-cover scale-x-105"
        />
      </div>
      <div className="flex flex-col gap-[16px] lg:max-w-[567px] w-full">
        <h5 className="text-xl font-bold text-BalticSea md:text-[38px] lg:leading-relaxed md:max-w-[546px] w-full">
          Global Recognition Initiatives
        </h5>
        <p className="text-DavyGrey text-sm lg:text-xl md:max-w-[546px] w-full">
          Turbham Farms does more than just follow market trends; it also
          executes steps to increase international recognition of its processed
          commodities. This includes intentional initiatives to highlight our
          products&apos originality, quality, and sustainability. Collaborations
          with industry influencers, involvement in international trade fairs,
          and interaction with renowned certifying agencies all help to position
          Turbham Farms&apos products for global recognition.
        </p>
      </div>
    </div>
  );
};

export default GlobalRecognition;

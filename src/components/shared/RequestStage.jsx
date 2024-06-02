import React from "react";
import Image from "next/image";

const RequestStage = ({
  ImgSrc1,
  ImgSrc2,
  Header1,
  Header2,
  Content1,
  Content2,
  Classes,
}) => {
  return (
    <div
      className={`flex  flex-col items-center justify-center gap-[95px] max-lg:gap-[20px] ${Classes}`}
    >
      <div className="flex gap-[16px] w-full items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-GreenHaza flex items-center justify-center max-lg:w-[50px] max-lg:h-[50px]">
          <p className="text-white font-windsorpro-bold font-bold text-6xl leading-[4.41rem] max-lg:text-[26px] max-lg:leading-[1.91rem]">
            1
          </p>
        </div>
        <h5 className="text-DeepBlack font-windsorpro-bold font-bold text-5xl leading-[3.8rem] max-lg:text-[24px] max-lg:leading-[3.806rem]">
          Request Stage
        </h5>
      </div>
      <div className="flex gap-24 max-lg:gap-[16px] max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col gap-[54px] max-lg:gap-[16px]">
          <div className="relative w-full h-96 flex items-center justify-center rounded-2xl md:max-w-2xl lg:h-[660px] lg:rounded-3xl overflow-hidden animate-fadeUp">
            <Image
              alt="image  one"
              src={ImgSrc1}
              layout="fill"
              objectFit="contain"
              className="w-full h-full "
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <h5 className="text-xl font-bold text-BalticSea md:text-[38px] lg:leading-relaxed md:max-w-[546px] w-full">
              {Header1}
            </h5>
            <p className="text-DavyGrey text-sm lg:text-xl md:max-w-[546px] w-full font-light">
              {Content1}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[54px]">
          <div className="relative w-full h-96 flex items-center justify-center rounded-2xl lg:h-[660px] lg:rounded-3xl overflow-hidden animate-fadeUp">
            <Image
              alt="image  one"
              src={ImgSrc2}
              layout="fill"
              objectFit="contain"
              className="w-full h-full "
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <h5 className="text-xl font-bold text-BalticSea md:text-[38px] lg:leading-relaxed md:max-w-[546px] w-full">
              {Header2}
            </h5>
            <p className="text-DavyGrey text-sm lg:text-xl md:max-w-[546px] w-full font-light">
              {Content2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestStage;

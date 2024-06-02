import React from "react";
import Image from "next/image";

const QualityAssurance = () => {
  return (
    <section className="flex gap-7 px-20 max-lg:px-4 max-lg:flex-col-reverse max-lg:items-center">
      <Image
        className="flex self-start object-cover w-full h-auto rounded-xl md:max-w-[548px]"
        src="/assets/images/partner-with-us/quality-assurance2.png"
        alt="quality assurnce"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="flex flex-col gap-[42px] ">
        <div className="flex flex-col gap-[16px] max-lg:flex-row max-lg:items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-GreenHaza flex items-center justify-center max-lg:w-[50px] max-lg:h-[50px]">
            <p className="text-white font-windsor font-bold text-6xl leading-[4.41rem] max-lg:text-[26px] max-lg:leading-[1.91rem]">
              2
            </p>
          </div>
          <h5 className="font-windsorpro-bold font-bold text-5xl leading-[3.81rem] max-lg:text-[20px] max-lg:leading-[2rem]">
            Quality Assurance and Excellence
          </h5>
        </div>
        <p className="font-normal text-xl leading-[1.625rem] max-lg:font-normal max-lg:text-[14px] max-lg:leading-[1.14rem] font-light">
          Quality is the foundation of our relationship with farmers. Turbham
          Farms is dedicated to upholding the highest standards through rigorous
          quality control procedures and a culture of excellence. Farmers
          benefit from our ongoing commitment to supplying products that meet
          high worldwide quality and consistency requirements.
        </p>
      </div>
    </section>
  );
};

export default QualityAssurance;

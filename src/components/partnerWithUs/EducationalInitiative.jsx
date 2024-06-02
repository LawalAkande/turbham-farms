import React from "react";
import Image from "next/image";

const EducationalInitiative = () => {
  return (
    <section className="flex gap-[60px] px-20 max-lg:px-4 max-lg:flex-col max-lg:items-center">
      <div className="flex flex-col gap-[42px] ">
        <div className="flex flex-col gap-[16px] max-lg:flex-row max-lg:items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-GreenHaza flex items-center justify-center max-lg:w-[50px] max-lg:h-[50px]">
            <p className="text-white font-windsor font-bold text-6xl leading-[4.41rem] max-lg:text-[26px] max-lg:leading-[1.91rem]">
              4
            </p>
          </div>
          <h5 className="font-windsorpro-bold font-bold text-5xl leading-[3.81rem] max-lg:text-[20px] max-lg:leading-[2rem]">
            Educational Initiatives
          </h5>
        </div>
        <p className="text-xl leading-[1.625rem] max-lg:font-normal max-lg:text-[14px] max-lg:leading-[1.14rem] font-light">
          Turbham Farms believes in empowering farmers through education. We
          actively educate and update farmers on best practices in agriculture,
          ensuring they stay informed about the latest advancements.  Workshops,
          training sessions, and informational resources are provided to enhance
          their knowledge and skills. Through our multifaceted approach
          encompassing market access, quality assurance, machinery support, and
          educational initiatives, Turbham Farms is more than a partner – we are
          a catalyst for transformative farming practices. Join us in
          cultivating a future where farmers thrive, armed with knowledge,
          modern equipment, and a supportive ecosystem.
        </p>
      </div>
      <Image
        src="/assets/images/partner-with-us/educational_initiative.png"
        alt="educational initiative"
      />
    </section>
  );
};

export default EducationalInitiative;

import Image from "next/image";
import React from "react";

// import logos
import phone from "../../../public/assets/icons/contact-us/phone-icon.svg";
import envelope from "../../../public/assets/icons/contact-us/envelope-icon.svg";

const HaveAQuestion = () => {
  return (
    <div className="container mx-auto py-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-5 md:space-y-16">
        <p className="text-lg md:text-xl text-center font-medium max-w-3xl ">
          Have a question or need assistance? Call us during our support hours
          or reach out on WhatsApp for prompt and friendly assistance.
        </p>

        <div className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:space-x-16 lg:space-x-28 justify-center">
          <div className="flex flex-col items-center justify-center space-y-5">
            <Image src={phone} alt="phone" className="" />
            <div className="flex flex-col space-y-2">
              <p className="md:text-xl font-medium text-black/90">
                +234 706 201 1450
              </p>
              <p className="md:text-xl font-medium text-black/90">
                +234 706 201 1451
              </p>
            </div>
          </div>
          <div className="hidden md:block border-l border-BalticSea h-32"></div>
          <div className="flex flex-col items-center justify-center space-y-5">
            <Image src={envelope} alt="phone" className="" />
            <p className="md:text-xl font-medium text-black/90">
              info@turbhamfarms.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveAQuestion;

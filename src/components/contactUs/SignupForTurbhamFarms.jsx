"use client";
import React, {useState, useEffect} from "react";

//import images
import contact_us_img from "../../../public/assets/images/contact-us/contact-us-img.png";
import contact_us_mobile from "../../../public/assets/images/contact-us/contact-us-mobile.png";
import Image from "next/image";
import Button from "../shared/Button";

const SignupForTurbhamFarms = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 912)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex flex-col items-start mx-auto space-y-16 py-4 md:py-28">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row ">
        <div className="w-full md:w-1/2">
          <h3 className="flex flex-col md:space-y-3 text-Dune text-6xl max-md:text-3xl max-w-md font-windsorpro-bold">
            <span>Sign Up For</span> <span>Turbham Farms</span>
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-DavyGrey text-xl md:text-3xl font-light">
            Stay informed, stay engaged and be the first to receive industry
            updates, tips and success stores.
          </p>
        </div>
      </div>

      {
        isSmallScreen ? (
          <div className="relative w-full">
        <div className="w-full flex items-baseline gap-4 absolute left-0 top-[-15%] space-y-2 ">
          <div className="w-[40%]">
            <Button
              href="/"
              title="Partner with us"
              className="text-xs w-full rounded-md border-2 p-1 md:p-3.5 border-DeepGreen font-medium"
            />
          </div>
          <div className="w-[40%]">
            <Button
              href="/"
              title="Become a Farmer"
              className="text-xs w-full rounded-md text-white border-2 border-GreenHaza p-1 bg-GreenHaza font-medium"
            />
          </div>
        </div>
        <Image src={contact_us_mobile} alt="sign up picture" />
      </div>
        ) : (
          <div className="relative w-full">
          <div className="w-full absolute left-0 top-0 space-y-2 md:space-y-8">
            <div className="md:w-[40%]">
              <Button
                href="/become-a-partner"
                title="Partner with us"
                className="text-xs md:text-2xl w-fit md:w-full rounded-md md:rounded-xl border-2 p-1 md:p-3.5 border-DeepGreen font-medium"
              />
            </div>
            <div className="md:w-[40%]">
              <Button
                href="/"
                title="Become a Farmer"
                className="text-xs md:text-2xl w-fit md:w-full rounded-md md:rounded-xl text-white border-2 border-GreenHaza p-1 md:p-3.5 bg-GreenHaza font-medium"
              />
            </div>
          </div>
          <Image src={contact_us_img} alt="sign up picture" />
        </div>
        )
      }
    </div>
  );
};

export default SignupForTurbhamFarms;

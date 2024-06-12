"use client";
import React from 'react'
import HeroImage from "../../../public/assets/images/paas/paas1.jpg"
import Image from "next/image"

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false)

  React.useEffect(() => {
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
    <>
    {
        isSmallScreen ? (
          <header className="relative w-[100%] h-[100%]">
          <img src="/assets/images/paas/passMobile4.png" alt="Hero Image" className=" w-[100%] h-[100%]" />
          <h5 className="absolute top-[-5%] left-[31%] translate-x-[-50%] translate-y-[-45%] font-windsorpro-bold  text-AquaDeep text-[34px] leading-[2.5rem]">Our Services</h5>
          <p className="absolute top-[20%] left-[40%] translate-x-[-50%] translate-y-[-55%] text-xs font-medium leading-[0.975rem]">As a proud subsidiary of Turbham Technology, we bring innovation  to agriculture, transforming spaces into vibrant green havens. Join us  on a journey of sustainable growth an community empowerment.</p>
    </header>
        ) : (
          <header className="relative w-[100%] h-[100%] px-[27px]">
          <img src="/assets/images/paas/paas4.png" alt="Hero Image" className=" w-[100%] h-[100%]" />
          <h5 className="absolute top-[15%] left-[27%] translate-x-[-50%] translate-y-[-50%] font-windsorpro-bold  text-7xl text-AquaDeep leading-[5.29rem] max-lg:text-[34px] max-lg:leading-[2.5rem]">Our Services</h5>
          <p className="absolute top-[35%] left-[40%] translate-x-[-50%] translate-y-[-50%] text-xl font-normal leading-[1.625rem] max-lg:text-xs max-lg:font-medium max-lg:leading-[0.975rem] w-[596px] max-lg:w-[400px]">As a proud subsidiary of Turbham Technology, we bring innovation to agriculture, transforming spaces into vibrant green havens. Join us on a journey of sustainable growth an community empowerment.</p>
    </header>
        )
      }
    </>
  )
}

export default Hero
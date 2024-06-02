"use client";
import Image from "next/image";
import useMobileView from "@/utils/hooks/useMobile";
import mobileImg from "../../../public/assets/images/become-a-partner/mobile-hero.png";
import webImg from "../../../public/assets/images/become-a-partner/web-hero.png";

export default function Hero() {
  const isMobile = useMobileView();

  return (
    <main className="w-full md:px-8">
      <div className="w-full h-auto overflow-hidden relative pt-12 md:pt-0">
        <Image
          src={isMobile ? mobileImg : webImg}
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <section className="absolute top-0 left-8 right-0 max-w-80 w-full flex flex-col justify-center items-center gap-2 md:max-w-3xl md:gap-9 md:top-[5%] md:left-[17%] md:right-0">
          <h1 className="w-full font-windsorpro-bold text-4xl text-SherwoodGreen text-center md:text-AquaDeep md:text-7xl self-start">
            {" "}
            Become a Partner
          </h1>

          <p className="max-w-72 w-full text-xs text-Gray md:max-w-[560px] lg:leading-6  md:text-BalticSea md:text-lg md:self-end">
            Thank you for expressing interest in partnering with Turbham Farms.
            We value collaboration with individuals, corporate investors, and
            farmers who share our vision for sustainable agriculture and rural
            development.{" "}
          </p>
        </section>

        <button className="hidden md:absolute md:w-40 md:flex items-center justify-end md:bg-GreenHaza md:py-5 md:px-9 md:rounded-xl md:text-base md:text-white md:font-semibold md:top-[34%] md:right-[27%]">
          Get Started
        </button>
      </div>
    </main>
  );
}

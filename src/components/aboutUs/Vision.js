"use client";
import Image from "next/image";
import useMobileView from "../../utils/hooks/useMobile";
import HeroImg from "../../../public/assets/images/about-us/vision-image.png";

export default function Vision({ title, description, image, altText }) {
  const isMobileView = useMobileView();

  const mobileView = (
    <main className="w-full flex flex-col gap-2">
      <section className="w-full space-y-4">
        <h1 className="font-windsorpro-bold text-3xl text-Dune ">{title}</h1>
        <p className="text-sm text-DavyGrey ">{description}</p>
      </section>

      <div className="relative w-full h-44 overflow-hidden rounded-2xl ">
        <Image src={image} alt={altText} layout="fill" objectFit="cover" />
      </div>
    </main>
  );

  const webView = (
    <main className="relative max-w-7xl w-full mx-auto ">
      <div className="relative  w-full h-[648px] overflow-hidden rounded-3xl ">
        <Image src={image} alt={altText} layout="fill" objectFit="cover" />
      </div>

      <section className="absolute top-[8%] left-[2%] max-w-2xl w-full space-y-4">
        <h1 className="font-windsorpro-bold text-6xl text-Dune ">{title}</h1>
        <p className="max-w-[610px] w-full text-lg text-DavyGrey pr-4">{description}</p>
      </section>
    </main>
  );

  return isMobileView ? mobileView : webView;
}

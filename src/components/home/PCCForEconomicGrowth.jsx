import Image from "next/image";
import React from "react";
import cassava_img from "../../../public/assets/images/home/cassava-img.jpg";
import Button from "../shared/Button";

const PCCForEconomicGrowth = () => {
  return (
    <div className="container mx-auto py-16 md:py-32">
      <div className="flex justify-center mb-32">
        <h3 className="max-w-4xl text-GreenHaza text-3xl md:text-6xl font-windsorpro-bold text-center ">
          Pioneering Cassava Cultivation for Economic Growth
        </h3>
      </div>

      <div className="space-y-2 md:space-y-5 mb-24">
        <p className="text-DavyGrey font-light md:text-xl">
          Turbham Farms, a leading agricultural enterprise in Nigeria, is
          spearheading efforts to revolutionise cassava cultivation in the
          country. With a strong commitment to enhancing agricultural
          productivity and bolstering the economy, Turbham Farms has made
          cassava cultivation its primary focus for the next five years.
        </p>
        <p className="text-DavyGrey font-light md:text-xl">
          Cassava, a versatile crop with diverse applications in food, feed, and
          industrial sectors, holds immense potential for Nigeria&apos;s
          agricultural sector. Recognizing this opportunity, Turbham Farms is
          investing significant resources and expertise into expanding cassava
          cultivation across the nation.
        </p>
        <p
          className="text-DavyGrey font-light md:text-xl
        "
        >
          By harnessing modern farming techniques, innovative technologies, and
          sustainable practices, Turbham Farms aims to increase cassava yields,
          improve crop quality, and enhance overall agricultural productivity.
          Through strategic partnerships with local farmers, research
          institutions, and government agencies, the company is driving
          initiatives to promote cassava cultivation as a viable and lucrative
          venture for smallholder farmers.
        </p>
        <p className="text-DavyGrey font-light md:text-xl">
          Moreover, Turbham Farms is aligning its efforts with the Nigerian
          government&apos;s vision for economic diversification and currency
          stabilisation. The company is committed to strengthening the Naira
          value through commodification, leveraging the potential of cassava as
          a valuable commodity in both domestic and international markets.
        </p>
        <p className="text-DavyGrey font-light md:text-xl">
          With a forward-thinking approach and a steadfast commitment to
          agricultural development, Turbham Farms is poised to make a
          significant impact on Nigeria&apos;s agricultural landscape. By
          prioritising cassava cultivation and embracing sustainable practices,
          the company is not only driving economic growth but also empowering
          local communities and contributing to food security in Nigeria.
        </p>
      </div>

      <div className="relative w-full">
        <div className="w-full absolute left-0 top-0 space-y-4 md:space-y-8">
          <div className="w-[40%]">
            <Button
              href="/"
              title="Read Less"
              className="w-fit md:rounded-xl border px-2 py-1 md:px-7 md:py-3.5 text-xs md:text-base rounded-md text-GreenHaza border-GreenHaza font-medium hover:text-white hover:bg-GreenHaza"
            />
          </div>
        </div>
        <Image src={cassava_img} alt="PCCF picture" />
      </div>
    </div>
  );
};

export default PCCForEconomicGrowth;

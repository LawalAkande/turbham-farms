"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Hero from "@/components/partner/Hero";
import HowWeHelp from "@/components/partner/How-we-help";
import ContentCard from "@/components/partner/Content-card";
import SubContent from "@/components/partner/Sub-content";
import PlanningStage from "@/components/ourServices/Planning-stage";
import ProcessingAsAService from "../../components/partnerWithUs/ProcessingAsAService";
import EducationalInitiative from "@/components/partnerWithUs/EducationalInitiative";
import QualityAssurance from "@/components/partnerWithUs/QualityAssurance";
import PartnerWithUsForm from "@/components/partnerWithUs/PartnerWithUsForm";
import HelpImage1 from "../../../public/assets/images/become-a-partner/help-image-1.png";
import HelpImage2 from "../../../public/assets/images/become-a-partner/help-image-3.png";
import Oaas from "../../../public/assets/images/become-a-partner/oaas-image.png";
import Waas from "../../../public/assets/images/become-a-partner/waas-image.png";
import partnerData from "@/mockdata/become-a-partner";

export default function BecomeAPartner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout noPadding={true}>
      {isClient && (
        <main className="mx-auto flex flex-col gap-20 md:gap-[116px] animate-fadeUp">
          <Hero />
          <HowWeHelp
            title="How We Help Farmers"
            description="At Turbham Farms, our commitment goes beyond market access and quality
        assurance; we actively support farmers to cultivate success. Through a
        holistic approach, we provide comprehensive assistance to ensure
        sustainable and prosperous farming practices. Here's how we contribute
        to the success of farmers"
          />
          <ContentCard
            step={1}
            title="Market Access and Empowerment"
            subHeading="Empowering Farmers with a Market"
            description="Turbham Farms aims to empower farmers by offering more than just a market. Our extensive market network encompasses the local, national, and international landscapes, providing opportunities for sustainable agriculture methods. Farmers who cooperate with us receive access to a vibrant ecosystem that promotes growth and prosperity."
            image={HelpImage1}
          />
          <QualityAssurance />
          <div className="flex flex-col gap-8 md:gap-2 animate-fadeUp">
            <ContentCard
              step={3}
              title="Tailored Agricultural Solutions"
              subHeading="Planting as a Service (PAAS)"
              description="Through Planting as a Service (PAAS), Turbham Farms not only offers tailored planting solutions but also supports farmers with access to machinery at prices below traditional market rates. We believe in making modern farming practices accessible and affordable for all."
              image={HelpImage2}
            />

            <SubContent
              subHeading="Offtaking as a Service (OAAS)"
              description="This streamlined approach ensures that farmers have a direct route to market access, promoting efficiency and enhancing their economic opportunities."
              image={Oaas}
            />

            <ProcessingAsAService />

            <SubContent
              subHeading="Warehousing as a Service (WAAS)"
              description="As part of Warehousing as a Service (WAAS), Turbham Farms actively supports farmers by offering machinery for planting activities at prices below traditional market rates. This initiative aims to make modern farming equipment accessible, encouraging farmers to adopt advanced planting practices for increased efficiency."
              image={Waas}
            />
          </div>

          <EducationalInitiative />

          <div className="flex flex-col  justify-center px-4 md:px-20 lg:px-32 animate-fadeUp">
            <HowWeHelp title="What Opportunities Exist for Mutual Cooperation and Engagement?" />

            <PlanningStage
              sections={partnerData.opportunities}
              showStep={false}
            />
          </div>

          <PartnerWithUsForm />
        </main>
      )}
    </Layout>
  );
}

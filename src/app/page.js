import React from "react";
import Layout from "@/components/layout";
import SignupForTurbhamFarms from "../components/contactUs/SignupForTurbhamFarms";
import OurPartnership from "../components/home/OurPartnership";
import PCCForEconomicGrowth from "../components/home/PCCForEconomicGrowth";
import ComprehensiveService from "../components/home/ComprehensiveService";
import OffTakingAsService from "../components/home/OffTakingAsService";
import ProcessingAsService from "../components/home/ProcessingAsService";
import WarehousingService from "../components/home/WarehousingService";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurRole from "@/components/home/OurRole";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <OurPartnership />
        <PCCForEconomicGrowth />
        <ComprehensiveService />
        <OffTakingAsService />
        <ProcessingAsService />
        <WarehousingService />
        <WhyChooseUs />
        <OurRole/>
        <SignupForTurbhamFarms />
      </main>
    </Layout>
  );
}

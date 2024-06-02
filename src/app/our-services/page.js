"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Hero from "../../components/shared/Hero";
import PAAS from "@/components/ourServices/PAAS";
import OAAS from "@/components/ourServices/OAAS";
import PRAAS from "@/components/ourServices/PRAAS";
import WAAS from "@/components/ourServices/WAAS";
import ServiceTab from "../../components/shared/ServiceTab";
import SignupForTurbhamFarms from "../../components/contactUs/SignupForTurbhamFarms";

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("PAAS");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderServiceComponent = () => {
    switch (activeTab) {
      case "PAAS":
        return <PAAS />;
      case "OAAS":
        return <OAAS />;
      case "PRAAS":
        return <PRAAS />;
      case "WAAS":
        return <WAAS />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      {isClient && (
        <main>
          <Hero />
          <ServiceTab activeTab={activeTab} setActiveTab={setActiveTab} />
          {renderServiceComponent()}
          <SignupForTurbhamFarms />
        </main>
      )}
    </Layout>
  );
}

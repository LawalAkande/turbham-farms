import React from "react";
import RequestStage from "../../components/shared/RequestStage";
import PlantingAsAService from "@/components/ourServices/Planting-as-a-service";
import PlanningStage from "@/components/ourServices/Planning-stage";
import waasData from "@/mockdata/waas.js";

export default function PRAAS() {
  const { hero, planningStage, implementationStage } = waasData;

  return (
    <main className="md:px-16 space-y-16 lg:space-y-36">
      <PlantingAsAService
        title={hero.title}
        description={hero.description}
        media={hero.media}
        mediaType={hero.mediaType}
        altText={hero.altText}
      />

      <RequestStage
        ImgSrc1="/assets/images/waas/waas1.png"
        ImgSrc2="/assets/images/waas/waas2.png"
        Header1="Secure Storage Solutions"
        Header2="Strategic planning for inventory management"
        Content1="Turbham Farms is pleased to announce Warehousing as a Service (WAAS), the pinnacle of secure storage solutions for agricultural products. During the initial stage, we consult with stakeholders to determine their warehousing requirements, including volume requirements, storage length, and any specific conditions required to ensure the safety and quality of their valued produce."
        Content2="Following the consultation, our team undertakes a detailed site analysis to determine the best geographical sites for the proposed planting project. We use advanced geographic information systems (GIS) technology to evaluate elements such as soil quality, climate conditions, and terrain, guaranteeing that the chosen sites meet the intended objectives."
        Classes=""
      />

      <PlanningStage
        step={planningStage.step}
        title={planningStage.title}
        sections={planningStage.sections}
      />
      <PlanningStage
        step={implementationStage.step}
        title={implementationStage.title}
        sections={implementationStage.sections}
      />
    </main>
  );
}

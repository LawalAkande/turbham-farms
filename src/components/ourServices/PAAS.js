"use client";
import React from "react";
import RequestStage from "../../components/shared/RequestStage";
import PlantingAsAService from "@/components/ourServices/Planting-as-a-service";
import PlanningStage from "@/components/ourServices/Planning-stage";
import paasData from "@/mockdata/paas.js";

export default function PAAS() {
  const { hero, planningStage, implementationStage } = paasData;

  return (
    <main className="md:px-16 space-y-16 lg:space-y-36">
      <PlantingAsAService
        title={hero.title}
        description={hero.description}
        image={hero.image}
        altText={hero.altText}
      />

      <RequestStage
        ImgSrc1="/assets/images/paas/paas2.png"
        ImgSrc2="/assets/images/paas/paas3.png"
        Header1="In-depth consultation"
        Header2="Site Analysis"
        Content1="Turbham Farms begins the process by conducting in-depth consultations with our clients. This entails understanding their individual cultivation needs, objectives, and preferences. Our experts work directly with clients to obtain important information such as preferred crops, intended yield, and any specific environmental concerns."
        Content2="Turbham Farms works closely with clients to strategize inventory management. This includes knowing the specific characteristics of each agricultural product, calculating ideal storage conditions, and developing methods for efficient management within our cutting-edge facilities. Our goal is to ensure that our warehouse solutions smoothly integrate with our clients' distribution requirements."
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

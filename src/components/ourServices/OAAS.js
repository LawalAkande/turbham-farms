import React from "react";
import RequestStage from "../../components/shared/RequestStage";
import PlantingAsAService from "@/components/ourServices/Planting-as-a-service";
import PlanningStage from "@/components/ourServices/Planning-stage";
import oaasData from "@/mockdata/oaas.js";

export default function OAAS() {
  const { hero, planningStage, implementationStage } = oaasData;

  return (
    <main className="md:px-16 space-y-16 lg:space-y-36">
      <PlantingAsAService
        title={hero.title}
        description={hero.description}
        image={hero.image}
        altText={hero.altText}
      />

      <RequestStage
        ImgSrc1="/assets/images/oaas/ooas1.png"
        ImgSrc2="/assets/images/oaas/ooas2.png"
        Header1="Cooperation with Associations and Farmers"
        Header2="Market Analysis"
        Content1="Turbham Farms makes use of its nationwide network of direct farmers and agricultural associations. 
        We first conduct a thorough conversation to review the farmers' current capacities, the crops that are available, and any particular requirements had. By working together, we can make sure that everyone is on the same page and build a solid basis for our cooperation."
        Content2="Turbham Farms carries out an extensive market analysis after the first engagement. Analyzing consumer preferences, market trends, and possible distribution routes are all necessary for this. The knowledge acquired at this point informs our approach to procuring and off-taking agricultural products."
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

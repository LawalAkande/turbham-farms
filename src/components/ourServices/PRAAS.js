import React from "react";
import RequestStage from "../../components/shared/RequestStage";
import PlantingAsAService from "@/components/ourServices/Planting-as-a-service";
import PlanningStage from "@/components/ourServices/Planning-stage";
import GlobalRecognition from "@/components/ourServices/GlobalRecognition";
import praasData from "@/mockdata/praas.js";

export default function PRAAS() {
  const { hero, planningStage, implementationStage } = praasData;

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
        ImgSrc1="/assets/images/praas/praas1.png"
        ImgSrc2="/assets/images/praas/praas2.png"
        Header1="Global Stakeholder Engagement"
        Header2="Market Analysis and International Outreach"
        Content1="Turbham Farms, a key player in the global agricultural landscape, launches the Processing as a Service (PRAAS) concept through strategic partnerships with established and respectable processing facilities. At this vital step, we collaborate to learn potential partners' individual processing requirements, preferences, and market expectations. Furthermore, Turbham farms is fully equipped to support the installation of processing facilities in close proximity to our fields, allowing us to cater to specific needs while maintaining a localized and efficient approach."
        Content2="Turbham Farms also undertakes a comprehensive market analysis to accurately identify worldwide trends and consumer preferences. This international outreach plan assures that processed products, assisted by both established and newly formed facilities, not only meet, but exceed, the stringent criteria, Standards and desires of varied markets throughout the world. We continually aim to align our solutions with developing trends, ensuring a competitive advantage in the worldwide market."
        Classes=""
      />

      <GlobalRecognition />

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

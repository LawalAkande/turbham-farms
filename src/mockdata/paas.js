import HeroImg from "../../public/assets/images/our-services/paas/paas-image-1.png";
import PlanningImg1 from "../../public/assets/images/our-services/paas/planning-stage-1.png";
import PlanningImg2 from "../../public/assets/images/our-services/paas/planning-stage-2.png";
import ImplementImg1 from "../../public/assets/images/our-services/paas/implementation-image-1.png";
import ImplementImg2 from "../../public/assets/images/our-services/paas/implementation-image-2.png";
import ImplementImg3 from "../../public/assets/images/our-services/paas/implementation-image-3.png";

const paasData = {
  hero: {
    title: "Planting as a Service (PAAS)",
    description:
      "Through Planting as a Service (PAAS), Turbham Farms not only offers tailored planting solutions but also supports farmers with access to machinery at prices below traditional market rates. We believe in making modern farming practices accessible and affordable for all.",
    media: HeroImg,
    mediaType: "image",
    altText: "Agricultural field",
  },
  planningStage: {
    step: "2",
    title: "Planning Stage",
    sections: [
      {
        heading: "Create customized planting plans",
        description:
          "Turbham Farms uses cutting-edge technology and agronomic experience to create personalized planting designs. These plans lay out the complete cultivation process, including crop choices, planting patterns, and irrigation tactics. We prioritize sustainability and resource efficiency in order to maximize output potential while reducing environmental effect.",
        image: PlanningImg1,
        altText: "Farmers planning",
      },
      {
        heading: "Budget and Resource Allocation",
        description:
          "A comprehensive budget is produced that details the project's financial requirements. This covers costs for seeds, fertilizers, equipment, and labor. Throughout the planting process, resources are allocated in the most efficient and cost-effective manner.",
        image: PlanningImg2,
        altText: "Budgeting",
      },
    ],
  },

  implementationStage: {
    step: "3",
    title: "Implementation Stage",
    sections: [
      {
        heading: "On-Ground Execution",
        description:
          "Turbham Farms is in charge of the planting project's on-site execution, which includes the deployment of expert agronomists and agricultural technicians. Our skilled crew uses cutting-edge equipment for precision planting, assuring proper spacing and optimal seed germination.",
        image: ImplementImg1,
        altText: "On-Ground Execution",
      },
      {
        heading: "Continuous Monitoring and Adjustment",
        description:
          "Turbham Farms uses extensive monitoring systems throughout the planting phase to track crucial variables such as soil moisture, crop health, and pest resistance. This allows for real-time modifications, ensuring that the planting process remains consistent with specified goals and that any unexpected issues are addressed swiftly.",
        image: ImplementImg2,
        altText: "Continuous Monitoring",
      },
      {
        heading: "Harvest and Delivery",
        description:
          "Turbham Farms supports the harvesting process after successful cultivation by using efficient procedures to ensure the quality of the product. We organize the transportation and delivery of harvested crops or raw materials to processing facilities or designated sites based on our clients' specifications. Turbham Farms' thorough and resourceful approach provides a smooth transition from first request to execution phase, resulting in bespoke planting solutions that exceed expectations.",
        image: ImplementImg3,
        altText: "Harvest and Delivery",
      },
    ],
  },
};

export default paasData;

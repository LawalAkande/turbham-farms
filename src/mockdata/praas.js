import HeroImg from "../../public/assets/images/our-services/praas/praas-image-1.png";
import PlanningImg1 from "../../public/assets/images/our-services/praas/planning-stage-1.png";
import PlanningImg2 from "../../public/assets/images/our-services/praas/planning-stage-2.png";
import ImplementImg1 from "../../public/assets/images/our-services/praas/implementation-image-1.png";
import ImplementImg2 from "../../public/assets/images/our-services/praas/implementation-image-2.png";
import ImplementImg3 from "../../public/assets/images/our-services/praas/implementation-image-3.png";

const praasData = {
  hero: {
    title: "Processing as a Service (PRAAS)",
    description:
      "We ensure that farmers' produce gains exposure and recognition. This approach not only enhances the value of agricultural products but also contributes to the overall growth and sustainability of farming communities",
      media: HeroImg,
      mediaType: "image",
    altText: "Agricultural field",
  },
  planningStage: {
    step: "2",
    title: "Planning Stage",
    sections: [
      {
        heading: "Customized Processing Plans",
        description:
          "Turbham Farms methodically creates bespoke processing strategies based on insights acquired from worldwide stakeholders and rigorous market study. These plans contain processing procedures, packaging strategies, and quality control measures to ensure compliance with demanding international market standards. Turbham Farms engages in a collaborative planning process with those interested in establishing new processing facilities near our farms to ensure that these facilities meet global processing standards and are tailored to specific market demands.",
        image: PlanningImg1,
        altText: "Farmers planning",
      },
      {
        heading: " Logistics and Supply Chain Optimization",
        description:
          "Turbham Farms maintains a strategic emphasis on optimizing logistics and supply chain procedures to ensure the smooth flow of raw materials to processing facilities, whether established or newly introduced. This phase entails strategic decision-making to improve overall efficiency, shorten time-to-market, and seamlessly integrate farms' geographical closeness to processing facilities.",
        image: PlanningImg2,
        altText: "Farmers planning",
      },
    ],
  },

  implementationStage: {
    step: "3",
    title: "Implementation Stage",
    sections: [
      {
        heading: "Reliable and reputable processing facilities",
        description:
          "Turbham Farms uses cutting-edge technology to carry out painstakingly designed processing programs, utilizing both current and newly constructed processing facilities. This strategy assures that all aspects of the processing correspond strictly to international standards, resulting in the production of high-quality processed farm products.",
        image: ImplementImg1,
        altText: "On-Ground Execution",
      },
      {
        heading: "Quality assurance and compliance",
        description:
          "Rigorous quality assurance methods are implemented throughout the processing step, regardless of whether operations take place at existing facilities or those put up in response to specific demands. Turbham Farms adheres unwaveringly to international quality standards and regulatory requirements, cultivating a culture of consistency and confidence among stakeholders worldwide.",
        image: ImplementImg2,
        altText: "Continuous Monitoring",
      },
      {
        heading: "Global Distribution Networks",
        description: [
          {
            subHeading: "Turbham Farms uses established and collaborative global distribution networks to efficiently transport processed agricultural goods to international markets. Strategic collaborations with trustworthy logistics suppliers and distributors help to streamline the distribution process, ensuring that products reach customers quickly while remaining fresh.",
          },
          {
            text: "Through this adaptive, comprehensive, and globally-focused approach, Turbham Farms solidifies its position as a key player in the international agricultural processing landscape. The Processing as a Service (PRAAS) initiative, accommodating partnerships with both established and new facilities, offers tailored solutions that align with diverse stakeholder needs, reflecting our commitment to excellence and professionalism.",
          },
        ],
        image: ImplementImg3,
        altText: "Harvest and Delivery",
      },
    ],
  },
};
export default praasData;

import HeroImg from "../../public/assets/images/our-services/oaas/oaas-image-1.png";
import PlanningImg1 from "../../public/assets/images/our-services/oaas/planning-stage-1.png";
import ImplementImg1 from "../../public/assets/images/our-services/oaas/implementation-image-1.png";
import ImplementImg2 from "../../public/assets/images/our-services/oaas/implementation-image-2.png";
import ImplementImg3 from "../../public/assets/images/our-services/oaas/implementation-image-3.png";
import ImplementImg4 from "../../public/assets/images/our-services/oaas/implementation-image-4.png";

const oaasData = {
  hero: {
    title: "Off-taking as a Service (OOAS)",
    description:
      "This streamlined approach ensures that farmers have a direct route to market access, promoting efficiency and enhancing their economic opportunities.",
    image: HeroImg,
    altText: "Agricultural field",
  },
  planningStage: {
    step: "2",
    title: "Planning Stage",
    sections: [
      {
        heading: "Customized Offtaking Plans",
        description: [
          {
            text: "Turbham Farms creates tailored offtake strategies based on collaborative engagements and market assessments. These plans specify the quantity, quality, and timing of produce to be consumed, ensuring that it is in line with market demands. Our goal is to develop mutually beneficial arrangements that help farmers maximize productivity while ensuring a consistent market for their products.",
          },
          {
            subHeading: "Quality Standards Definition:",
            text: "Quality assurance is a key component of Turbham Farms' offtake service. During the planning phase, we establish and communicate strict quality criteria to farmers. This includes size, freshness, and packaging criteria, all of which contribute to establishing an excellence and consistency culture among farmers.",
          },
          {
            subHeading: "Market Price Monitoring:",
            text: "Turbham Farms also has a rigorous system for tracking market pricing of agricultural products. This regular assessment ensures that the prices offered to farmers for their produce remain competitive and in line with current market trends. By staying current on market trends, we ensure fairness and transparency in our pricing structures.",
          },
        ],
        image: PlanningImg1,
        altText: "Farmers planning",
      },
    ],
  },

  implementationStage: {
    step: "3",
    title: "Implementation Stage",
    sections: [
      {
        heading: "Direct Procurement and Logistics",
        description:
          "Turbham Farms purchases the agreed-upon product directly from farmers, leveraging efficient logistics and transportation networks. We streamline the procurement process to reduce delays and provide fair and timely pay for farmers' products.",
        image: ImplementImg1,
        altText: "On-Ground Execution",
      },
      {
        heading: "Quality Control Measures",
        description:
          "Throughout the offtaking process, rigorous quality control mechanisms are in place. Turbham Farms has trained quality assurance teams who inspect and verify the quality of each batch of produce. This dedication to quality not only surpasses market expectations, but also strengthens trust between Turbham Farms and the farming community.",
        image: ImplementImg2,
        altText: "Continuous Monitoring",
      },
      {
        heading: "Fair Price Negotiations",
        description:
          "Turbham Farms negotiates with farmers in a fair and transparent manner to alter pricing as market prices fluctuate. This collaborative approach takes into account farmers' economic circumstances, ensuring that they are compensated fairly and sustainably for their efforts and dedication.",
        image: ImplementImg3,
        altText: "Harvest and Delivery",
      },
      {
        heading: "Price Stability Measures",
        description: [
          {
            subHeading: "Turbham Farms takes proactive initiatives to keep prices stable, safeguarding farmers and consumers from extreme market changes. By establishing strategic pricing systems and risk mitigation techniques, we help to ensure a stable agricultural market that benefits all parties involved.",
          },
          {
            text: "Turbham Farms' comprehensive and integrated strategy not only allows for a flawless offtaking service, but it also guarantees that pricing stays fair and in line with market conditions, contributing to the sustainability of both farmers and the agricultural market as a whole.",
          },
        ],
        image: ImplementImg4,
        altText: "Harvest and Delivery",
      },
    ],
  },
};

export default oaasData;

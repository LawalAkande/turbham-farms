import HeroImg from "../../public/assets/images/our-services/waas/waas-image-1.png";
import PlanningImg1 from "../../public/assets/images/our-services/waas/planning-stage-1.png";
import PlanningImg2 from "../../public/assets/images/our-services/waas/planning-stage-2.png";
import ImplementImg1 from "../../public/assets/images/our-services/waas/implementation-image-1.png";
import ImplementImg2 from "../../public/assets/images/our-services/waas/implementation-image-2.png";
import ImplementImg3 from "../../public/assets/images/our-services/waas/implementation-image-3.png";

const waasData = {
  hero: {
    title: "Warehousing as a Service (WAAS)",
    description:
      "As part of Warehousing as a Service (WAAS), Turbham Farms actively supports farmers by offering machinery for planting activities at prices below traditional market rates. This initiative aims to make modern farming equipment accessible, encouraging farmers to adopt advanced planting practices for increased efficiency.",
    image: HeroImg,
    altText: "Agricultural field",
  },
  planningStage: {
    step: "2",
    title: "Planning Stage",
    sections: [
      {
        heading: "Customized Warehousing Plans",
        description:
          "Turbham Farms creates bespoke warehousing designs based on the information received during the request stage. These plans include storage standards, security measures, and logistical considerations to meet the individual demands of each client. Turbham Farms collaborates with customers looking for warehouse options adjacent to our farms to tailor facilities properly.",
        image: PlanningImg1,
        altText: "Farmers planning",
      },
      {
        heading: "Technology Integration for Inventory Efficiency",
        description:
          "Turbham Farms prioritizes efficiency in inventory management by incorporating cutting-edge technology. This guarantees that every item in the warehouse is neatly categorized and easily accessible for distribution. Our technology-driven strategy improves precision and responsiveness, allowing us to address the changing needs of our clients.",
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
        heading: "State-of-the-Art Warehousing Facilities",
        description:
          "To ensure the safety and quality of agricultural products held in these facilities, modern security systems and climate control measures are in place.",
        image: ImplementImg1,
        altText: "On-Ground Execution",
      },
      {
        heading: "Meticulous Inventory Organization",
        description:
          "Turbham Farms employs cutting-edge inventory management solutions that raise efficiency to an art form. This rigorous structure guarantees that superior agricultural products are widely available for distribution. The strategic design of the warehouses allows for quick recovery and reduces the time required to fulfill orders.",
        image: ImplementImg2,
        altText: "Continuous Monitoring",
      },
      {
        heading: "Flexible Distribution Readiness",
        description: [
          {
            subHeading: "Turbham Farms prioritizes flexible distribution readiness during implementation by strategically positioning agricultural products in warehouses. Our focus is on responsiveness, which allows us to respond to changing demand circumstances and speed up the distribution process when necessary",
          },
          {
            text: "Turbham Farms Warehousing as a Service (WAAS) is a trademark of secure agricultural product storage solutions by using a complete and client-centric approach. The program addresses the specific demands of stakeholders by offering not only secure storage but also strategic inventory management and delivery preparedness for premium produce.",
          },
        ],
        image: ImplementImg3,
        altText: "Harvest and Delivery",
      },
    ],
  },
};
export default waasData;

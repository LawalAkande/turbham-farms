import Image from "next/image";
import React from "react";

// import logos
import linkedin from "../../../public/assets/logos/linkedin-2.svg";
import twitter from "../../../public/assets/logos/twitter-2.svg";
import instagram from "../../../public/assets/logos/instagram-2.svg";
import facebook from "../../../public/assets/logos/facebook-2.svg";

const JoinTheConversation = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-5 md:space-y-8">
        <p className="text-lg md:text-xl text-center font-medium max-w-3xl ">
          Follow Us – Join the Conversation on. Discover the latest updates,
          success stories, and insights from Turbham Farms.
        </p>
        <div className="flex items-center space-x-3 md:space-x-7">
          <a
            href="https://www.linkedin.com/company/turbhamfarms/"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt="Turbham Farms Logo"
              className="cursor-pointer hover:scale-110 transition-all duration-500"
            />
          </a>
          <Image
            src={twitter}
            alt="Turbham Farms Logo"
            className="cursor-pointer hover:scale-110 transition-all duration-500"
          />
          <Image
            src={instagram}
            alt="Turbham Farms Logo"
            className="cursor-pointer hover:scale-110 transition-all duration-500"
          />
          <Image
            src={facebook}
            alt="Turbham Farms Logo"
            className="cursor-pointer hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTheConversation;

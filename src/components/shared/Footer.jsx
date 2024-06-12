import React from "react";
import Link from "next/link";
import Image from "next/image";

// import logos
import Logo from "../../../public/assets/logos/turbham-farms-logo.svg";
import linkedin from "../../../public/assets/logos/linkedin.svg";
import twitter from "../../../public/assets/logos/twitter.svg";
import instagram from "../../../public/assets/logos/instagram.svg";
import facebook from "../../../public/assets/logos/facebook.svg";

const Footer = () => {
  return (
    <div className="bg-BlackSqueeze py-6 md:py-24">
      <div className="container mx-auto space-y-16 md:space-y-24">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row ">
          <div className="w-full md:w-[50%] lg:w-[55%] space-y-8 md:space-y-10">
            <Image
              src={Logo}
              alt="Turbham Farms Logo"
              className="w-36 md:w-fit"
            />
            <div className="flex items-center space-x-3 md:space-x-5">
              <a
                href="https://www.linkedin.com/company/turbhamfarms/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="Turbham Farms Logo"
                  className="cursor-pointer scale-150"
                />
              </a>

              <Image
                src={twitter}
                alt="Turbham Farms Logo"
                className="cursor-pointer"
              />
              <Image
                src={instagram}
                alt="Turbham Farms Logo"
                className="cursor-pointer"
              />
              <Image
                src={facebook}
                alt="Turbham Farms Logo"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-24">
            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="flex flex-col space-y-2 md:space-y-4">
                <Link href="/" className="text-sm">
                  Home
                </Link>
                <Link href="about-us" className="text-sm">
                  About us
                </Link>
                <Link href="our-services" className="text-sm">
                  Our Service
                </Link>
                <Link href="/contact-us" className="text-sm">
                  Contact us
                </Link>
                <Link href="" className="text-sm">
                  Legal
                </Link>
              </div>
            </div>
            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold">Get Involved</h4>
              <div className="flex flex-col space-y-2 md:space-y-4">
                <Link href="" className="text-sm">
                  Become a Farmer
                </Link>
                <Link href="" className="text-sm">
                  Partner with us
                </Link>
                <Link href="" className="text-sm">
                  Invest with us
                </Link>
              </div>
            </div>
            <div className="space-y-2 md:space-y-4">
              <Link href="/contact-us" className="font-semibold">
                Contact Us
              </Link>
              <div className="flex flex-col space-y-2 md:space-y-4">
                <Link href="" className="text-sm">
                  info@turbhamfarms.com
                </Link>
                <Link href="" className="text-sm">
                  +234 706 201 1450
                </Link>
                <Link href="" className="text-sm">
                  +234 706 201 1451
                </Link>
                <Link href="" className="text-sm">
                  Help
                </Link>
                <Link href="" className="text-sm">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  space-y-5 md:space-y-0 md:flex-row">
          <div className="w-full md:w-[50%] lg:w-[55%] flex items-center space-x-4 font-light md:text-lg">
            <Link href="">Terms of Service</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Cookies</Link>
          </div>
          <p className="w-full md:w-[50%] lg:w-[45%] font-light md:text-lg text-center md:text-left">
            © 2023 Turbham Farms by Turbham Technologies Limited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Button from "../shared/Button";

const ContactUsForm = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-6 md:gap-y-20 md:px-24 lg:px-44 pt-8 pb-24">
        <div className="space-y-1 md:space-y-3 lg:space-y-7 col-span-2 md:col-span-1">
          <label
            htmlFor="fullName"
            className="text-BalticSea font-medium text-base md:text-2xl"
          >
            Full Name
          </label>
          <input
            type="text"
            className="w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="space-y-1 md:space-y-3 lg:space-y-7 col-span-2 md:col-span-1">
          <label
            htmlFor="email"
            className="text-BalticSea font-medium text-base md:text-2xl"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="space-y-1 md:space-y-3 lg:space-y-7 col-span-2">
          <label
            htmlFor="email"
            className="text-BalticSea font-medium text-base md:text-2xl"
          >
            Phone Number
          </label>
          <input
            type="number"
            className="appearance-none w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0"
            placeholder="Enter your Number"
            required
          />
        </div>
        <div className="space-y-4 col-span-2">
          <div className="space-y-1 md:space-y-3 lg:space-y-7">
            <label
              htmlFor="email"
              className="text-BalticSea font-medium text-base md:text-2xl"
            >
              Message
            </label>
            <textarea
              type="number"
              className="w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0"
              placeholder="Enter your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <p className="text-right font-medium text-base md:text-xl">
            Max 250 Characters
          </p>
        </div>

        <div className="col-span-2">
          <Button
            href=""
            title="Send Message"
            className="text-base md:text-2xl w-full rounded-xl text-white border-2 border-GreenHaza p-3 md:p-6 bg-GreenHaza font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

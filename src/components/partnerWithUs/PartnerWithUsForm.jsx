"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PartnerWithUsForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mySelected, setMySelected] = useState("FARMER COLLABORATION");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loading, setLoading] = useState(false);

  let initialFormData = {
    name: "",
    number: "",
    email: "",
    address: "",
    occupation: "",
    investment_range: "",
    investment_timeframe: "",
    mode_of_communication: "",
    comments: "",
    contact_person: "",
    nature_of_interest: "",
    corporate_goals: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const myselectOpt = (option) => {
    setMySelected(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 912); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const partnerType =
      mySelected === "FARMER COLLABORATION"
        ? "INDIVIDUAL PARTNER"
        : "CORPORATE PARTNER";
    const data = {
      partner_type: partnerType,
      name: formData.name,
      number: formData.number,
      email: formData.email,
      address: formData.address,
      occupation:
        partnerType === "INDIVIDUAL PARTNER" ? formData.occupation : undefined,
      investment_range: formData.investment_range,
      investment_timeframe:
        partnerType === "INDIVIDUAL PARTNER"
          ? formData.investment_timeframe
          : undefined,
      mode_of_communication: formData.mode_of_communication
        .split(",")
        .map((item) => item.trim()),
      contact_person:
        partnerType === "CORPORATE PARTNER"
          ? formData.contact_person
          : undefined,
      nature_of_interest:
        partnerType === "CORPORATE PARTNER"
          ? formData.nature_of_interest
          : undefined,
      corporate_goals:
        partnerType === "CORPORATE PARTNER"
          ? formData.corporate_goals
          : undefined,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.turbham.com/farm/partnership",
        data
      );
      if (response) {
        setLoading(false);
        toast.success("Partnership form submitted successfully!");
        setFormData(initialFormData);
      }
    } catch (error) {
      toast.error("Please fill all required fields!");
    }
  };

  return (
    <>
      {isSmallScreen ? (
        <div className=" h-[100%] pt-[66px] flex flex-col gap-[25px] ">
          <div className="flex flex-col gap-[32px] justify-around z-[999] w-[100%] pl-[16px]">
            <h5 className="font-windsorpro-bold text-[28px] leading-[2.1rem] text-GreenHaza ">
              Lets Get Started!
            </h5>
            <p className="font-normal text-xl leading-[1.625rem] text-[#52575C]">
              Please complete the relevant form below to initiate the
              partnership process.
            </p>
          </div>
          <div className="bg-[#184D3B] pt-[72px] pb-[20px]">
            <div className="flex flex-row items-center justify-between mb-5 mb-10 z-[999] pl-[16px]">
              <h3 className="font-semibold text-[20px] text-white leading-[3.0625rem]">
                Partnership Inquiry Form
              </h3>
            </div>
            <div className=" mb-5 md:mb-10 z-[999] pl-[16px]">
              <div className="inline-block relative ">
                <div className="relative ">
                  <button
                    type="button"
                    className="w-fit flex space-x-4 items-center px-6 py-3.5 border border-white rounded-[12px] text-sm leading-5 font-medium text-white transition duration-150 ease-in-out"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{mySelected}</span>
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className={dropdownOpen ? "hidden" : "inline-block"}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 14l-5-5 1.41-1.41L10 11.18l3.59-3.59L15 9l-5 5z"
                      />
                      <path
                        className={dropdownOpen ? "inline-block" : "hidden"}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 6l-5 5 1.41 1.41L10 8.82l3.59 3.59L15 11l-5-5z"
                      />
                    </svg>
                  </button>
                  <div
                    className={
                      dropdownOpen
                        ? "absolute z-50 mt-2 w-full rounded-md bg-white shadow-lg"
                        : "hidden"
                    }
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          myselectOpt("FARMER COLLABORATION");
                        }}
                        className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 hover:text-green-900"
                      >
                        FARMER COLLABORATION
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          myselectOpt("CORPORATE PARTNERS");
                        }}
                        className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 hover:text-green-900"
                      >
                        CORPORATE PARTNERS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {mySelected === "FARMER COLLABORATION" && (
              <form onSubmit={handleSubmit}>
                <div className="pl-[16px]">
                  <h4 className="font-light text-xl md:text-2xl mb-5 md:mb-28 text-white z-[999]">
                    Contact Information
                  </h4>
                  <div className=" flex flex-col gap-[48px] z-[999] w-[95%]">
                    <div className="grid grid-cols-1 gap-16 mb-16 ">
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Full Name</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Email Address</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Phone Number</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Residential Address</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your address"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Occupation</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your occupation"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Investment Amount Range</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="investment_range"
                            value={formData.investment_range}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter investment amount range"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Investment Timeframe</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="investment_timeframe"
                            value={formData.investment_timeframe}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your investment timeframe"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8 mb-8 md:mb-12">
                      <h4 className="font-light text-xl md:text-2xl text-white">
                        Preferred Method of Communication:
                      </h4>
                      <p className="font-light text-base md:text-lg md:max-w-3xl text-white">
                        Please indicate your preferred method of communication
                        for further discussions and updates:
                      </p>
                      <div className=" flex flex-wrap gap-[24px]">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="Phone"
                            onChange={handleChange}
                            checked={formData.mode_of_communication === "Phone"}
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            Phone
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="Email"
                            onChange={handleChange}
                            checked={formData.mode_of_communication === "Email"}
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            Email
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="WhatsApp"
                            onChange={handleChange}
                            checked={
                              formData.mode_of_communication === "WhatsApp"
                            }
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            WhatsApp
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="Other"
                            onChange={handleChange}
                            checked={formData.mode_of_communication === "Other"}
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            Other (Please specify)
                          </p>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-transparent border-[0.1px] p-4 border-BlueChalk rounded-lg focus:outline-0"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        id=""
                        cols="30"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="flex justify-start">
                      <button
                        className="text-white border border-GreenHaza bg-GreenHaza rounded-xl p-4 hover:border-GreenHaza hover:bg-GreenHaza  hover:text-white w-[160px]"
                        type="submit"
                      >
                        {loading ? "Submiting..." : "Submit"}
                      </button>
                    </div>
                    {/* <Button
                      href=""
                      title="Submit"
                      onClick={handleSubmit}
                      className="border border-GreenHaza bg-GreenHaza rounded-xl p-4 hover:border-GreenHaza hover:bg-GreenHaza hover:text-white w-[160px] placeholder-[#00A85A] text-[#00A85A]"
                    /> */}
                  </div>
                </div>
              </form>
            )}

            {mySelected === "CORPORATE PARTNERS" && (
              <form onSubmit={handleSubmit}>
                <div className="pl-[16px]">
                  <h4 className="font-light text-xl md:text-2xl mb-5 md:mb-28 text-white z-[999]">
                    Contact Information
                  </h4>
                  <div className=" flex flex-col gap-[48px] z-[999] w-[95%]">
                    <div className="grid grid-cols-1 gap-16 mb-16 ">
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Full Name</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Email Address</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Phone Number</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Residential Address</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter your Residential address"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Occupation</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter Occupation"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Primary contact</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="number"
                            name="contact_person"
                            value={formData.contact_person}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter Primary contact"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Nature of Interest</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                          <input
                            type="text"
                            name="nature_of_interest"
                            value={formData.nature_of_interest}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter nature of interest"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Corporate Goal</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                          <input
                            type="text"
                            name="corporate_goals"
                            value={formData.corporate_goals}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter corporate goals"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Investment Amount Range</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="investment_range"
                            value={formData.investment_range}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter investment amount range"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                        <h5 className="text-white">Investment Timeframe</h5>
                        <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border">
                          <input
                            type="text"
                            name="investment_timeframe"
                            value={formData.investment_timeframe}
                            onChange={handleChange}
                            className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                            placeholder="Enter investment timeframe  "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8 mb-8 md:mb-12">
                      <h4 className="font-light text-xl md:text-2xl text-white">
                        Preferred Method of Communication:
                      </h4>
                      <p className="font-light text-base md:text-lg md:max-w-3xl text-white">
                        Please indicate your preferred method of communication
                        for further discussions and updates:
                      </p>
                      <div className=" flex flex-wrap gap-[24px]">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="Phone"
                            onChange={handleChange}
                            checked={formData.mode_of_communication === "Phone"}
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            Phone
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="Email"
                            onChange={handleChange}
                            checked={formData.mode_of_communication === "Email"}
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            Email
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="WhatsApp"
                            onChange={handleChange}
                            checked={
                              formData.mode_of_communication === "WhatsApp"
                            }
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            WhatsApp
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mode_of_communication"
                            value="Other"
                            onChange={handleChange}
                            checked={formData.mode_of_communication === "Other"}
                            className="accent-[#00A85A] cursor-pointer"
                          />
                          <p className="font-light text-base md:text-lg text-white">
                            Other (Please specify)
                          </p>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-transparent border-[0.1px] p-4 border-BlueChalk rounded-lg focus:outline-0"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        id=""
                        cols="30"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="flex justify-start">
                      <button
                        className="text-white border border-GreenHaza bg-GreenHaza rounded-xl p-4 hover:border-GreenHaza hover:bg-GreenHaza  hover:text-white w-[160px]"
                        type="submit"
                      >
                        {loading ? "Submiting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : (
        <div className=" relative h-[100%] pt-[200px] px-[81px]  ">
          <img
            src="/assets/images/partner-with-us/partner-with-us.png"
            alt="Hero Image"
            className={`w-[100%] ${
              mySelected === "FARMER COLLABORATION"
                ? "h-[1800px]"
                : "h-[3000px]"
            }`}
          />
          <div
            className={`flex flex-row items-center justify-between mb-5 md:mb-10 absolute  max-xl:left-[70%] max-xl:top-[15%] max-lg:translate-x-[-20%] z-[999] ${
              mySelected === "FARMER COLLABORATION"
                ? "top-[13%] right-[5%] translate-x-[-50%] translate-y-[-50%]"
                : "top-[10%] right-[5%] translate-x-[-50%] translate-y-[-50%]"
            }`}
          >
            <h3 className="font-semibold text-lg md:text-2xl xl:text-4xl text-white">
              Partnership Inquiry Form
            </h3>
          </div>
          <div
            className={`flex flex-col gap-[32px] absolute  z-[999] w-[513px] max-xl:w-[550px] ${
              mySelected === "FARMER COLLABORATION"
                ? "top-[15%] left-[25%] translate-x-[-50%] translate-y-[-50%]"
                : "top-[12%] left-[25%] translate-x-[-50%] translate-y-[-50%]"
            }`}
          >
            <h5 className="font-windsorpro-bold text-5xl leading-[3.81rem] text-GreenHaza">
              Lets Get Started!
            </h5>
            <p className="font-normal text-xl leading-[1.625rem]">
              Please complete the relevant form below to initiate the
              partnership process.
            </p>
          </div>
          <div className=" mb-5 md:mb-10 absolute top-[25%] left-[20%] translate-x-[-50%] translate-y-[-50%] z-[999]">
            <div className="inline-block relative ">
              <div className="relative ">
                <button
                  type="button"
                  className="w-fit flex space-x-4 items-center px-6 py-3.5 border border-white rounded-[12px] text-sm leading-5 font-medium text-white transition duration-150 ease-in-out"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{mySelected}</span>
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      className={dropdownOpen ? "hidden" : "inline-block"}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 14l-5-5 1.41-1.41L10 11.18l3.59-3.59L15 9l-5 5z"
                    />
                    <path
                      className={dropdownOpen ? "inline-block" : "hidden"}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 6l-5 5 1.41 1.41L10 8.82l3.59 3.59L15 11l-5-5z"
                    />
                  </svg>
                </button>
                <div
                  className={
                    dropdownOpen
                      ? "absolute z-50 mt-2 w-full rounded-md bg-white shadow-lg"
                      : "hidden"
                  }
                >
                  <div className="py-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        myselectOpt("FARMER COLLABORATION");
                      }}
                      className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 hover:text-green-900"
                    >
                      FARMER COLLABORATION
                    </a>
                  </div>
                  <div className="py-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        myselectOpt("CORPORATE PARTNERS");
                      }}
                      className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 hover:text-green-900"
                    >
                      CORPORATE PARTNERS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destop FARMER COLLABORATION */}
          {mySelected === "FARMER COLLABORATION" && (
            <form onSubmit={handleSubmit}>
              <div className="">
                <h4 className="font-light text-xl md:text-2xl mb-5 md:mb-28 text-white absolute top-[32%] left-[18%] translate-x-[-50%] translate-y-[-50%] z-[999]">
                  Contact Information
                </h4>
                <div className=" flex flex-col gap-[48px] absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-40%] z-[999] w-[80%]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 ">
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Full Name</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Email Address</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Phone Number</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Residential Address</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your Residential address"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Occupation</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter Occupation"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Investment Amount Range</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="investment_range"
                          value={formData.investment_range}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter investment amount range"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Investment Timeframe</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="investment_timeframe"
                          value={formData.investment_timeframe}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter investment timeframe "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8 mb-8 md:mb-12">
                    <h4 className="font-light text-xl md:text-2xl text-white">
                      Preferred Method of Communication:
                    </h4>
                    <p className="font-light text-base md:text-lg md:max-w-3xl text-white">
                      Please indicate your preferred method of communication for
                      further discussions and updates:
                    </p>
                    <div className=" flex flex-wrap gap-[24px]">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="Phone"
                          onChange={handleChange}
                          checked={formData.mode_of_communication === "Phone"}
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="form-radio font-light text-base md:text-lg text-white">
                          Phone
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="Email"
                          onChange={handleChange}
                          checked={formData.mode_of_communication === "Email"}
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="form-radio font-light text-base md:text-lg text-white">
                          Email
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="WhatsApp"
                          onChange={handleChange}
                          checked={
                            formData.mode_of_communication === "WhatsApp"
                          }
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="font-light text-base md:text-lg text-white">
                          WhatsApp
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="Other"
                          onChange={handleChange}
                          checked={formData.mode_of_communication === "Other"}
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="font-light text-base md:text-lg text-white">
                          Other (Please specify)
                        </p>
                      </div>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-[0.1px] p-4 border-BlueChalk rounded-lg focus:outline-0 placeholder-[#00A85A] text-[#00A85A]"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>

                  <div className="flex justify-start">
                    <button
                      className="text-white border border-GreenHaza bg-GreenHaza rounded-xl p-4 hover:border-GreenHaza hover:bg-GreenHaza  hover:text-white w-[160px]"
                      type="submit"
                    >
                      {loading ? "Submiting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {mySelected === "CORPORATE PARTNERS" && (
            <form onSubmit={handleSubmit}>
              <div className="">
                <h4 className="font-light text-xl md:text-2xl mb-5 md:mb-28 text-white absolute top-[32%] left-[18%] translate-x-[-50%] translate-y-[-50%] z-[999]">
                  Company/Organization
                </h4>
                <div className=" flex flex-col gap-[48px] absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-40%] z-[999] w-[80%]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 ">
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Company Name</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Contact Person</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="contact_person"
                          value={formData.contact_person}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Contact Email</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your Email"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Contact Phone Number</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter your Number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Company Address</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter Company Address"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3 col-start-1 col-end-3">
                      <h5 className="text-white">
                        Nature of Collaboration Interest
                      </h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full ">
                        <textarea
                          className="w-full bg-transparent border-[0.1px] p-4 border-BlueChalk rounded-lg focus:outline-0 placeholder-[#00A85A] text-[#00A85A]"
                          name="nature_of_interest"
                          value={formData.nature_of_interest}
                          onChange={handleChange}
                          cols="30"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3">
                      <h5 className="text-white">Investment Range</h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full rounded-[4px] border p-2">
                        <input
                          type="text"
                          name="investment_range"
                          value={formData.investment_range}
                          onChange={handleChange}
                          className="w-full placeholder-[#00A85A] text-[#00A85A] bg-transparent text-lg font-light focus:outline-0 px-3"
                          placeholder="Enter investment range "
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[16px] pb-1 md:pb-5 pl-0 md:pl-3 col-start-1 col-end-3">
                      <h5 className="text-white">
                        Corporate Social Responsibility Goals
                      </h5>
                      <div className="px-3 md:px-0 flex items-center md:space-x-1 w-full ">
                        <textarea
                          className="w-full bg-transparent border-[0.1px] p-4 border-BlueChalk rounded-lg focus:outline-0 placeholder-[#00A85A] text-[#00A85A]"
                          name="corporate_goals"
                          value={formData.corporate_goals}
                          onChange={handleChange}
                          cols="30"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8 mb-8 md:mb-12">
                    <h4 className="font-light text-xl md:text-2xl text-white">
                      Preferred Method of Communication:
                    </h4>
                    <p className="font-light text-base md:text-lg md:max-w-3xl text-white">
                      Please indicate your preferred method of communication for
                      further discussions and updates:
                    </p>
                    <div className=" flex flex-wrap gap-[24px]">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="Phone"
                          onChange={handleChange}
                          checked={formData.mode_of_communication === "Phone"}
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="form-radio font-light text-base md:text-lg text-white">
                          Phone
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="Email"
                          onChange={handleChange}
                          checked={formData.mode_of_communication === "Email"}
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="form-radio font-light text-base md:text-lg text-white">
                          Email
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="WhatsApp"
                          onChange={handleChange}
                          checked={
                            formData.mode_of_communication === "WhatsApp"
                          }
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="font-light text-base md:text-lg text-white">
                          WhatsApp
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="mode_of_communication"
                          value="Other"
                          onChange={handleChange}
                          checked={formData.mode_of_communication === "Other"}
                          className="accent-[#00A85A] cursor-pointer"
                        />
                        <p className="font-light text-base md:text-lg text-white">
                          Other (Please specify)
                        </p>
                      </div>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-[0.1px] p-4 border-BlueChalk rounded-lg focus:outline-0 placeholder-[#00A85A] text-[#00A85A]"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white border border-GreenHaza bg-GreenHaza rounded-xl p-4 hover:border-GreenHaza hover:bg-GreenHaza  hover:text-white w-[160px]"
                  >
                    {loading ? "Submiting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default PartnerWithUsForm;

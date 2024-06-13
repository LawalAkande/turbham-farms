"use client";
import React, { useState } from "react";
import axios from "axios";
import Button from "../shared/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  const initialFormData = {
    full_name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.turbham.com/farm/contact-us",
        data
      );
      if (response.status >= 200 && response.status < 300) {
        setLoading(false);
        toast.success("Form submitted successfully!");
        setFormData(initialFormData);
      } else {
        toast.error("Failed to submit the form");
      }
    } catch (error) {
      toast.error("Please fill all required fields!");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-6 md:gap-y-20 md:px-24 lg:px-44 pt-8 pb-24">
          <div className="space-y-1 md:space-y-3 lg:space-y-7 col-span-2 md:col-span-1">
            <label
              htmlFor="full_name"
              className="text-BalticSea font-medium text-base md:text-2xl"
            >
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0 relative z-50"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0 relative z-50"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="space-y-1 md:space-y-3 lg:space-y-7 col-span-2">
            <label
              htmlFor="phone"
              className="text-BalticSea font-medium text-base md:text-2xl"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0 relative z-50"
              placeholder="Enter your Number"
              required
            />
          </div>
          <div className="space-y-4 col-span-2">
            <div className="space-y-1 md:space-y-3 lg:space-y-7">
              <label
                htmlFor="message"
                className="text-BalticSea font-medium text-base md:text-2xl"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-WhiteSmoke rounded-md md:rounded-xl py-2 md:py-8 px-4 md:px-12 text-sm md:text-2xl placeholder:font-light border border-WhiteSmoke focus:outline-none focus:border-GreenHaza focus:ring-0 relative z-50"
                placeholder="Enter your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <p className="text-right font-medium text-base md:text-xl">
              Max 250 Characters
            </p>
          </div>

          <div className="col-span-2 relative z-50">
            <button
              type="submit"
              className="text-base md:text-2xl w-full rounded-xl text-white border-2 border-GreenHaza p-3 md:p-6 bg-GreenHaza font-medium"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUsForm;

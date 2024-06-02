import React from "react";
import Layout from "@/components/layout";
import SignupForTurbhamFarms from "../../components/contactUs/SignupForTurbhamFarms";
import JoinTheConversation from "../../components/contactUs/JoinTheConversation";
import Hero from "../../components/contactUs/Hero";
import HaveAQuestion from "../../components/contactUs/HaveAQuestion";
import ContactUsForm from "../../components/contactUs/ContactUsForm";

const page = () => {
  return (
    <Layout>
      <Hero />
      <HaveAQuestion />
      <ContactUsForm />
      <JoinTheConversation />
      <SignupForTurbhamFarms />
    </Layout>
  );
};

export default page;

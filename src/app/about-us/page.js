import React from "react";
import Layout from "@/components/layout";
import Hero from "@/components/aboutUs/Hero";
import Vision from "@/components/aboutUs/Vision";
import aboutData from "@/mockdata/aboutUs";
import SignupForTurbhamFarms from "@/components/contactUs/SignupForTurbhamFarms";

export default function About_us() {
  return (
    <Layout>
      <main className="space-y-9 lg:space-y-36">
        <Hero />

        <section className="flex flex-col gap-16 lg:gap-36">
          {aboutData.map((item, index) => (
            <Vision
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              altText={item.altText}
            />
          ))}
        </section>
        <SignupForTurbhamFarms />
      </main>
    </Layout>
  );
}

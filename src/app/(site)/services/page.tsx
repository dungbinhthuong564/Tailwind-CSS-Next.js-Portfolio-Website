import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Services from "@/components/Home/Services";
import Counter from "@/components/Home/Counter";

export const metadata: Metadata = {
  title: "Services & Expertise | An Trung Dũng",
  description: "Front-End Web Development capabilities: Responsive SPAs, Next.js & React Apps, REST API Integration, and UI/UX Engineering.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services & Technical Capabilities"
        description="Comprehensive front-end engineering solutions built with React, Next.js, Vite, and Tailwind CSS to deliver outstanding digital experiences."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services />
      <Counter isColorMode={true} />
    </>
  );
};

export default page;

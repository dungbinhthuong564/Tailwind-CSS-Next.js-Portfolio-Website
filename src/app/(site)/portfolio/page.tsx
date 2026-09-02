import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio | An Trung Dũng",
  description: "Browse completed web development projects by An Trung Dũng including Personal Finance Tracker, AI Study Hub, Spotify Clone, To-do App, and Portfolio.",
};

const PortfolioListPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Projects & Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Projects & Completed Works"
        description="A curated showcase of web applications built with React, Next.js, Vite, Tailwind CSS, and RESTful APIs with open-source code on GitHub."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Portfolio />
    </>
  );
};

export default PortfolioListPage;
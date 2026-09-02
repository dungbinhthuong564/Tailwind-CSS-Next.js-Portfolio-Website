import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Testimonial from "@/components/SharedComponent/Testimonial";

export const metadata: Metadata = {
  title: "About Me | An Trung Dũng",
  description: "Learn more about An Trung Dũng, 3rd-year Software Engineering student at FPT University HCM, front-end development background, skills, and activities.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Me" },
  ];
  return (
    <>
      <HeroSub
        title="About An Trung Dũng"
        description="Third-year Software Engineering student at FPT University HCM, aspiring to become a Front-End Developer with a strong foundation in modern web technologies."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Counter isColorMode={true} />
      <Progresswork isColorMode={false} />
      <Testimonial />
    </>
  );
};

export default page;

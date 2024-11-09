import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Visi from "@/components/Visi";
import Features from "@/components/Features";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Visi />
      <Features />
      <Team />
      <CallToAction />
    </main>
  );
};

export default AboutPage;

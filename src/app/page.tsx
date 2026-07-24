import Features from "@/components/Features";
import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apache ResilientDB (Incubating)",
  description: "Global-Scale Sustainable Blockchain Fabric",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Features />
      <Publications />
    </>
  );
}

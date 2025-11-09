"use client";
import React from "react";
import Hero from "./components/hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "./components/menu";
import Free from "./components/Free";
import Mixed from "./components/mixed";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  return (
    <main>
      <Hero />
      <Menu />
      <Free />
      <Mixed />
      <Footer />
    </main>
  );
};

export default page;

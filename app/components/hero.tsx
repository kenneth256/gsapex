"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".header",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    )
      .fromTo(
        ".content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ".glass",
        { opacity: 0, x: 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.8"
      )
      .fromTo(
        ".shadow",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=1.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full flex justify-center min-h-screen">
      <section className="flex w-full max-w-6xl flex-col lg:flex-row h-fit mt-20 items-center justify-center px-8 gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="gap-4 flex flex-col justify-center flex-1 text-center lg:text-left">
          <h1 className="header text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Discover New{" "}
            <span className="font-aston-script text-amber-400 text-5xl md:text-6xl lg:text-7xl">
              T
            </span>
            astes
          </h1>
          <div className="content">
            <p className="max-w-[400px] mb-6 text-black/80 mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet
            </p>
            <button className="bg-black/95 text-white/95 py-3 px-8 rounded-xl hover:bg-black transition-all hover:scale-105 uppercase font-medium">
              drink at home
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="relative flex items-center justify-center w-full max-w-md">
            <Image
              className="glass relative z-10"
              width={500}
              height={500}
              alt="cocktail glass"
              src="/glass1.png"
              priority
            />
            <div className="shadow w-[40%] max-w-[200px] h-3 md:h-4 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-black/60 via-black/30 to-transparent rounded-full absolute bottom-8 md:bottom-12 blur-sm"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

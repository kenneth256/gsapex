"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const cocktails = [
  { name: "Cocktail", type: "alcoholic" },
  { name: "Wine", type: "alcoholic" },
  { name: "Mojito", type: "alcoholic" },
  { name: "Tea", type: "non-alcoholic" },
];

const cocktailList = [
  {
    name: "Mystic Margarita",
    price: 20,
    percentage: 10,
    image: "/maga.jpg",
  },
  { name: "Crimson Breeze", price: 22, percentage: 15, image: "/crimson.jpg" },
  {
    name: "Tropical Whisper",
    price: 25,
    percentage: 20,
    image: "/tropical.jpg",
  },
  {
    name: "Starlight Sangria",
    price: 28,
    percentage: 25,
    image: "/sangaria.jpg",
  },
];

const Menu = () => {
  useEffect(() => {
    const items = gsap.utils.toArray(".cocktail-item");
    const itemss = gsap.utils.toArray(".item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-header",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".hero-header",
      { y: 100, scale: 0, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        ".cocktails",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.7"
      )
      .fromTo(
        items,
        { opacity: 0, x: -100 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        },
        "-=0.7"
      )
      .fromTo(
        itemss,
        { opacity: 0, x: -100, scale: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scale: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        },
        "-=0.7"
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="flex min-h-screen justify-center w-full px-8">
      <div className="flex flex-col w-full max-w-6xl items-center gap-6 mb-6">
        <h1 className="uppercase hero-header font-bold text-4xl md:text-5xl">
          <span className="font-aston-script text-orange-400">N</span>
          <span className="font-inter">ew in menu</span>
        </h1>
        <div className="flex w-full border-solid border-t border-b-2 items-center justify-center cocktails">
          <ul className="flex gap-12 w-full items-center justify-center p-2">
            {cocktails.map((cocktail) => (
              <li
                className="font-inter cocktail-item uppercase font-light w-fit text-black/80"
                key={cocktail.name}
              >
                {cocktail.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid itemsss grid-cols-1 md:grid-cols-4 gap-6 w-full auto-rows-[450px] mt-4 px-6">
          {cocktailList.map(({ name, price, percentage, image }) => (
            <div key={name} className="flex item flex-col justify-center items-center gap-4">
              <div
                className="overflow-hidden rounded-full w-full bg-amber-100 h-[450px] relative"
                key={name}
              >
                <Image
                  height={500}
                  width={500}
                  alt={`${name} cocktail`}
                  src={image}
                  className="object-cover backdrop-blur-md absolute inset-0 w-full h-full"
                />

                <p className="absolute top-16 right-4 bg-black/65 text-white px-2 py-0.5 rounded text-sm font-medium">
                  {percentage}%
                </p>
              </div>
              <span className="gap-1 items-center flex-col flex">
                <p className=" text-black/75 font-semibold drop-shadow-lg">
                  {name}
                </p>
                <p className=" text-black/75 font-semibold drop-shadow-lg">
                  ${price}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

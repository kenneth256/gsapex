"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const navs = [
  { label: "shop", href: "/shop" },
  { label: "our story", href: "/our-story" },
  { label: "contact us", href: "/contact" },
];

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".header2",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.5)" }
    ).fromTo(
      ".link",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=1"
    );
  }, []);
  return (
    <div className="w-full flex justify-center">
      <header className="header2 mt-[30px] px-4 w-full max-w-6xl h-[50px] flex flex-row justify-between mx-6 items-center bg-[#E9B915] rounded-[80px]">
        <h1 className="font-bold font-jsmath">
          <span className="font-aston-script">f</span>lavo
        </h1>
        <nav className="flex gap-4">
          {navs.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={`navigate to ${link.label}`}
              className="uppercase w-fit link"
            >
              {" "}
              {link.label}
            </Link>
          ))}
        </nav>
        <Image
          alt="bar-log"
          width={24}
          height={24}
          aria-label="bar log"
          src={"/lockjar.svg"}
          className="w-6 h-6"
        />
      </header>
    </div>
  );
};

export default Header;

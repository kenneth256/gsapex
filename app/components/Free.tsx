"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";



const Free = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".mixed",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0 }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      <section
        ref={sectionRef}
        className="flex mixed items-center flex-col max-w-6xl mx-auto py-16 px-4"
      >
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-jsmath text-3xl uppercase">
            <span className="font-aston-script text-4xl">f</span>lavo
          </h1>
          <p className="uppercase">let's drink</p>
          <p className="max-w-[700px] text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis{" "}
          </p>
        </div>
        <div className="w-full h-[500px] overflow-hidden rounded-2xl mt-16">
          <Image
            className="object-cover h-full w-full"
            width={1200}
            height={800}
            alt="cocktails-major"
            src={"/main.jpg"}
          />
        </div>
      </section>
    </div>
  );
};

export default Free;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const cocktailData = [
  {
    name: "Golden Hour Sour",
    mixWith: "tequilo • mojito • vellia",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    imagePosition: "left",
    imageURL: "/mx1.jpg",
  },
  {
    name: "Amber Old Fashioned",
    mixWith: "tequilo • mojito • vellia",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    imagePosition: "right",
    imageURL: "/mx.jpg",
  },
  {
    name: "Starlight Sangria",
    mixWith: "tequilo • mojito • vellia",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    imagePosition: "left",
    imageURL: "/mxsagi.jpg",
  },
];

interface CocktailRowProps {
  name: string;
  mixWith: string;
  description: string;
  imagePosition: "left" | "right";
  imageURL: string;
}

const CocktailRow: React.FC<CocktailRowProps> = ({
  name,
  mixWith,
  description,
  imagePosition,
  imageURL,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rowRef.current;
    if (!element) return;

    const imageEl = element.querySelector(".cocktail-image");
    const contentEl = element.querySelector(".cocktail-content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    // Animate image
    tl.fromTo(
      imageEl,
      { opacity: 0, x: imagePosition === "left" ? -100 : 100, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, ease: "power3.out" }
    );

    // Animate content - starts halfway through image animation
    tl.fromTo(
      contentEl,
      { opacity: 0, x: imagePosition === "left" ? 100 : -100 },
      { opacity: 1, x: 0, ease: "power3.out" },
      "<50%" // Starts at 50% of previous animation
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, [imagePosition]);

  const imageDiv = (
    <div
      className={`cocktail-image w-full border-2 border-black/20 ${
        imagePosition === "left" ? "rounded-r-full pl-0" : "rounded-l-full pr-0"
      } h-[200px] md:h-[300px] p-2 overflow-hidden`}
    >
      <div
        className={`relative w-full ${
          imagePosition === "left" ? "rounded-r-full" : "rounded-l-full"
        } h-full overflow-hidden`}
      >
        <Image
          src={imageURL}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );

  const contentDiv = (
    <div className="cocktail-content w-full flex flex-col justify-center items-center h-full">
      <div className="w-full flex flex-col gap-4 items-center max-w-[300px]">
        <h4 className="font-bold text-xl font-inter uppercase">{name}</h4>
        <p className="text-black/60 uppercase">mix with</p>
        <button className="w-full rounded-full px-4 py-2 bg-black/75 text-white hover:bg-black transition-colors">
          {mixWith}
        </button>
        <p className="max-w-[200px] text-center text-sm text-black/70">
          {description}
        </p>
        <button className="w-full border-solid py-2 border-2 border-black/20 rounded-full hover:bg-black/5 transition-colors">
          shop flavor
        </button>
      </div>
    </div>
  );

  return (
    <div
      ref={rowRef}
      className={`w-full gap-3 flex ${
        imagePosition === "left"
          ? "flex-col md:flex-row"
          : "flex-col-reverse md:flex-row"
      } justify-between items-center`}
    >
      {imagePosition === "left" ? (
        <>
          {imageDiv}
          {contentDiv}
        </>
      ) : (
        <>
          {contentDiv}
          {imageDiv}
        </>
      )}
    </div>
  );
};

const Mixed: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 70%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".mixed-h3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: "power2.out" }
    ).fromTo(
      ".mixed-p",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, ease: "power2.out" },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === headerRef.current) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full min-h-screen py-16">
      <div
        ref={headerRef}
        className="w-full max-w-6xl flex flex-col items-center mx-auto px-8 mb-12"
      >
        <div className="w-fit items-center flex flex-col">
          <h3 className="uppercase mixed-h3 text-2xl font-medium font-inter mb-4">
            <span className="font-aston-script text-orange-400">d</span>rink
            better. mix avec
          </h3>
          <p className="max-w-[750px] mixed-p text-center text-black/80">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-8">
        {cocktailData.map((cocktail, index) => (
          // @ts-ignore
          <CocktailRow key={index} {...cocktail} />
        ))}
      </div>
    </section>
  );
};

export default Mixed;

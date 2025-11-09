import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Quick Link",
    links: [
      { label: "Share Location", href: "/share-location" },
      { label: "Orders Tracking", href: "/orders-tracking" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] flex justify-center bg-amber-500 px-8 py-16">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        <div className="flex flex-col w-full lg:w-fit">
          <h5 className="w-fit text-3xl lg:text-4xl max-w-[350px] uppercase font-bold">
            Subscribe to Our Newsletter
          </h5>
          <div className="relative mt-4 flex justify-center w-full max-w-md">
            <input
              placeholder="Your email"
              className="w-full bg-white/90 p-3 pr-12 rounded-full outline-none focus:bg-white transition-colors"
            />
            <button
              aria-label="Submit email"
              className="absolute right-2 inset-y-0 my-auto w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Image
                alt="submit arrow"
                width={20}
                height={20}
                src={"/arrow23.svg"}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12 w-full lg:w-auto">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4 w-fit">
              <h3 className="font-bold text-lg uppercase">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-black/70 hover:text-black transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

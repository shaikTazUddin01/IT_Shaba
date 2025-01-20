"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import branding from "../../assets/service/branding.png";
import ui from "../../assets/service/ui.png";
import grap from "../../assets/service/grap.png";
import content from "../../assets/service/content.png";
import deve from "../../assets/service/deve.png";
import mar from "../../assets/service/mar.png";
import BackTextHeader from "../shared/BackTextHeader";
import HeaderTitle from "../shared/HeaderTitle";
import CustomButton from "../shared/Button";

interface IOurServices {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}

// Array of branding sections
const OurSecvices: IOurServices[] = [
  {
    id: 1,
    title: "Branding",
    image: branding,
    description:
      "Compelling and captivating content crafted to resonate with your is and elevate your brand presence.",
  },
  {
    id: 2,
    title: "Ui/Ux Design",
    image: ui,
    description:
      "Compelling and captivating content crafted to resonate with your audience and elevate your brand presence.",
  },
  {
    id: 3,
    title: "Graphic Design",
    image: grap,
    description:
      "Compelling and captivating content crafted to resonate with your audience and elevate your brand presence.",
  },
  {
    id: 4,
    title: "Marketing",
    image: mar,
    description:
      "Compelling and captivating content crafted to resonate with your audience and elevate your brand presence.",
  },
  {
    id: 5,
    title: "Development",
    image: deve,
    description:
      "Compelling and captivating content crafted to resonate with your audience and elevate your brand presence.",
  },
  {
    id: 6,
    title: "content",
    image: content,
    description:
      "Compelling and captivating content crafted to resonate with your audience and elevate your brand presence.",
  },
];
const Service = () => {
  const [activeSection, setActiveSection] = useState(1);

  console.log(activeSection);

  return (
    <div className="py-[110px]">
      {/* header content */}
      <div className="relative pt-[110px] pb-20">
        <BackTextHeader backText="Services" />
        <div className=" flex justify-between items-center  max-w-7xl mx-auto">
          <div className="max-w-[650px] -mt-[70px]">
            <HeaderTitle
              title={"What We Offer"}
              subtitle={"top-Notch Services for you"}
              spansubTitle={"We Provide"}
            />
          </div>
          <div className="-mt-10">
            <CustomButton btnText="View All" />
          </div>
        </div>
      </div>

      {/* services */}
      <section className="">
        {OurSecvices.map((section) => (
          <div
            key={section?.id}
            className={` cursor-pointer transition-all ease-in duration-300 border-b border-white/20 ${
              activeSection == section?.id
                ? "bg-black text-white"
                : "bg-transparent text-[#6d6d6d]"
            }`}
            onMouseEnter={() => {
              setActiveSection(section?.id);
            }}
          >
            <div
              key={section?.id}
              className={`flex  gap-5 items-center relative top-0 h-[175px] justify-between max-w-7xl mx-auto `}
            >
              <h1 className="text-[44px] w-[20px] font-bold flex-1 uppercase tracking-[0.5px]">
                {section.title}
              </h1>

              <div
                className={`absolute left-[45%] transform -translate-x-1/2 transition-all duration-400 ${
                  activeSection === section.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-85"
                }`}
              >
                <Image src={section.image} alt="" className="w-[300px]" />
              </div>

              <div className="w-[37%] ">
                <p className="text-[13px] ">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Service;

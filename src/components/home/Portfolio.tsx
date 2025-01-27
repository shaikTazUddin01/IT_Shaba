"use client";
import React, { useState } from "react";
import BackTextHeader from "../shared/BackTextHeader";
import HeaderTitle from "../shared/HeaderTitle";
import webD1 from "../../assets/portfolio/webD.png";
import webD2 from "../../assets/portfolio/webD1.png";
import webD3 from "../../assets/portfolio/webD2.png";
import webD4 from "../../assets/portfolio/webD4.png";
import Image from "next/image";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All Project");

  const projects = [
    {
      title: "Cyber Security Landing Page",
      category: "Web Design",
      description: "Web Design",
      image: webD1,
    },
    {
      title: "E-Commerce App Development",
      category: "App Development",
      description: "App Design & Development",
      image: webD2,
    },
    {
      title: "E-Commerce App Development",
      category: "Graphic Design",
      description: "App Design & Development",
      image: webD3,
    },
    {
      title: "E-Commerce App Development",
      category: "Web Design",
      description: "App Design & Development",
      image: webD4,
    },
  ];

  const categories = [
    "All Project",
    "Web Design",
    "Graphic Design",
    "App Development",
  ];

  const filteredProjects =
    activeTab === "All Project"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="px-2 xl:px-0 py-[110px] overflow-hidden max-w-[1440px mx-auto]">
      {/* header content */}
      <div className="relative pt-[110px] pb-10 lg:pb-20">
        <BackTextHeader backText="Casestudy" />
        <div className=" flex flex-col lg:flex-row justify-between lg:items-center  max-w-7xl mx-auto md:gap-8 gap-0">
          <div className="md:max-w-[650px] -mt-[70px]">
            <HeaderTitle
              title={"Case Study"}
              subtitle={"Case Study Showcase"}
              spansubTitle={"Explore Our Creative"}
            />
          </div>
          <div className="z-50 mt-5 md:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3 lg:grid-cols-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`tab-button py-2 px-2 md:py-[10px] md:px-5 text-[14px]  md:text-[15px] lg:text-[18px] ${
                    activeTab === category ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            className=" text-white bg-[#000000] rounded-lg project-card"
            key={index}
          >
            <Image src={project?.image} alt={project.title} className="" />
            <div className="p-5">
              <h3 className="text-[30px] font-bold">{project.title}</h3>
              <p className="text-xm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

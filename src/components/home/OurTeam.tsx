"use client";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import HeaderTitle from "../shared/HeaderTitle";
import CustomButton from "../shared/Button";
import TeamBg from "../../assets/team-light-bg-home-2.png";
import Image from "next/image";
import team1 from "../../assets/Team/team-1-home-2.png";
import team2 from "../../assets/Team/team-2-home-2.png";
import team3 from "../../assets/Team/team-3-home-2.png";

const OurTeam = () => {
  const [hover, setHover] = useState(0);
  const TeamMembers = [
    {
      id: 1,
      name: "Savannah Nguyen",
      position: "Founder & CEO",
      image: team1,
      socialLinks: {
        facebook: "https://facebook.com/savannah",
        linkedin: "https://linkedin.com/in/savannah",
        website: "https://savannah.com",
        twitter: "https://twitter.com/savannah",
        instagram: "https://instagram.com/savannah",
      },
    },
    {
      id: 2,
      name: "John Doe",
      position: "Chief Marketing Officer",
      image: team2,
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        website: "https://johndoe.com",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    {
      id: 3,
      name: "Jane Smith",
      position: "Head of Design",
      image: team3,
      socialLinks: {
        facebook: "https://facebook.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        website: "https://janesmith.com",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
  ];

  return (
    <div className="pt-[150px] pb-[110] max-w-7xl mx-auto">
      {/* Header content */}
      <div className="relative">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="max-w-[550px] -mt-[70px]">
            <HeaderTitle
              title="Our Team"
              spansubTitle="Meet With Our"
              subtitle="Expert Team"
            />
          </div>
          <div className="-mt-10">
            <CustomButton btnText="See More" />
          </div>
        </div>
      </div>

      {/* Team members */}
      <div className="grid grid-cols-3 gap-5 py-10">
        {/* Member card */}
        {TeamMembers?.map((team, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onMouseEnter={() => setHover(team?.id)}
            onMouseLeave={() => setHover(0)}
          >
            <div className="relative z-20 mx-auto max-h-[500px]">
              <Image
                src={TeamBg}
                alt="Team background"
                className="absolute bottom-0 z-10 h-[380px] "
              />
              <Image
                src={team?.image}
                alt="Team member"
                className={`relative z-20 h-[470px] transition-all duration-300  
                ${hover === team?.id ?"filter-none": "filter grayscale" }
                  `}
              />
            </div>
            <div
              className={`transition-all duration-300  text-white w-[97%] mt-1 rounded-b-lg text-center py-5 ${
                hover === team?.id ? "bg-[var(--primaryColor)]" : "bg-[#525050]"
              }`}
            >
              <h1 className="text-xl font-medium">{team?.name}</h1>
              <p className="text-[14px]">{team?.position}</p>
              {/* Social icons */}
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span className="text-lg">
                  <FaLinkedinIn />
                </span>
                <span className="text-lg">
                  <TbWorld />
                </span>
                <span className="text-lg">
                  <FaTwitter />
                </span>
                <span className="text-lg">
                  <RiInstagramFill />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

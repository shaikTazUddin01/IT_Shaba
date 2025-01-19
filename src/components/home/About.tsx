import Image from "next/image";
import about from "../../assets/about.png";
import { FaCheckCircle } from "react-icons/fa";
import './style.css'
import CustomButton from "../shared/Button";
import HeaderTitle from "../shared/HeaderTitle";
const About = () => {
  return (
    <div className=" py-28">
      <div className=" w-full text-white grid grid-cols-2 items-center gap-[80px]">
        <div>
          <Image src={about} alt="about image" />
        </div>
        <div>
         <HeaderTitle title="Who We Are" subtitle="Creative Digital Agncy" spansubTitle="We Are"/>
          <p className="mt-5 tracking-[0.5px] font-medium leading-[25px] ">
            We are a passionate collective of creatives, designers, and
            strategists dedicated to shaping remarkable brand experiences.
          </p>
          <ul className="mt-5 text-[#6b6b6b] space-y-1 text-xl tracking-[.5px]">
            <li className="flex items-center gap-2">
              <span>
                <FaCheckCircle />
              </span>
              Unleashing digital creativity.
            </li>
            <li className="flex items-center gap-2">
              <span>
                <FaCheckCircle />
              </span>
              Crafting your brand&#39;s digital story.
            </li>
            <li className="flex items-center gap-2">
              <span>
                <FaCheckCircle />
              </span>
              Innovation meets creativity.
            </li>
          </ul>
         <CustomButton btnText="Read more"/>
        </div>
      </div>
      {/* our success */}
      <div className="grid grid-cols-4 items-center text-[#cecdcd] mt-20 gap-6 px-20">
        <div className="border border-white/20 rounded-[20px]  text-center py-6 ">
          <h1 className="text-[68px] font-extrabold text-transparent customStroke">4</h1>
          <h1 className="text-lg font-medium -mt-5">Years Of experience</h1>
        </div>
        <div className="border border-white/20 rounded-[20px] text-center py-6 ">
          <h1 className="text-[68px] font-extrabold text-transparent customStroke">50+</h1>
          <h1 className="text-lg font-medium -mt-5">Project Complect</h1>
        </div>
        <div className="border border-white/20 rounded-[20px]  min-h-28 text-center py-6 ">
          <h1 className="text-[68px] font-extrabold text-transparent customStroke">100+</h1>
          <h1 className="text-lg font-medium -mt-5">Happy Client</h1>
        </div>
        <div className="border border-white/20 rounded-[20px]  min-h-28 text-center py-6 ">
          <h1 className="text-[68px] font-extrabold text-transparent customStroke">12</h1>
          <h1 className="text-lg font-medium -mt-5">Wining Awards</h1>
        </div>
      </div>
    </div>
  );
};

export default About;

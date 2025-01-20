import Image from "next/image";
import chooseUs from "../../assets/choose.png";
import HeaderTitle from "../shared/HeaderTitle";
import { FaCheckCircle } from "react-icons/fa";
import CustomButton from "../shared/Button";

const WhyChoose = () => {
  return (
   <div className="bg-black py-[110px]">
     <div className="grid grid-cols-2 max-w-7xl mx-auto gap-20 items-center">
      <div>
        <Image src={chooseUs} alt="why chose use" />
      </div>
      <div>
        <HeaderTitle
          title="Why Choose Us"
          spansubTitle="Award Wining"
          subtitle="Digital Agence"
        />
        <p className="mt-5 tracking-[0.5px] font-medium leading-[25px] text-white">
        Discover why Procus is the right choice for your digital needs. From innovative solutions and collaborative partnerships to a proven track record and dedicated support.
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
        <CustomButton btnText="Read more" />
      </div>
    </div>
   </div>
  );
};

export default WhyChoose;

import heroBanner from "../../assets/heroBanner1.png";
import heroIcon from "../../assets/bannerIcon.png";
import Image from "next/image";
import "./style.css";

const Banner = () => {
  return (
    <div
      className=" w-full bg-center bg-cover font-spaceGrotesk "
      style={{ backgroundImage: `url(${heroBanner.src})` }}
    >
      <div className="relative min-h-[750px] flex justify-center items-center ">

      
      <div className="max-w-[720px] text-center  text-white mx-auto z-20">
        <h3 className="text-[24px] font-medium bg-gradient-to-r from-transparent to-white/20 inline-block px-8 py-2 rounded-full border mb-5 border-white/20 ">
          It Sheba Digital Agency
        </h3>
        <h1 className="text-[60px] font-bold leading-[70px] tracking-[0.7px] mb-5">
          We Are Shaping Concepts Into{" "}
          <span className="text-[var(--primaryColor)]">Digital</span>{" "}
          Innovataion
        </h1>
        <p className="px-10 text-[17px] font-spaceGrotesk tracking-[0.5px] mb-5">
          We are a passionate collective of creatives, designers, and
          strategists dedicated to shaping remarkable brand experiences.
        </p>

        {/* reach out section */}
        <div className="space-x-4 mb-12">
          <button className="text-[18px] font-medium border-[2px] border-[var(--primaryColor)] bg-[var(--primaryColor)] px-6 py-3 rounded-full ">
            Learn More
          </button>
          <button className="text-[18px] font-medium border-[2px] border-[var(--primaryColor)] bg-[var(--primaryColor)] px-6 py-3 rounded-full ">
            Contact Us
          </button>
        </div>
        {/* socal media side */}
        <div className="border border-white/10 inline-flex px-10 py-4 rounded-[12px] bg-white/10 text-xl gap-7 font-medium ">
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Linkedin</button>
          <button>Instagram</button>
        </div>
      </div>
      {/* hero icon */}
      <div className="absolute bottom-0 left-0 z-10 bannerIconAnimation">
        <Image src={heroIcon} alt="heroIcon" />
      </div>
      </div>
    </div>
  );
};

export default Banner;

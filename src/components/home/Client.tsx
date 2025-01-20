import BackTextHeader from "../shared/BackTextHeader";
import HeaderTitle from "../shared/HeaderTitle";

import upwork from "../../assets/clients/upwork-logo.png";
import zoom from "../../assets/clients/zoom-logo.png";
import trello from "../../assets/clients/trello-logo.png";
import stripe from "../../assets/clients/stripe-logo.png";
import square from "../../assets/clients/square-logo.png";
import spotify from "../../assets/clients/spotify-logo.png";
import slack from "../../assets/clients/slack-logo.png";
import Image from "next/image";
const Client = () => {
  const clients = [
    {
      id: 1,
      image: zoom,
    },
    {
      id: 2,
      image: upwork,
    },
    {
      id: 3,
      image: trello,
    },
    {
      id: 4,
      image: stripe,
    },
    {
      id: 5,
      image: stripe,
    },
    {
      id: 6,
      image: square,
    },
    {
      id: 7,
      image: spotify,
    },
    {
      id: 8,
      image: slack,
    },
  ];
  return (
    <div className="py-[110px] relative mx-auto overflow-hidden">
      {/* header */}
      <div className="relative pt-[110px] pb-20">
        <BackTextHeader backText="OurClients" />
        <div className=" flex justify-between items-center  max-w-7xl mx-auto">
          <div className="max-w-[550px] -mt-[70px]">
            <HeaderTitle
              title={"Brand Collaboration"}
              spansubTitle={"We Worked With 100+"}
              subtitle={"compaines"}
            />
          </div>
        </div>
      </div>
      {/* our clients */}
      <div className="max-w-7xl mx-auto flex gap-8 flex-wrap justify-between  items-center">
        {clients?.map((item) => {
          return (
            <div key={item?.id} className="border border-white/50 rounded-md h-[240px] w-[290px] flex justify-center items-center transition-all duration-300 cursor-pointer hover:border-[var(--primaryColor)]">
              <Image src={item?.image} alt="clients"  />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Client;

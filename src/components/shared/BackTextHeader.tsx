import React from "react";


const BackTextHeader = ({
  backText,
 
}: {
  backText: string;
}) => {
  return (
    <div className="absolute text-center overflow-hidden left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[1440px] mx-auto">
      <h1
        className="uppercase text-center font-extrabold text-[#5e5d5d33]"
        style={{
          fontSize: "21vw",
        }}
      >
        {backText}
      </h1>
    </div>
  );
};

export default BackTextHeader;

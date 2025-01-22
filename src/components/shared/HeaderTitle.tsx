import React from "react";

const HeaderTitle = ({title,subtitle,spansubTitle}:{title:string;subtitle:string;spansubTitle:string}) => {
  return (
    <div className="text-white">
      <h5 className="text-[var(--primaryColor)] border border-[var(--primaryColor)] rounded-full px-4 py-1 inline-block">
        {title}
      </h5>
      <h1 className="text-[40px] md:text-[52px] font-extrabold  tracking-[0.9px] leading-[45px] md:leading-[57px] mt-[20px]">
        <span className="text-[#6b6b6b] ">{spansubTitle} </span> {subtitle}
      </h1>
    </div>
  );
};

export default HeaderTitle;

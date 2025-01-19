import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const CustomButton = ({btnText}:{btnText:string}) => {
    return (
        <button className="text-[18px] font-medium border-[2px] border-[var(--primaryColor)] bg-[var(--primaryColor)] px-6 py-2 rounded-full mt-10 flex items-end gap-2 text-white">
            {btnText}
            <span className="text-2xl">
              <MdOutlineArrowOutward />
            </span>
          </button>
    );
};

export default CustomButton;
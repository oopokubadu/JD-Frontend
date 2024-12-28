import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Leaf } from "../../../assets";

const CallToAction = () => {
  return (
    <div>
      <div className="px-8 py-10 overflow-hidden lg:px-24 border-2 border-opacity-50 border-[#E9D7D5] md:py-20 bg-[#FFF4F8]  rounded-lg">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-nowrap inline-flex gap-x-2 mx-auto text-base font-semibold text-[#3C072E] bg-[#DCFFDC] rounded-full px-2.5 py-2">
            <img src={Leaf} alt="" /> ORGANIC
          </span>
          <h2 className="text-4xl font-custom mt-8 text-[#3C072E] sm:text-4xl lg:text-5xl ">
            Pop, fizz, feel the bliss! 🌟
          </h2>
        </div>

        <p className="max-w-sm text-center font-medium mx-auto mt-10 text-base  text-[#3C072E]">
          Family-crafted juice blends that make your taste buds dance and your
          body sing
        </p>

        <div className="mt-6 group text-center">
          <button className=" inline-flex items-center gap-x-2  group-hover:bg-[#3C072E] py-2 px-3 bg-[#FFF4F8] border-2 border-[#3C072E] rounded-full ">
            <p className=" text-[#3C072E] group-hover:text-white font-custom italic text-base">
              Find your flavor!
            </p>
            <FaCircleArrowRight className="text-2xl group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

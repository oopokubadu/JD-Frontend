import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6';
import { Juice } from '../../../assets';

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  pt-16 mx-auto">
        <div className="max-w-xl mb-8 mx-auto text-center">
          <h2 className="md:relative mb-6 text-5xl font-custom font-normal leading-none tracking-tight text-[#3C072E] sm:text-6xl lg:text-7xl md:mx-auto">
            Nature's Party in a Bottle!{" "}
            <button className=" md:absolute md:bottom-2 md:right-8 inline-flex items-center gap-x-2 py-1.5 px-3 bg-[#FFF4F8] border-2 border-[#3C072E] rounded-full ">
              <p className=" text-[#3C072E] font-custom italic text-sm">
                Find&nbsp;&nbsp;&nbsp;&nbsp;your&nbsp;&nbsp;&nbsp;&nbsp;flavor!
              </p>
              <FaCircleArrowRight className="text-2xl" />
            </button>
          </h2>
          <p className=" lg:max-w-lg text-base text-[#3C072E] font-semibold md:text-lg">
            Family-crafted juice blends that make your taste buds dance and your
            body <span className="font-custom italic">sing</span>
          </p>
        </div>
        <div className="hidden lg:block relative">
          <span className="absolute top-[5rem] left-[13rem] text-nowrap rotate-[25deg] text-xs font-medium text-[#3C072E] bg-[#E9D7D5] rounded-full px-2.5 py-2">
            NO SUGAR ADDED
          </span>

          <span className="absolute top-[1.5rem] right-[8rem] text-nowrap rotate-[-30deg] text-xs font-medium text-[#3C072E] bg-[#EDDCFF]  rounded-full px-2.5 py-1">
            ORGANIC
          </span>

          <span className="absolute bottom-[7rem] right-[12rem] text-nowrap rotate-[-15deg] text-xs font-medium text-[#3C072E] bg-[#FDD174] rounded-full px-2.5 py-1">
            {" "}
            PURE FRUIT
          </span>
        </div>

        <img
          src={Juice}
          className="w-full mx-auto md:w-auto md:max-w-sm"
          alt=""
        />
      </div>
      <hr className="border-[1.5px] border-[#FE9FD9]" />
    </div>
  );
}

export default Hero
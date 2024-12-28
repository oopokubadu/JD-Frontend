import React from "react";
import { Juice } from "../../assets";
import { FaCircleArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  pt-16 mx-auto">
        <div className="max-w-xl mb-8 mx-auto text-center">
          <h2 className="mb-6 text-5xl font-custom font-normal leading-none tracking-tight text-[#3C072E] sm:text-6xl lg:text-7xl md:mx-auto">
            Nature's Party in a Bottle!{" "}
            <span className=" inline-flex items-center gap-x-2 p-2 bg-[#FFF4F8] border-2 border-[#3C072E] rounded-full ">
              <p className=" text-[#3C072E] text-sm">Find your flavor!</p>
              <FaCircleArrowRight className="text-2xl" />
            </span>
          </h2>
          <p className="text-base text-[#3C072E] font-medium md:text-lg">
            Family-crafted juice blends that make your taste buds dance and your
            body <span className="font-custom italic">sing</span>
          </p>
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
};

export default Home;

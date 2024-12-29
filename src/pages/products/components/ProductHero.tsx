import React from "react";


const ProductHero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  pt-16 mx-auto">
        <div className="max-w-xl xl:max-w-3xl mb-8 mx-auto text-center">
          <h2 className=" mb-6 text-5xl font-custom  leading-none tracking-tight text-[#3C072E] sm:text-6xl lg:text-7xl xl:text-8xl md:mx-auto">
            We’ve got every possible flavour! cap.
          </h2>
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
      </div>
      <hr className="border-[1.5px] border-[#FE9FD9]" />
    </div>
  );
};

export default ProductHero;

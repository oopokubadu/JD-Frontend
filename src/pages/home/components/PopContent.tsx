import { JuicePop } from "../../../assets";

const PopContent = () => {
  return (
    <section className="py-16 ">
      <div className="">
        <div className="grid  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="lg:order-2">
            <div className="grid gap-4 px-8 rounded-3xl place-items-end sm:px-16 ">
              <img className="w-full" src={JuicePop} alt="" />
            </div>
          </div>

          <div className="lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl font-custom  tracking-tight text-[#3C072E]  md:text-5xl">
              Pop, fizz, feel the bliss! 🌟
            </h2>

            <h2 className="mt-8 text-2xl font-custom  tracking-tight text-[#3C072E]">
              Your daily dose of groove & goodness
            </h2>
            <p className="mt-2 text-base font-medium text-[#3C072E]  ">
              Packed with nature's superstar ingredients to keep your awesome
              self dancing through the day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopContent;

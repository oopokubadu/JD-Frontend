import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Leaf, Logo, Testimonial1 } from "../../../assets";

const Testimonial = () => {
  const contentData = [
    {
      content:
        "I bought two packs of JD fruit juice and finished it in 4 days. Straight up better than blueskies!",
    },
  ];
  return (
    <div>
      <div className="mx-auto mt-12 ">
        <Swiper
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-once="true"
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {contentData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="grid  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
                <div className="lg:order-2">
                  <div className="grid gap-4 px-8 rounded-3xl place-items-end sm:px-16 ">
                    <img className="w-full" src={Testimonial1} alt="" />
                  </div>
                </div>

                <div className="lg:order-1 text-center lg:text-left">
                  <span className="text-nowrap inline-flex gap-x-2 mx-auto text-base font-semibold text-[#3C072E] bg-[#DCFFDC] rounded-full px-2.5 py-2">
                    <img src={Leaf} alt="" /> ORGANIC
                  </span>

                  <h2 className="mt-8 text-3xl font-custom font-bold  tracking-tight leading-10 text-[#3C072E]">
                    {data.content}
                  </h2>
                  <span className="text-nowrap mt-8 inline-flex items-center gap-x-2 mx-auto text-sm text-[#3C072E]">
                    <img src={Logo} className="w-8 h-8 rounded-full" alt="" /> Jordan Opoku
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

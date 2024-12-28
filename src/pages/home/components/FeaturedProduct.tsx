import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedProduct = () => {
  const productData = [
    {
      name: "StarPine flavour",
      bgcolor: "#F9BE36",
      price: "17.00",
    },
    {
      name: "StarPine flavour",
      bgcolor: "#FE9FD9",
      price: "18.00",
    },
    {
      name: "StarPine flavour",
      bgcolor: "#497CD5",
      price: "14.00",
    },

    {
      name: "StarPine flavour",
      bgcolor: "#EDDCFF",
      price: "12.00",
    },
  ];
  return (
    <div className="mt-14">
      <div className="text-center  lg:text-left lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-custom font-bold text-[#3C072E]">
          The OGs of Awesome
        </h2>
        <div className="text-center lg:text-right">
          <p className="max-w-xs tr mx-auto mt-4 text-sm font-custom font-medium italic text-[#3C072E] lg:mx-0 lg:mt-0">
            Our tried-and-true favorites that never go out of style. Pure,
            simple, and absolutely delicious.
          </p>
          <button className=" inline-flex items-center text-sm mt-2 gap-x-2 py-1.5 px-3 bg-[#FFF4F8] font-custom italic border-2 border-[#3C072E] rounded-full ">
            View all flavours
          </button>
        </div>
      </div>

      <div className="mx-auto  gap-5 mt-12 justify-center  text-center sm:mt-16 ">
        <Swiper
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-once="true"
          spaceBetween={20}
          loop={true}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {productData.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col rounded-lg"
                style={{ backgroundColor: `${data.bgcolor}` }}
              >
                <div className="flex-shrink-0">
                  <img
                    className="object-contain mx-auto mix-blend-multiply"
                    src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/10/product-1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center flex-1 p-3">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center  py-2  text-lg italic font-custom font-bold text-[#3C072E] transition-all duration-200 bg-white rounded-md  focus:outline-none"
                  >
                    {data.name}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProduct;

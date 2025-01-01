import React, { useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { useListAllItemsQuery } from "../../../services/product-service";
import Loader1 from "../../../components/Loader1";
import ViewProduct from "../../products/components/ViewProduct";

const FeaturedProduct = () => {
  const [OpenViewProduct, setOpenViewProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: response, isLoading } = useListAllItemsQuery();
  const productItems = response;

  const [quantity, setQuantity] = useState<number[]>([]);

  useEffect(() => {
    if (productItems) {
      setQuantity(Array(productItems.length).fill(1));
    }
  }, [productItems]);

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleIncrement = (index: number) => {
    setQuantity((prev) => {
      const updated = [...prev];
      updated[index]++;
      return updated;
    });
  };

  const handleDecrement = (index: number) => {
    setQuantity((prev) => {
      const updated = [...prev];
      updated[index] = Math.max(0, updated[index] - 1);
      return updated;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = Math.max(0, Number(e.target.value));
    setQuantity((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleAddToCart = (index: number) => {
    setVisibleIndex(index);
  };

  const handleViewDetails = (item: any) => {
    setSelectedProduct(item);
    setOpenViewProduct(true);
  };

  if (isLoading) return <Loader1 numLoaders={3} />;

  return (
    <>
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
            <div className="group">
              <button className=" inline-flex items-center text-sm mt-2 gap-x-2 py-1.5 px-3 bg-[#FFF4F8] group-hover:bg-[#3C072E] group-hover:text-white font-custom italic border-2 border-[#3C072E] rounded-full ">
                View all flavours
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 ">
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
            modules={[Navigation, Autoplay]}
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
              1920: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            {productItems?.map((data, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleViewDetails(data)}
                  className="cursor-pointer"
                >
                  <div
                    className="flex flex-col rounded-lg h-[460px]"
                    style={{
                      backgroundImage: `url(${data.item_image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute right-3 top-3">
                        <p className=" px-1.5 py-1 inline-flex gap-x-1 text-[8px] sm:text-xs font-bold tracking-wide text-[#3C072E] uppercase bg-white rounded-full">
                          <FaStar className="text-[#F9BE36]" /> {data.item_type}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center flex-1 p-3">
                      <button
                        onClick={() => handleViewDetails(data)}
                        type="button"
                        className="mt-auto inline-flex w-full items-center justify-center  py-2  text-lg italic font-custom font-bold text-[#3C072E] transition-all duration-200 bg-white rounded-md  focus:outline-none"
                      >
                        {data.item_name}
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-2 justify-between">
                    <div>
                      <p className="text-xs text-[#3C072E] ">GHS</p>
                      <p className="text-lg font-custom text-[#3C072E] ">
                        {data.item_price[0].amount}.00
                      </p>
                    </div>
                    <div className="group">
                      {visibleIndex !== index ? (
                        <button
                          onClick={() => handleAddToCart(index)}
                          className=" inline-flex items-center text-sm  gap-x-2 py-1.5 px-3 bg-[#FFF4F8] group-hover:bg-[#3C072E] group-hover:text-white border-2 border-[#3C072E] rounded-lg "
                        >
                          Add to cart{" "}
                          <svg
                            className="fill-[#3C072E] group-hover:fill-white"
                            width="18"
                            height="21"
                            viewBox="0 0 18 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.875 3.12499V5.87499H2.1875C1.64049 5.87499 1.11589 6.09229 0.729092 6.47908C0.342299 6.86588 0.125 7.39048 0.125 7.93749V16.875C0.125 17.6043 0.414731 18.3038 0.930456 18.8195C1.44618 19.3353 2.14565 19.625 2.875 19.625H5.97837C4.95401 18.3842 4.35209 16.849 4.26012 15.2426C4.16816 13.6362 4.59094 12.0424 5.46701 10.6928C6.34308 9.34318 7.62677 8.30817 9.13146 7.73822C10.6361 7.16827 12.2834 7.09309 13.8338 7.52362C13.7384 7.05801 13.4851 6.63962 13.1168 6.33922C12.7485 6.03882 12.2878 5.87483 11.8125 5.87499H11.125V3.12499C11.125 2.64227 10.9979 2.16806 10.7565 1.75002C10.5152 1.33197 10.168 0.984828 9.74997 0.743474C9.33192 0.502119 8.8577 0.375058 8.37498 0.375061C7.89226 0.375064 7.41805 0.502131 7 0.743491C6.58195 0.502131 6.10774 0.375064 5.62502 0.375061C5.1423 0.375058 4.66808 0.502119 4.25003 0.743474C3.83198 0.984828 3.48482 1.33197 3.24346 1.75002C3.00209 2.16806 2.87501 2.64227 2.875 3.12499ZM9.75 5.87499H8.375V3.12499C8.375 2.64237 8.25125 2.18724 8.03125 1.79262C8.23448 1.7407 8.44688 1.73587 8.65226 1.7785C8.85764 1.82113 9.05058 1.9101 9.21636 2.03861C9.38214 2.16712 9.51639 2.33179 9.60887 2.52006C9.70135 2.70833 9.74962 2.91523 9.75 3.12499V5.87499ZM7 5.87499H4.25V3.12499C4.25 2.76032 4.39487 2.41058 4.65273 2.15272C4.91059 1.89486 5.26033 1.74999 5.625 1.74999C5.98967 1.74999 6.33941 1.89486 6.59727 2.15272C6.85513 2.41058 7 2.76032 7 3.12499V5.87499ZM18 14.8125C18 16.4535 17.3481 18.0273 16.1877 19.1877C15.0273 20.3481 13.4535 21 11.8125 21C10.1715 21 8.59766 20.3481 7.43728 19.1877C6.2769 18.0273 5.625 16.4535 5.625 14.8125C5.625 13.1715 6.2769 11.5976 7.43728 10.4373C8.59766 9.27689 10.1715 8.62499 11.8125 8.62499C13.4535 8.62499 15.0273 9.27689 16.1877 10.4373C17.3481 11.5976 18 13.1715 18 14.8125ZM12.5 12.0625C12.5 11.8802 12.4276 11.7053 12.2986 11.5764C12.1697 11.4474 11.9948 11.375 11.8125 11.375C11.6302 11.375 11.4553 11.4474 11.3264 11.5764C11.1974 11.7053 11.125 11.8802 11.125 12.0625V14.125H9.0625C8.88016 14.125 8.70529 14.1974 8.57636 14.3264C8.44743 14.4553 8.375 14.6302 8.375 14.8125C8.375 14.9948 8.44743 15.1697 8.57636 15.2986C8.70529 15.4276 8.88016 15.5 9.0625 15.5H11.125V17.5625C11.125 17.7448 11.1974 17.9197 11.3264 18.0486C11.4553 18.1776 11.6302 18.25 11.8125 18.25C11.9948 18.25 12.1697 18.1776 12.2986 18.0486C12.4276 17.9197 12.5 17.7448 12.5 17.5625V15.5H14.5625C14.7448 15.5 14.9197 15.4276 15.0486 15.2986C15.1776 15.1697 15.25 14.9948 15.25 14.8125C15.25 14.6302 15.1776 14.4553 15.0486 14.3264C14.9197 14.1974 14.7448 14.125 14.5625 14.125H12.5V12.0625Z" />
                          </svg>
                        </button>
                      ) : (
                        <div className="py-2 px-3 inline-block bg-[#FFF4F8] rounded-lg">
                          <div className="flex items-center gap-x-1.5">
                            <button
                              type="button"
                              onClick={() => handleDecrement(index)}
                              className="size-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                              disabled={quantity[index] <= 0}
                            >
                              <FaMinus className="shrink-0 size-3.5" />
                            </button>
                            <input
                              type="number"
                              value={quantity[index]}
                              onChange={(e) => handleInputChange(e, index)}
                              className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                            <button
                              type="button"
                              onClick={() => handleIncrement(index)}
                              className="size-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <FaPlus className="shrink-0 size-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ViewProduct
        open={OpenViewProduct}
        onClose={() => setOpenViewProduct(false)}
        product={selectedProduct}
      />
    </>
  );
};

export default FeaturedProduct;

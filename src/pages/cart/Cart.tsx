import { useState } from "react";
import { VisaMasterCard } from "../../assets";
import AuthMessage from "../auth/utils/AuthMessage";

const Cart = () => {
  const [token] = useState(sessionStorage.getItem("access_token"));
  return (
    <div>
      {token ? (
        <section className="py-12 sm:py-16 ">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 lg:items-start xl:grid-cols-6 gap-y-10 lg:gap-x-12 xl:gap-x-16">
                <div className="lg:col-span-3 xl:col-span-4">
                  <div>
                    <h1 className="text-4xl font-custom  text-[#3C072E]">
                      Cart (4)
                    </h1>
                  </div>

                  <hr className="mt-6 border-[#E9D7D5]" />

                  <div className="flow-root mt-7">
                    <ul className="divide-y divide-gray-200 -my-7">
                      <li className="flex py-7">
                        <div className="flex-shrink-0">
                          <img
                            className="object-cover  rounded-lg"
                            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png"
                            alt=""
                          />
                        </div>

                        <div className="flex-1 ml-5">
                          <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-5">
                            <div className="pr-9 sm:pr-5">
                              <p className="text-base font-bold text-gray-900">
                                Apple Watch Series 7 - 44mm
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                Golden
                              </p>
                              <p className="mt-2 text-base font-semibold text-gray-500">
                                $259.00
                              </p>
                            </div>

                            <div className="flex items-end justify-between mt-3 sm:justify-end sm:pr-14 sm:items-start sm:mt-0">
                              <div className="absolute top-0 right-0 flex">
                                <button
                                  type="button"
                                  className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:sticky lg:top-6 lg:mt-14">
                  <div className="overflow-hidden rounded bg-[#FFF4F8]">
                    <div className="px-4 py-6 sm:p-6 lg:p-8">
                      <div className="flow-root">
                        <div className="-my-5 divide-y divide-gray-200">
                          <div className="flex items-center justify-between py-5">
                            <p className="text-2xl font-custom font-medium text-[#3C072E]">
                              Cart total
                            </p>
                          </div>

                          <div className="flex items-center justify-between py-5">
                            <p className="text-sm font-medium text-gray-900">
                              Total
                            </p>
                            <p className="text-lg font-bold text-right text-gray-900">
                              GHS 599.00
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full px-6 py-4 text-sm text-white transition-all duration-200 bg-[#3C072E] border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded mt-4 bg-white">
                    <div className="p-4">
                      <div className="flow-root">
                        <div className="flex items-center justify-between py-1">
                          <p className="text-xl font-bold text-[#3C072E]">
                            Pay with
                          </p>
                        </div>

                        <img className="w-36" src={VisaMasterCard} alt="" />
                      </div>
                      <div className="flow-root">
                        <div className="flex items-center justify-between py-1">
                          <p className="text-lg font-bold text-[#3C072E]">
                            Buyer protection
                          </p>
                        </div>

                        <p className="text-sm font-medium text-[#3C072E]">
                          Get a full refund if the item is not as described or
                          not delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          {" "}
          <AuthMessage />{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;

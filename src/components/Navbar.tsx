import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";
import { Logo } from "../assets";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", url: "/home" },
  { name: "About Us", url: "/about-us" },
  { name: "Products", url: "/products" },
  { name: "Blog", url: "/blog" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#FFFAFE] fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="max-w-[85rem] xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img alt="" src={Logo} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <HiMiniBars3 aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.url}
              className={({ isActive }) =>
                `relative group text-sm p-3 hover:font-semibold hover:bg-[#3c072e0c] text-[#3C072E]  ${
                  isActive ? "font-semibold  border-b-2 border-[#3C072E]" : ""
                }`
              }
            >
              {item.name}
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-[#3C072E] group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-x-2 lg:justify-end">
          <p className="text-sm p-3 font-semibold  text-[#3C072E]">Cart(2)</p>
          <a
            href="#"
            className="text-sm p-3 hover:font-semibold hover:bg-[#3c072e0c] text-[#3C072E]"
          >
            Sign in
          </a>
          <button className="rounded-full font-custom font-light bg-[#3C072E] py-2 px-3 text-sm  text-white italic ">
            Sign up
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FFFAFE] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img alt="" src={Logo} className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <MdClose aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#3c072e0c] text-[#3C072E]"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;

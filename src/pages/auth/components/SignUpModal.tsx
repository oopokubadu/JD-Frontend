import React from "react";
import { Modal } from "../../../components/Modal";

const SignUpModal = ({ open, onClose }) => {
  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Welcome to JD!">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Join us to make your order seamless!
        </p>

        <form className="mt-10">
          <div>
            <label className="block mb-2 text-gray-700 text-xs">Name</label>
            <input
              type="text"
              name="name"
              className=" block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
            />
          </div>
          <div className="mt-8">
            <label className="block mb-2 text-gray-700 text-xs">Email*</label>
            <input
              type="text"
              name="name"
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-8">
            <label className="mb-2 block text-gray-700 text-xs">
              Phone number*
            </label>
            <input
              type="text"
              name="name"
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-8">
            <label className="mb-2 block text-gray-700 text-xs">Address*</label>
            <input
              type="text"
              name="name"
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <button className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full">
            Sign up
          </button>
          <p className="text-center pt-4 text-[#497CD5] font-medium">
            Already have an account? Sign in
          </p>
        </form>
      </Modal>
    </>
  );
};

export default SignUpModal;

import React from "react";
import { Modal } from "../../../components/Modal";

const SignInModal = ({ open, onClose }) => {
  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Welcome back">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Enter your email address and password to sign in.
        </p>

        <form className="mt-10">
          <div className="mt-8">
            <label className="block mb-2 text-gray-700 text-xs">Email*</label>
            <input
              type="email"
              name="email"
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-8">
            <label className="mb-2 block text-gray-700 text-xs">
              Password*
            </label>
            <input
              type="password"
              name="password"
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>

          <button className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full">
            Sign in
          </button>
          <p className="text-center pt-4 text-[#497CD5] font-medium">
            New here? Sign up
          </p>
        </form>
      </Modal>
    </>
  );
};

export default SignInModal;

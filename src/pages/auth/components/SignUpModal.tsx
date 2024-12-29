import React, { ChangeEvent, useState } from "react";
import { Modal } from "../../../components/Modal";
import {
  useSendOTPMutation,
  useSignUpMutation,
} from "../../../services/auth-service";
import toast from "react-hot-toast";

const SignUpModal = ({ open, onClose, onSwitchToSignIn, onSignUpSuccess }) => {
  const initialFormData = {
    "full name": "",
    email: "",
    phone: "",
    address: "",
    password: "",
    "confirm password": "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [userSignUp, { isLoading }] = useSignUpMutation();
  const [sendOTP, { isLoading: isSendingOTP }] = useSendOTPMutation();

  const handleFormChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await userSignUp(formDataToSend).unwrap();
      console.log("SignUp successful", response);
      toast.success("Sign Up Successful");

      const emailToSend = new FormData();
      emailToSend.append("email", formData.email);

      await sendOTP(emailToSend).unwrap();
      console.log("OTP sent successfully!");

      setFormData(initialFormData);

      onClose(); // Close the modal on success
      onSignUpSuccess(formData.email);
    } catch (err: any) {
      console.error("Error signing up:", err);
      toast.error(err.data.error || "Failed to sign up. Please try again.");
    }
  };

  const handleSwitchToSignIn = () => {
    onClose(); // Close SignUpModal
    onSwitchToSignIn(); // Open SignInModal
  };

  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Welcome to JD!">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Join us to make your order seamless!
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label className="block mb-2 text-gray-700 text-xs">
              Full Name
            </label>
            <input
              type="text"
              name="full name"
              onChange={handleFormChanged}
              className=" block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
            />
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-gray-700 text-xs">Email*</label>
            <input
              type="email"
              name="email"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-gray-700 text-xs">
              Phone number*
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-gray-700 text-xs">Address*</label>
            <input
              type="text"
              name="address"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-gray-700 text-xs">
              Password*
            </label>
            <input
              type="password"
              name="password"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-gray-700 text-xs">
              Confirm Password*
            </label>
            <input
              type="password"
              name="confirm password"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full"
          >
            {isLoading || isSendingOTP ? "Processing..." : "Sign up"}
          </button>
          <button
            onClick={handleSwitchToSignIn}
            className="w-full text-center inline-flex justify-center pt-4 text-[#497CD5] font-medium"
          >
            Already have an account? Sign in
          </button>
        </form>
      </Modal>
    </>
  );
};

export default SignUpModal;

import React, { ChangeEvent, useState } from "react";
import { Modal } from "../../../components/Modal";
import {
  useSendOTPMutation,
} from "../../../services/auth-service";
import toast from "react-hot-toast";

const SignUpFirstModal = ({
  open,
  onClose,
  onSwitchToSignIn,
  onSignUpSuccess,
}) => {
  const initialFormData = {
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
      const emailToSend = new FormData();
      emailToSend.append("email", formData.email);

      await sendOTP(emailToSend).unwrap();
      console.log("OTP sent successfully!");
      toast.success("Sign Up Successful");

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

        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <label className="block mb-2 text-gray-700 text-xs">Email*</label>
            <input
              type="email"
              name="email"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSendingOTP}
            className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full"
          >
            {isSendingOTP ? "Signing Up..." : "Sign up"}
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

export default SignUpFirstModal;

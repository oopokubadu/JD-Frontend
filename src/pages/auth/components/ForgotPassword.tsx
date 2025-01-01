import React, { ChangeEvent, useState } from "react";
import { Modal } from "../../../components/Modal";
import { useSendOTPMutation } from "../../../services/auth-service";
import toast from "react-hot-toast";

const ForgotPassword = ({ open, onClose, onForgetPasswordSuccess }) => {
  const initialFormData = {
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [userSignIn, { isLoading }] = useSendOTPMutation();

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
      const response = await userSignIn(formDataToSend).unwrap();
      console.log("OTP Sent successful", response);
      toast.success("OTP Sent");

      setFormData(initialFormData);
      onClose(); // Close the modal on success
      onForgetPasswordSuccess(formData.email);
    } catch (err: any) {
      console.error("Error sending otp:", err);
      toast.error(err.data.error || "Failed to send otp. Please try again.");
    }
  };

  return (
    <>
      <Modal
        modalSize="sm:max-w-md lg:max-w-xl"
        isOpen={open}
        onClose={onClose}
        title="Forgot password"
      >
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Enter your email address to receive an otp.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
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
            className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full"
          >
            {isLoading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ForgotPassword;

import React, { ChangeEvent, useState } from "react";
import { Modal } from "../../../components/Modal";
import { useSendOTPMutation } from "../../../services/auth-service";
import toast from "react-hot-toast";

const ResetPassword = ({ open, onClose, email, showMessage }) => {
  const initialFormData = {
    email: "",
    password: "",
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
   
    } catch (err: any) {
      console.error("Error sending otp:", err);
      toast.error(err.data.error || "Failed to send otp. Please try again.");
    }
  };

  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Set your password">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Enter a secure password so no one else can have access to your
          account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label className="block mb-2 text-gray-700 text-xs">
              New Password*
            </label>
            <input
              type="password"
              name="password"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full"
          >
            {isLoading ? "Resetting..." : "Reset"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ResetPassword;

import React, { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "../../../components/Modal";
import { useSignUpMutation } from "../../../services/auth-service";
import toast from "react-hot-toast";

const SignUpSecondModal = ({
  open,
  onClose,
  email,
  showMessage,
}) => {
  const initialFormData = {
    "full name": "",
    email: email,
    phone: "",
    address: "",
    password: "",
    "confirm password": "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [userSignUp, { isLoading }] = useSignUpMutation();

  const handleFormChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, email }));
  }, [email]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await userSignUp(formDataToSend).unwrap();
      console.log("SignUp successful", response);
      showMessage("Sign up complete!");

      setFormData(initialFormData);

      onClose();
    
    } catch (err: any) {
      console.error("Error signing up:", err);
      toast.error(err.data.error || "Failed to sign up. Please try again.");
    }
  };

  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Wrapping up!">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Enter your info and a secure password so no one else can have access
          to your account.
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
          <div className="mt-7">
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
          <div className="mt-7">
            <label className="mb-2 block text-gray-700 text-xs">Address*</label>
            <input
              type="text"
              name="address"
              onChange={handleFormChanged}
              className="block w-full border-b border-gray-300 bg-transparent text-sm focus:outline-none"
              required
            />
          </div>
          <div className="mt-7">
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
          <div className="mt-7">
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
            {isLoading ? "Registering..." : "Done"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default SignUpSecondModal;

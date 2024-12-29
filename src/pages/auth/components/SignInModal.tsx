import React, { ChangeEvent, useState } from "react";
import { Modal } from "../../../components/Modal";
import { useSignInMutation } from "../../../services/auth-service";
import toast from "react-hot-toast";

const SignInModal = ({
  open,
  onClose,
  onSwitchToSignUp,
  openForgotPassword,
}) => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [userSignIn, { isLoading }] = useSignInMutation();

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
      console.log("SignIn successful", response);
      sessionStorage.setItem("access_token", response.access_token);
      toast.success("Sign In Successful");

      setFormData(initialFormData);
      onClose(); // Close the modal on success
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err: any) {
      console.error("Error signing up:", err);
      toast.error(err.data.error || "Failed to sign up. Please try again.");
    }
  };

  const handleSwitchToSignUp = () => {
    onClose(); // Close SignInModal
    onSwitchToSignUp(); // Open SignUpModal
  };

  const handleSwitchToForgetPassword = () => {
    onClose(); // Close SignUpModal
    openForgotPassword(); // Open SignInModal
  };
  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Welcome back">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          Enter your email address and password to sign in.
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
          <button
            onClick={handleSwitchToForgetPassword}
            className="text-sm pt-4 text-[#497CD5] font-medium"
          >
            Forgot password
          </button>

          <button
            type="submit"
            className="w-full  inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
          <button
            onClick={handleSwitchToSignUp}
            className="w-full text-center inline-flex justify-center pt-4 text-[#497CD5] font-medium"
          >
            New here? Sign up
          </button>
        </form>
      </Modal>
    </>
  );
};

export default SignInModal;

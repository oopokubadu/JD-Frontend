import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Modal } from "../../../components/Modal";
import {
  useSendOTPMutation,
  useVerifyOTPMutation,
} from "../../../services/auth-service";
import toast from "react-hot-toast";

const SignUpConfirmOTPModal = ({
  open,
  onClose,
  email,
  onConfirmOtpSignUpSuccess,
}) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(4).fill(""));
  const [timer, setTimer] = useState(60); // Timer for 1 minute
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isResendDisabled) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsResendDisabled(false); // Enable resend button
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isResendDisabled]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    const index = parseInt(name.split("-")[1]);

    if (value.match(/^[0-9]$/) || value === "") {
      setOtpValues((prevOtpValues) => {
        const newOtpValues = [...prevOtpValues];
        newOtpValues[index] = value;
        return newOtpValues;
      });

      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const [userVerify, { isLoading, isError, error }] = useVerifyOTPMutation();
  const [sendOTP, { isLoading: isSendingOTP }] = useSendOTPMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = otpValues.join(""); // Combine OTP values into a single string
    if (otp.length !== 4) {
      toast.error("Please enter the complete 6-digit OTP.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otp);

      const response = await userVerify(formData).unwrap();
      toast.success("OTP verified successfully");
      console.log("OTP verified successfully:", response);
      setOtpValues(["", "", "", ""]); // Reset OTP values
      // Reset email if needed
      onClose();
      onConfirmOtpSignUpSuccess(email);
    } catch (err: any) {
      console.error("Error verifying OTP:", err);
      toast.error(err.data.error || "Failed to verify OTP. Please try again.");
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();

    setIsResendDisabled(true);
    setTimer(60); // Reset timer to 1 minute

    try {
      const emailToSend = new FormData();
      emailToSend.append("email", email);
      await sendOTP(emailToSend).unwrap();
      toast.success("OTP has been resent!");
    } catch (error) {
      console.error("SignUp failed:", error);
    }

    // Add API call to resend OTP here if applicable
  };

  return (
    <>
      <Modal isOpen={open} onClose={onClose} title="Enter OTP">
        <p className="mt-4 font-custom text-[#3C072E] italic">
          A One time PIN has been sent to {email}. Enter it below to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label className="block mb-2 text-gray-700 text-xs">OTP*</label>
            <div className="flex flex-row items-center justify-between mx-auto w-full">
              {[...Array(4)].map((_, index) => (
                <div className="mx-3" key={index}>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-full flex flex-col items-center justify-center text-center outline-none border-b-2 border-[#3C072E] text-lg "
                    type="text"
                    name={`value-${index}`}
                    maxLength={1}
                    onChange={handleInputChange}
                    value={otpValues[index]}
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex justify-center items-center text-base mt-8 gap-x-2 py-4 bg-[#3C072E] text-white rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
          <button
            type="button"
            onClick={handleResendOTP}
            className="w-full text-center inline-flex justify-center pt-4 text-[#497CD5] font-medium"
            disabled={isResendDisabled}
          >
            {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default SignUpConfirmOTPModal;

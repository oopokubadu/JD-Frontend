import React, { createContext, useContext, useState } from "react";

interface ModalStateContextType {
  OpenSignUpFirstModal: boolean;
  setOpenSignUpFirstModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenSignUpSecondModal: boolean;
  setOpenSignUpSecondModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenSignInModal: boolean;
  setOpenSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenMessageModal: boolean;
  setOpenMessageModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenSignUpConfirmOTPModal: boolean;
  setOpenSignUpConfirmOTPModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenPasswordConfirmOTPModal: boolean;
  setOpenPasswordConfirmOTPModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenForgotPasswordModal: boolean;
  setOpenForgotPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
  OpenResetPassword: boolean;
  setOpenResetPassword: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  emailForOTP: string;
  setEmailForOTP: React.Dispatch<React.SetStateAction<string>>;
  handleFirstSignUp: () => void;
  handleSignIn: () => void;
  handleForgotPassword: () => void;
  handleSignUpSuccess: (email: any) => void;
  handleForgotPasswordSuccess: (email: any) => void;
  handleConfirmOtpSignUpSuccess: (email: any) => void;
  handleConfirmOtpPasswordSuccess: (email: any) => void;
  handleShowMessage: (content: any) => void;
}

const ModalContext = createContext<ModalStateContextType | null>(null);

export const ModalProvider = ({ children }) => {
  const [OpenSignUpFirstModal, setOpenSignUpFirstModal] = useState(false);
  const [OpenSignUpSecondModal, setOpenSignUpSecondModal] = useState(false);
  const [OpenSignInModal, setOpenSignInModal] = useState(false);
  const [OpenMessageModal, setOpenMessageModal] = useState(false);
  const [OpenSignUpConfirmOTPModal, setOpenSignUpConfirmOTPModal] =
    useState(false);
  const [OpenPasswordConfirmOTPModal, setOpenPasswordConfirmOTPModal] =
    useState(false);
  const [OpenForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);
  const [OpenResetPassword, setOpenResetPassword] = useState(false);
  const [emailForOTP, setEmailForOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstSignUp = () => {
    setOpenSignUpFirstModal(true);
  };

  const handleSignIn = () => {
    setOpenSignInModal(true);
  };

  const handleForgotPassword = () => {
    setOpenForgotPasswordModal(true);
  };

  const handleSignUpSuccess = (email) => {
    setEmailForOTP(email);
    setOpenSignUpConfirmOTPModal(true);
  };

  const handleForgotPasswordSuccess = (email) => {
    setEmailForOTP(email);
    setOpenPasswordConfirmOTPModal(true);
  };

  const handleConfirmOtpSignUpSuccess = (email) => {
    setEmailForOTP(email);
    setOpenSignUpSecondModal(true);
  };

  const handleConfirmOtpPasswordSuccess = (email) => {
    setEmailForOTP(email);
    setOpenResetPassword(true);
  };

  const handleShowMessage = (content) => {
    setMessage(content);
    setOpenMessageModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        OpenSignUpFirstModal,
        setOpenSignUpFirstModal,
        OpenSignUpSecondModal,
        setOpenSignUpSecondModal,
        OpenSignInModal,
        setOpenSignInModal,
        OpenMessageModal,
        setOpenMessageModal,
        OpenSignUpConfirmOTPModal,
        setOpenSignUpConfirmOTPModal,
        OpenPasswordConfirmOTPModal,
        setOpenPasswordConfirmOTPModal,
        OpenForgotPasswordModal,
        setOpenForgotPasswordModal,
        OpenResetPassword,
        setOpenResetPassword,
        emailForOTP,
        setEmailForOTP,
        message,
        setMessage,
        handleFirstSignUp,
        handleSignIn,
        handleSignUpSuccess,
        handleForgotPassword,
        handleForgotPasswordSuccess,
        handleConfirmOtpSignUpSuccess,
        handleConfirmOtpPasswordSuccess,
        handleShowMessage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalStateContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

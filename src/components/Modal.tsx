import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  modalSize: React.ReactNode;
}
export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  modalSize,
}: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed z-50 inset-0 bg-black  bg-opacity-20 transition-opacity" />
          </TransitionChild>

          <div className="fixed z-50 inset-0 flex min-h-screen items-center justify-center  overflow-hidden ">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={`relative z-50 inline-flex w-full transform flex-col overflow-hidden rounded-xl bg-white shadow-2xl transition-all lg:p-4 ${modalSize} sm:align-middle`}
              >
                <div className="absolute top-4 right-5 lg:top-8 lg:right-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5"
                  >
                    <span className="sr-only">Close</span>
                    <IoClose className="h-5 w-5 " />
                  </button>
                </div>

                <div className="flex-1 p-5">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-4xl lg:text-5xl font-custom text-[#3C072E] "
                    >
                      {title}
                    </DialogTitle>
                  )}
                  <div>{children}</div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opatcity-0"
              enterTo="opacity-100"
              leave="ease-in duration-300"
              leaveFrom="opaciy-100"
              leaveTo="opacity-0"
            >
              <DialogPanel className="fixed inset-0" />
            </TransitionChild>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opatcity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opaciy-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content">
                
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

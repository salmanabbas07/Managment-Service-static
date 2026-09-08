"use client";

import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  isSignInOpen: false,
  isConsultationOpen: false,
  openSignInModal: () => {},
  closeSignInModal: () => {},
  openConsultationModal: () => {},
  closeConsultationModal: () => {},
});

export function ModalProvider({ children }) {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openSignInModal = () => setIsSignInOpen(true);
  const closeSignInModal = () => setIsSignInOpen(false);

  const openConsultationModal = () => setIsConsultationOpen(true);
  const closeConsultationModal = () => setIsConsultationOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isSignInOpen,
        isConsultationOpen,
        openSignInModal,
        closeSignInModal,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  return useContext(ModalContext);
}

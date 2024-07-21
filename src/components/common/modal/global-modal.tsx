"use client";

import React, { ReactNode } from "react";
import { closeModal } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

interface GlobalModalProps {
  id: string;
  children: ReactNode;
  title: string;
}

const GlobalModal: React.FC<GlobalModalProps> = ({ id, children, title }) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal.modals[id]);
  const isOpen = modalState?.isOpen;
  const size = modalState?.size || "md"; // default size to 'md'

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => !open && dispatch(closeModal(id))}
      size={size}
    >
      <ModalContent>
        <ModalHeader className="text-center">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={() => dispatch(closeModal(id))} variant="light" color="danger">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GlobalModal;

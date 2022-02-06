import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { CustomButton } from "components/Button";
import { IoIosClose } from "react-icons/io";
import { ModalDivider, TextWrapper, ApprovalButtonWrapper, CloseButton } from "./styles";

const ModalWrapper = ({ onClose, isOpen, deleteFn }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />

      <ModalContent>
        <CloseButton type="button" onClick={onClose} aria-label="close modal">
          <IoIosClose size={30} color="#2D4875" />
        </CloseButton>

        <ModalDivider />

        <ModalBody mb={5} mt={5} px={10} py={10}>
          <TextWrapper>
            Are you sure you want to Delete this User?
            <ApprovalButtonWrapper>
              <CustomButton onClick={onClose} variant="darkGrey" message="No" className="left__btn">
                <p>NO</p>
              </CustomButton>
              <CustomButton onClick={deleteFn} variant="danger" message="Yes">
                YES
              </CustomButton>
            </ApprovalButtonWrapper>
          </TextWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalWrapper;

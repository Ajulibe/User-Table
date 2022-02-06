import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "styles/colors";

export const Container = styled.div`
  padding: 3.2rem 4rem 8rem;
  max-height: calc(100vh - 25rem);
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex: 0 0 auto;
  position: absolute;
  top: 12px;
  right: 2rem;
  z-index: 4;
  border-radius: 4px;

  &:hover {
    background-color: rgba(18, 39, 140, 0.1);
  }

  &:focus {
    outline: none;
  }
`;

export const ModalDivider = styled.div`
  border-bottom: 0.5px solid #f2f2f2;
`;

export const TextWrapper = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: ${colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  flex-direction: column;
  margin-top: 30px;
`;

export const ApprovalButtonWrapper = styled.div`
  height: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  .left__btn {
    margin-right: 24px;
  }
`;

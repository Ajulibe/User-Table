import styled from "@emotion/styled";
import { Input } from "@chakra-ui/react";
import COLORS from "styles/colors";

//TEXT INPUT
export const TextInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    font-size: 16px;
    margin-right: 4rem;
    width: 50px;
  }
  input {
    text-indent: 4px;
  }
  .input__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const TextInputBox = styled(Input)`
  outline: none;
  width: 100%;
  font-size: 16px;
  height: 40px;
  border-radius: 4px;
  margin-top: 0.8rem;
  text-indent: 1.3rem;
  transition: border-color 0.5s ease;
`;

export const ErrorSpan = styled.p`
  font-size: 12px !important;
  color: red !important;
  margin: 5px 0 0;
`;

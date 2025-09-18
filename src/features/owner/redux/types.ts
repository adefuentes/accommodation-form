import type { PayloadAction } from "@reduxjs/toolkit";

export type InputData = {
  value: string;
  isValid: boolean;
  isRequired: boolean;
  regex: string;
  errorLabel: string;
};

export type OwnerState = {
  name: InputData;
  email: InputData;
  phone: InputData;
};

export type OwnerReducers = {
  checkInputValueAction: (
    state: OwnerState,
    action: PayloadAction<{
      field: "name" | "email" | "phone";
      value: string;
    }>,
  ) => void;
  setErrorAction: (
    state: OwnerState,
    action: PayloadAction<{
      field: "name" | "email" | "phone";
      found: boolean;
    }>,
  ) => void;
};

export const OWNER = "owner";

import type { PayloadAction } from "@reduxjs/toolkit";

export type FormState = {
  total: number;
  current: number;
};

export type FormReducers = {
  setStep: (
    state: FormState,
    action: PayloadAction<{
      step: number;
    }>,
  ) => void;
};

export const FORM = "form";

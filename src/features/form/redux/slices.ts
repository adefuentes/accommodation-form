import { FORM, type FormReducers, type FormState } from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: FormState = {
  total: 3,
  current: 0,
};

const reducers: FormReducers = {
  setStep: (state: FormState, { payload: { step } }) => {
    state.current = step;
  },
};

export const formSlice = createSlice({
  name: FORM,
  initialState,
  reducers,
});

export const { setStep } = formSlice.actions;
export default formSlice.reducer;

import { OWNER, type OwnerReducers, type OwnerState } from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: OwnerState = {
  name: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^[^\\d]{4,64}$",
    errorLabel: "Minimum 4 characters and maximum 64, not numbers allowed.",
  },
  email: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    errorLabel: 'Must be an email containing "@" and a domain after the "@"',
  },
  phone: {
    value: "",
    isValid: true,
    isRequired: false,
    regex: "^\\d{9}$",
    errorLabel: "Numbers only, up to 9 digits",
  },
};

const reducers: OwnerReducers = {
  checkInputValueAction: (state, { payload: { field, value } }) => {
    state[field] = {
      ...state[field],
      isValid: true,
      value,
    };
    state[field].isValid = true;
  },
  setErrorAction: (state, { payload: { field, found } }) => {
    state[field].isValid = found;
  },
};

export const ownerSlice = createSlice({
  name: OWNER,
  initialState,
  reducers,
});

export const { checkInputValueAction, setErrorAction } = ownerSlice.actions;
export default ownerSlice.reducer;

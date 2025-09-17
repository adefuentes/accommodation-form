import {
  ACCOMMODATION,
  type AccommodationState,
  type AccommodationTypes,
} from "./types.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const initialState: AccommodationState = {
  name: {
    value: "",
    isValid: true,
    isRequired: true,
    errors: [
      {
        message: "Length between 4 and 128 characters.",
        type: "length-4-128",
        found: false,
      },
      {
        message: "Numbers are not allowed.",
        type: "no-numbers",
        found: false,
      },
    ],
  },
  address: {
    value: "",
    isValid: false,
    isRequired: true,
    errors: [
      {
        message: "Length between 4 and 128 characters.",
        type: "length-4-128",
        found: false,
      },
    ],
  },
  description: {
    value: "",
    isValid: false,
    isRequired: false,
    errors: [
      {
        message: "Length between 128 and 2048 characters.",
        type: "length-128-2048",
        found: false,
      },
    ],
  },
  type: undefined,
  images: [],
};

const reducers = {
  checkInputValueAction: (
    state: AccommodationState,
    {
      payload: { field, value },
    }: PayloadAction<{
      field: "name" | "address" | "description";
      value: string;
    }>,
  ) => {
    state[field] = {
      ...state[field],
      isValid: true,
      value,
    };
    state[field].isValid = true;
  },
  setErrorAction: (
    state: AccommodationState,
    {
      payload: { field, errorIndex, found },
    }: PayloadAction<{
      field: "name" | "address" | "description";
      errorIndex: number;
      found: boolean;
    }>,
  ) => {
    state[field].errors[errorIndex].found = found;
  },
  setImageAction: (
    state: AccommodationState,
    { payload: { image } }: PayloadAction<{ image: string }>,
  ) => {
    if (state.images.length === 2) return;
    state.images.push(image);
  },
  setAccommodationType: (
    state: AccommodationState,
    { payload: { type } }: PayloadAction<{ type: AccommodationTypes }>,
  ) => {
    state.type = type;
  },
};

export const accommodationSlice = createSlice({
  name: ACCOMMODATION,
  initialState,
  reducers,
});

export const {
  checkInputValueAction,
  setErrorAction,
  setImageAction,
  setAccommodationType,
} = accommodationSlice.actions;
export default accommodationSlice.reducer;

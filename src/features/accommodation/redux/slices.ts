import {
  ACCOMMODATION,
  type AccommodationReducers,
  type AccommodationState,
  type Image,
} from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";
import { normalizeState, unNormalizeState } from "../../../utils.ts";

export const initialState: AccommodationState = {
  name: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^[^\\d]{4,128}$",
    errorLabel: "Length between 4 and 128 characters, numbers are not allowed.",
  },
  address: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^.{4,128}$",
    errorLabel: "Length between 4 and 128 characters.",
  },
  description: {
    value: "",
    isValid: true,
    isRequired: false,
    regex: "^.{128,2048}$",
    errorLabel: "Length between 128 and 2048 characters.",
  },
  type: "",
  images: {},
  loadingFile: false,
};

const reducers: AccommodationReducers = {
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
  setImageAction: (state, { payload }) => {
    const images = unNormalizeState<Image>(state.images);
    if (images.length === 2) return;
    images.push(payload);
    state.images = normalizeState(images);
    state.loadingFile = false;
  },
  setAccommodationType: (state, { payload: { type } }) => {
    state.type = type;
  },
  checkImage: (state) => {
    state.loadingFile = true;
  },
  deleteImage: (state, { payload: { id } }) => {
    delete state.images[id];
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
  checkImage,
  deleteImage,
} = accommodationSlice.actions;
export default accommodationSlice.reducer;

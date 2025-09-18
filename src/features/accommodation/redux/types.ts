import type { PayloadAction } from "@reduxjs/toolkit";

export type AccommodationTypes = "apartment" | "house" | "villa" | "";

export type InputData = {
  value: string;
  isValid: boolean;
  isRequired: boolean;
  regex: string;
  errorLabel: string;
};

export type Image = {
  id: string;
  src: string;
};

export type AccommodationState = {
  name: InputData;
  address: InputData;
  description: InputData;
  type: AccommodationTypes;
  images: Record<string, Image>;
  loadingFile: boolean;
};

export type AccommodationReducers = {
  checkInputValueAction: (
    state: AccommodationState,
    action: PayloadAction<{
      field: "name" | "address" | "description";
      value: string;
    }>,
  ) => void;
  setErrorAction: (
    state: AccommodationState,
    action: PayloadAction<{
      field: "name" | "address" | "description";
      found: boolean;
    }>,
  ) => void;
  setImageAction: (
    state: AccommodationState,
    action: PayloadAction<Image>,
  ) => void;
  setAccommodationType: (
    state: AccommodationState,
    action: PayloadAction<{
      type: AccommodationTypes;
    }>,
  ) => void;
  checkImage: (
    state: AccommodationState,
    action: PayloadAction<{
      src: string;
    }>,
  ) => void;
  deleteImage: (
    state: AccommodationState,
    action: PayloadAction<{
      id: string;
    }>,
  ) => void;
};

export const ACCOMMODATION = "accommodation";

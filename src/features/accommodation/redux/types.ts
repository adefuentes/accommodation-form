export type AccommodationTypes = "apartment" | "house" | "villa" | undefined;
export type RegexKey = "length-4-128" | "no-numbers" | "length-128-2048";

export type InputError = {
  message: string;
  type: RegexKey;
  found: boolean;
};

export type InputData = {
  value: string;
  isValid: boolean;
  isRequired: boolean;
  errors: InputError[];
};

export type AccommodationState = {
  name: InputData;
  address: InputData;
  description: InputData;
  type: AccommodationTypes;
  images: string[];
};

export const ACCOMMODATION = "accommodation";

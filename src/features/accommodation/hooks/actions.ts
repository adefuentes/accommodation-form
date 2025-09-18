import { useDispatch } from "react-redux";
import {
  checkInputValueAction,
  checkImage,
  setAccommodationType,
  deleteImage,
} from "../redux/slices.ts";
import type { AccommodationTypes } from "../redux/types.ts";

export const useAccommodationActions = () => {
  const dispatch = useDispatch();
  const checkInputValue = (
    field: "name" | "address" | "description",
    value: string,
  ) => {
    dispatch(checkInputValueAction({ field, value }));
  };

  const resolveImage = (src: string) => {
    dispatch(checkImage({ src }));
  };

  const selectAccommodationType = (type: AccommodationTypes) => {
    dispatch(setAccommodationType({ type }));
  };

  const removeImage = (id: string) => {
    dispatch(deleteImage({ id }));
  };

  return {
    checkInputValue,
    resolveImage,
    selectAccommodationType,
    removeImage,
  };
};

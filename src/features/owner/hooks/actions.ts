import { useDispatch } from "react-redux";
import { checkInputValueAction } from "../redux/slices.ts";

export const useOwnerActions = () => {
  const dispatch = useDispatch();
  const checkInputValue = (
    field: "name" | "email" | "phone",
    value: string,
  ) => {
    dispatch(checkInputValueAction({ field, value }));
  };

  return {
    checkInputValue,
  };
};

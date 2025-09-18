import { useDispatch } from "react-redux";
import { setStep } from "../redux/slices.ts";

export const useFormActions = () => {
  const dispatch = useDispatch();
  const nextStep = (step: number) => {
    dispatch(setStep({ step }));
  };

  return {
    nextStep,
  };
};

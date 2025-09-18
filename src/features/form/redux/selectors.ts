import type { StateType } from "../../../redux/root-reducer.ts";

export const getCurrentStep = (state: StateType) => {
  return state.form.current;
};
export const getTotalSteps = (state: StateType) => state.form.total;

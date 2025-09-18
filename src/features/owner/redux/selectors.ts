import type { StateType } from "../../../redux/root-reducer.ts";

export const getOwnerData = (state: StateType) => state.owner;
export const isNextAvailable = (state: StateType) =>
  !!state.owner.name.value &&
  !!state.owner.email.value &&
  state.owner.name.isValid &&
  state.owner.email.isValid &&
  state.owner.phone.isValid;

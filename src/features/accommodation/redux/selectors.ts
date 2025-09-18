import type { StateType } from "../../../redux/root-reducer.ts";

export const getAccommodationData = (state: StateType) => state.accommodation;
export const isNextAvailable = (state: StateType) =>
  !!state.accommodation.name.value &&
  !!state.accommodation.address.value &&
  state.accommodation.name.isValid &&
  state.accommodation.address.isValid &&
  state.accommodation.description.isValid &&
  !!state.accommodation.type;

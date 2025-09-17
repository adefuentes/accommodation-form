import type {StateType} from "../../../redux/root-reducer.ts";

export const getAccommodationData = (state: StateType) => state.accommodation;

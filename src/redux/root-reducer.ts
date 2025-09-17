import type {AccommodationState} from "../features/accommodation/redux/types.ts";
import accommodationSlice from "../features/accommodation/redux/slices.ts";

export type StateType = {
  accommodation: AccommodationState
};

const rootReducers = {
  accommodation: accommodationSlice
};

export default rootReducers;

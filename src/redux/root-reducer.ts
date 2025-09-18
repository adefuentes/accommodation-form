import type { AccommodationState } from "../features/accommodation/redux/types.ts";
import type { OwnerState } from "../features/owner/redux/types.ts";
import type { FormState } from "../features/form/redux/types.ts";
import accommodationSlice from "../features/accommodation/redux/slices.ts";
import ownerSlice from "../features/owner/redux/slices.ts";
import formSlice from "../features/form/redux/slices.ts";

export type StateType = {
  accommodation: AccommodationState;
  owner: OwnerState;
  form: FormState;
};

const rootReducers = {
  accommodation: accommodationSlice,
  owner: ownerSlice,
  form: formSlice,
};

export default rootReducers;

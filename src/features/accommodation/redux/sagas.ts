import { all, put, select, takeLatest, type Effect } from "redux-saga/effects";
import { type InputError } from "./types.ts";
import { accommodationRegex } from "../utils.ts";
import { checkInputValueAction, setErrorAction } from "./slices.ts";
import type { StateType } from "../../../redux/root-reducer.ts";

export function* checkInputValueSaga({
  payload: { field, value },
}: {
  payload: { field: "name" | "address" | "description"; value: string };
}): Generator {
  const { errors } = yield select(
    (state: StateType) => state.accommodation[field],
  );
  const toError: Effect[] = [];

  console.log(value);

  errors.forEach((error: InputError, index: number) => {
    const { type } = error;
    const regex = new RegExp(accommodationRegex[type]);
    toError.push(
      put(
        setErrorAction({
          field,
          errorIndex: index,
          found: !regex.test(value),
        }),
      ),
    );
  });

  console.log(toError);

  if (toError.length) {
    yield all(toError);
  }
}

export function* watchCheckInputValueAction() {
  yield takeLatest(checkInputValueAction, checkInputValueSaga);
}

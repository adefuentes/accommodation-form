import { put, select, takeLatest } from "redux-saga/effects";
import type { StateType } from "../../../redux/root-reducer.ts";
import { checkInputValueAction, setErrorAction } from "./slices.ts";

export function* checkInputValueSaga({
  payload: { field, value },
}: {
  payload: { field: "name" | "email" | "phone"; value: string };
}): Generator {
  const { regex } = yield select((state: StateType) => state.owner[field]);
  const test = new RegExp(regex);
  yield put(
    setErrorAction({
      field,
      found: value ? test.test(value) : true,
    }),
  );
}

export function* watchCheckOwnerInputValueAction() {
  yield takeLatest(checkInputValueAction, checkInputValueSaga);
}

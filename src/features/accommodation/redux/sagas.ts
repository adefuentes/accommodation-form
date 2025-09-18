import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  checkInputValueAction,
  checkImage,
  setErrorAction,
  setImageAction,
} from "./slices.ts";
import type { StateType } from "../../../redux/root-reducer.ts";
import toast from "react-hot-toast";
import { getImageDimensions } from "../../../utils.ts";

export function* checkInputValueSaga({
  payload: { field, value },
}: {
  payload: { field: "name" | "address" | "description"; value: string };
}): Generator {
  const { regex } = yield select(
    (state: StateType) => state.accommodation[field],
  );
  const test = new RegExp(regex);
  yield put(
    setErrorAction({
      field,
      found: value ? test.test(value) : true,
    }),
  );
}

export function* watchCheckInputValueAction() {
  yield takeLatest(checkInputValueAction, checkInputValueSaga);
}

export function* checkImageSaga({
  payload: { src },
}: {
  payload: { src: string };
}): Generator<unknown, void, { width: number; height: number }> {
  const { width, height } = yield call(getImageDimensions, src);

  if (width === 500 && height === 500) {
    yield put(setImageAction({ src, id: Date.now().toString() }));
  } else {
    yield call(toast.error, "Image dimension must be 500x500px");
  }
}

export function* watchCheckImageAction() {
  yield takeLatest(checkImage, checkImageSaga);
}

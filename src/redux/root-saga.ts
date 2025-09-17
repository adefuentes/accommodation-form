import {all, fork} from "redux-saga/effects";
import {watchCheckInputValueAction} from "../features/accommodation/redux/sagas.ts";

const rootSaga = function* () {
  yield all([
    fork(watchCheckInputValueAction),
  ]);
}

export default rootSaga;

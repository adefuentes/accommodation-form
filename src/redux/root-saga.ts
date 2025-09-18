import { all, fork } from "redux-saga/effects";
import {
  watchCheckInputValueAction,
  watchCheckImageAction,
} from "../features/accommodation/redux/sagas.ts";
import { watchCheckOwnerInputValueAction } from "../features/owner/redux/sagas.ts";

const rootSaga = function* () {
  yield all([
    fork(watchCheckInputValueAction),
    fork(watchCheckImageAction),
    fork(watchCheckOwnerInputValueAction),
  ]);
};

export default rootSaga;

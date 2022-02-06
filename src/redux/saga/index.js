import { call, takeEvery, put } from "redux-saga/effects";
import { getUser, getUserError, getUserSuccess } from "../action/index";
import { getUsers as UsersAPI } from "api";

function* getAllUsers() {
  try {
    const res = yield call(UsersAPI, {});
    yield put(getUserSuccess(res));
  } catch (err) {
    yield put(getUserError());
  }
}

//--> general saga watcher for users
function* userSagas() {
  yield takeEvery(getUser.type, getAllUsers);
}

export default userSagas;

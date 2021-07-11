import { call, put } from "redux-saga/effects";
import { postUserFailed, postUserSuccess } from "../../ducks/user";
import { RequestPostUser } from "./../requests/user";

export function* handlePostUser(action: any): any {
  try {
    const data = yield call(RequestPostUser, action.payload);
    yield put(postUserSuccess({ ...action.payload, ...data }));
  } catch (err) {
    yield put(postUserFailed(err.message));
    console.log(err);
  }
}

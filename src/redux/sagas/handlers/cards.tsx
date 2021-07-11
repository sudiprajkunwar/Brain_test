import { call, put } from "redux-saga/effects";
import { requestGetCards } from "../requests/cards";
import { getCardsSuccess } from "./../../ducks/cards";

export function* handleGetCard(): any {
  try {
    const response = yield call(requestGetCards);
    const { data }: any = response;
    yield put(getCardsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

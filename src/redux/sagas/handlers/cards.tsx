import { call, put } from "redux-saga/effects";
import { setCards } from "../../ducks/cards";
import { requestGetCards } from "../requests/cards";

export function* handleGetCard(): any {
    try {
        const response = yield call(requestGetCards);
        const { data }: any = response;
        yield put(setCards(data));
    } catch (err) {
        console.log(err)
    }
}

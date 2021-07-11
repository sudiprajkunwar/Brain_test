import { takeLatest } from "redux-saga/effects";
import { handleGetCard } from "./handlers/cards";
import { GET_CARDS } from '../ducks/cards'


export function* watcherSaga() {
    yield takeLatest(GET_CARDS, handleGetCard)
}
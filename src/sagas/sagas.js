import { call, put, takeEvery } from "redux-saga/effects";

const getString = (time) =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      let isOk = true;
      if (isOk) {
        resolve();
      } else {
        reject();
      }
    }, time * 1000);
  });

function* add(action) {
  yield put({ type: "LOADING", payload: true });
  try {
    yield call(getString, action.payload.delay);
    yield put({ type: "ADD", payload: action.payload });
  } catch (error) {
    console.log(error);
  }
  yield put({ type: "LOADING", payload: false });
}

function* sub(action) {
  yield put({ type: "LOADING", payload: true });
  try {
    yield call(getString, action.payload.delay);
    yield put({ type: "SUB", payload: action.payload });
  } catch (error) {
    console.log(error);
  }
  yield put({ type: "LOADING", payload: false });
}

function* mySaga() {
  yield takeEvery("ADD_REQUEST", add);
  yield takeEvery("SUB_REQUEST", sub);
}

export default mySaga;

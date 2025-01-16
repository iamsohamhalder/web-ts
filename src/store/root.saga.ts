import { all } from 'redux-saga/effects';

function* rootSaga(): Generator {
    try {
        yield all([]);
        yield 
    } catch (error: unknown) {
        console.error("Root Saga Error", error)
    }
}

export default rootSaga
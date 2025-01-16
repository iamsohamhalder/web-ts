import { configureStore, type Store } from '@reduxjs/toolkit'
import createSagaMiddleware, { type SagaMiddleware } from 'redux-saga'
import rootSaga from './root.saga';
import rootReducer from './root.reducer';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

/* Store Set up */
const store: Store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false,
            thunk: false,
        }).concat(sagaMiddleware)
});

/* Saga Connection */
sagaMiddleware.run(rootSaga);





export default store;
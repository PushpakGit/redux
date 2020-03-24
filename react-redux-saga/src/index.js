import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware from 'redux-saga';
import reducer  from './reducers/index';
import { createStore,compose,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { logger } from 'redux-logger';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(  reducer ,    // reducer
                            compose(applyMiddleware(sagaMiddleware,logger ),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // setting to see data in dev tools
                        );

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) { module.hot.accept(App);}
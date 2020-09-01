import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//setup Redux , redux thunk
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import{rootReducers} from './Redux/Reducers/rootReducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
  );
//end setup redux,redux-thunk

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

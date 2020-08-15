import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requsetRobots } from './reducers'

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requsetRobots})

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
	  <Provider store={store}>
			<App />
	  </Provider>,
  document.getElementById('root')
);


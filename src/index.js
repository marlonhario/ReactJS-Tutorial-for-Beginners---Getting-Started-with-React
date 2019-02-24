import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//i imported
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
// import {BrowserRouter as Router} from 'react-router-dom';
//i imported

import App from './App';
import * as serviceWorker from './serviceWorker';

//i imported
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
//i imported

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

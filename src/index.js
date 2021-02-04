import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import './index.css';
import App from './App';
import reducer from './store';

{
  /*문법검사도구*/
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), //index.html에 app을 랜더링
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import store from './store'
import {Provider} from 'react-redux';
=======
import { Provider } from 'react-redux';
import store from './store';
>>>>>>> c5c7ecebb94f0c5018574d0190f6c05ca74a8db5

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


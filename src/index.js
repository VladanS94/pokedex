import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {GlobalContextProvider} from './components/GlobalContext'

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById('root')
);


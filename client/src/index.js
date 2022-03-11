import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {Persistor, Store} from "./redux/Store"
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
    <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

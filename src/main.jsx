import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import persistStore from "redux-persist/es/persistStore";

let persistor = persistStore(store);

// The App component is the Router which all the Routes extend from
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
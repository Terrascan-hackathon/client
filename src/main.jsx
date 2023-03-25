import * as React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import persistStore from "redux-persist/es/persistStore";
// ==============================|| REACT DOM RENDER  ||============================== //
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

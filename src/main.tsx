import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Importa Provider da "react-redux"
import App from "./App"; 
import { BrowserRouter } from "react-router-dom";
import store from "./states/store"; // Importa lo store configurato

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

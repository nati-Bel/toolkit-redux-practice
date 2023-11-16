import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import App from './App.jsx';
import './index.css';
import { PokemonApp } from './PokemonApp.jsx';

import { store } from "./store";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <App /> */}
      <PokemonApp/>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import "./styles.css";

import { Counter } from "./components/Counter";

import { store } from "./redux/store";

import { Provider } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

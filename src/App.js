import React from "react";
import { Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import TodoContainer from "../src/containers/TodoContainer";
import history from "./history";
import "./assets/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={TodoContainer} />
          </Router>
        </Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;

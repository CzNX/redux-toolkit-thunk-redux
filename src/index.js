import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import ThunkApp from "./ThunkApp";

ReactDOM.render(
  <Provider store={store}>
    <ThunkApp />
  </Provider>,
  document.getElementById("root")
);

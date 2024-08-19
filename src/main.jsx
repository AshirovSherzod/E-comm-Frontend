import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/store.js";
import LazyLoading from "./components/lazyLoading/LazyLoading.jsx";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LazyLoading />}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

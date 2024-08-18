import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> // 필요없다. 두번실행된다.
);

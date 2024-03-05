import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import CursorProvider from "./components/context/CursorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>
);

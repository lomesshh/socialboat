import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { VideoProvider } from "./context/VideoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </React.StrictMode>
);

reportWebVitals();

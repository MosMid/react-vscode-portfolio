import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import FrApp from "./app/layout/App-fr"
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "./style.css";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const stringValue = urlParams.get('fr');

function RootComponent() {
  const [isFrAppVisible, setIsFrAppVisible] = useState(stringValue === "true");

  return (
    <React.StrictMode>
      <HashRouter>
        
          {isFrAppVisible ? (
            <button onClick={() => setIsFrAppVisible(!isFrAppVisible)} className="language" role="img" aria-label="French Flag">EN</button>
          ) : (
            <button onClick={() => setIsFrAppVisible(!isFrAppVisible)} className="language" role="img" aria-label="English Flag">FR</button>
          )}
        
        {isFrAppVisible ? <FrApp /> : <App />}
      </HashRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

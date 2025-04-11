import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { MovieProvider } from "../movieContext";



ReactDOM.render(
<MovieProvider>
    <App />
</MovieProvider>, document.getElementById("root"));

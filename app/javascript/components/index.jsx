import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 

});
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h3>Hello There! What is your name?</h3>
      <input />
      <button onClick={() => alert("Hello")}>Say Hello</button>
      <img src="" alt="" />
    </div>
  );
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(<App />);

import React from "react";

function App() {
    return (
        <div>
            <h3>Hello There! What is your name?</h3>
            <input/>
            <button onClick={() => alert("Hello")}>Say Hello</button>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
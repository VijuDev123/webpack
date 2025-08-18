import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
function App() {
    return (_jsxs("div", { children: [_jsx("h3", { children: "Hello There! What is your name?" }), _jsx("input", {}), _jsx("button", { onClick: () => alert("Hello"), children: "Say Hello" })] }));
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(_jsx(App, {}));
//# sourceMappingURL=index.js.map
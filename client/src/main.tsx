import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome for icons
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
fontAwesomeScript.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeScript);

createRoot(document.getElementById("root")!).render(<App />);

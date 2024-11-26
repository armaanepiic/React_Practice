// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import List from "./List.jsx";

createRoot(document.getElementById('root')).render(<App />)
createRoot(document.getElementById("root1")).render(<List />);


// React DOM -> createRoot it talks with mainDOM
// App jeta dey sheta main DOM a send kore

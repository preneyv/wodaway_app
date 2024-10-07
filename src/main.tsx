import ReactDOM from 'react-dom/client'
import "./styles/index.scss"
import {BrowserRouter} from "react-router-dom";
import App from "./router/App.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

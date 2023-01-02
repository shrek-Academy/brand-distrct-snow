// external import statements
import { BrowserRouter } from "react-router-dom";

// internal import statements
import "./App.css";
import Router from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;

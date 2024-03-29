import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                </Routes>
            </div>
        </Router>
    );
}
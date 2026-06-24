import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './contexts/notes/NoteState';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router";

function App() {
    return (
        <>
            <NoteState>
                <Router>
                    <Navbar />
                    <div className="container my-3">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;
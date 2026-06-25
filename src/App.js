import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './contexts/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
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
                    <Alert message="This is an amazing react course" />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/signup" element={<Signup />} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;
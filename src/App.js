import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

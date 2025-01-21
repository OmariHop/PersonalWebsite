import './App.css';
import NavBar from './components/NavBar.jsx';
import Chatbot from './pages/Chatbot.js';
import ContactMe from './pages/ContactMe.js';
import Education from './pages/Education.js';
import HomePage from './pages/HomePage.js';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';






function App() {
return(

    <div className="app-body">
    <Router>

        {/*Navbar placement*/}
            <NavBar/>


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/education" element = {<Education/>}/>
            <Route path="/chatbot" element = {<Chatbot/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
        </Routes>
    </Router>
    </div>
)
}

export default App;

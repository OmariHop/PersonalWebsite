import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";

 const NavBar = () => {

     return(
         <header>
             <div className="logo">
                 <h1>Portfolio</h1>
                </div>
             <ul className="nav">
                 <li><Link to ="/">Home</Link></li>
                 <li><Link to ="/experience">Experience</Link></li>
                 <li><Link to ="/projects">Projects</Link></li>
                 <li><Link to ="/chatbot">Chatbot</Link></li>
                </ul>
                 <button><Link to ="contact">Contact</Link></button>
         </header>

     )

 }

 export default NavBar;
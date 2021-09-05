import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from "./components/about"
import Main from "./components/main"
import Experiences from "./components/experiences";
import Contact from './components/contact';
import Navbar from './components/Navbar';
import Quote from './components/quote';
import Projects from './components/projects';
import React from 'react';


function App() {
  return (
    <div class="App-Main">
     <Main/>
     <About/>
     <Experiences/>
     <Quote/>
     <Contact/>
    </div>
  );
}

export default App;

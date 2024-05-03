import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Module from "./components/Module";
import Footer from "./components/Footer";
import AgeIden from "./components/AgeIden";
import CropIden from "./components/CropIden";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Route path="/about" component={About} />
        <Route path="/module" component={Module} />
        <Route path="/cropIden" component={CropIden} />
        <Route path="/ageIden" component={AgeIden} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

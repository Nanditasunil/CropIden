import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Module from "./components/Module";
import Footer from "./components/Footer";
import AgeIden from "./components/AgeIden";
import CropIden from "./components/CropIden";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <About />
        <Module />
        <Footer />
      </>
    </div>
  );
}

export default App;

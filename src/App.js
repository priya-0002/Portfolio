import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";








function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <About />
     <Skills />
    <Work />
     

 
     
    </div>
  );
}

export default App;

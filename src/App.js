import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Workparent from "./components/work/Workparent";








function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <About />
     <Skills />
    <Workparent />
     

 
     
    </div>
  );
}

export default App;

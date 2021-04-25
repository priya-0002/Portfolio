import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Projectparent from "./components/projects/Projectparent";
import Contact from "./components/contact/Contact";








function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <About />
     <Skills />
    <Work />
    <Projectparent/>
    <Contact/>
     

 
     
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="bg-cream text-black dark:bg-black dark:text-white font-poppins transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;

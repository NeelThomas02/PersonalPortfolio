import './App.css';
import About from './Components/About/About';
import Certificate from './Components/Certifications/Certificate';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Projects/Project';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Certificate />
      <Project />
    </div>
  );
}

export default App;

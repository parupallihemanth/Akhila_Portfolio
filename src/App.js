import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experinces';
import Contact from './components/ContactMe'
function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <AboutMe />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;

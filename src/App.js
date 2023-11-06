
import './App.css';
import About from './Components/About';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Profile/>
      <Courses/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

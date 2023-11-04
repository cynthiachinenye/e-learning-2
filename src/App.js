
import './App.css';
import About from './Components/About';
import Courses from './Components/Courses';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Profile/>
      <Courses/>
      <About/>
    </div>
  );
}

export default App;

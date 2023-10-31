
import './App.css';
import Courses from './Components/Courses';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Profile/>
      <Courses/>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './styles.css'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>


  );
}

export default App;

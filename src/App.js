
import './App.css';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Headbox from './components/Headbox.js';
import Contact from './components/Contact.js'
import AboutPage from './components/AboutPage.js';
import {Routes} from 'react-router';

import Form from './components/Form.js'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Headbox/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/volunteer" element={<Form/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

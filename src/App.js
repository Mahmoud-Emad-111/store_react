import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}/>          
        </Routes>
        
        </BrowserRouter>
      </div>
    )
  
  
}

export default App;

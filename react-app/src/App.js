import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './Home.js';
import { Info } from './Info.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <BrowserRouter>
          <Routes>
            <Route path="/react" element={<Home></Home>}></Route>
            <Route path="/react/info" element={<Info></Info>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

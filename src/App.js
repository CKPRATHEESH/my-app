import './App.css';/* 
import Timer from './component/Timer'; */
import DisplayDate from './component/DisplayDate';
import Grid from './component/Grid';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const name = 'Pratheesh';
  const element = <h1>Hello, {name}</h1>;
  return (
    <div>
      {element}
      <header className='App-header'>
        <div className='Display-date'><DisplayDate /></div>{/* 
        <div className='Timer'><Timer /></div> */}
        <div>
    
</div>
      </header>
      <div><BrowserRouter>
    <Routes>
    <Route exact path='/DisplayDate' element={< DisplayDate />}></Route>
    <Route exact path='/' element={< Grid />}></Route>

    </Routes>
    </BrowserRouter></div>
     {/*  <div><Grid /></div> */}
    </div>
  );
}

export default App;

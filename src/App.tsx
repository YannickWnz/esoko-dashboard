import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';

import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Organization } from './Pages/Organization/Organization';

function App() {
  return (
    <div className="App">

    <Router>
      <Sidebar />
      <Navbar /> 
      <Routes>
        <Route path='/' element={ <Dashboard /> } ></Route>
        <Route path='/organizations' element={ <Organization /> } ></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;

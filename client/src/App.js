
import { Routes, Route } from 'react-router-dom';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit'
import Detail from './components/Detail'



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/details/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

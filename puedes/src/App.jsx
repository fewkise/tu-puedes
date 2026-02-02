import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import PlanesPage from './Pages/PlanesPage/PlanesPage';
import CreatuPage from './Pages/CreatuPage/CreatuPage';
import CrearPage from './Pages/CrearPage/CrearPage';
import OperacionPage from './Pages/OperacionPage/OperacionPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import Routinas from './Pages/RoutinasPage/Routinas';
import SobrePage from './Pages/SobrePage/SobrePage';
import DetallePage from './Pages/DetallePage/DetallePage';
function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/memberships' element={<PlanesPage/>}/>
        <Route path='/gettogethers' element={<CreatuPage/>}/>
        <Route path='/crear' element={<CrearPage/>}/>
        <Route path='/operation' element={<OperacionPage/>}/>
        <Route path='/blog' element={<BlogsPage/>}/>
        <Route path='/routinas' element={<Routinas/>}/>
        <Route path='/sobre' element={<SobrePage/>}/>
        <Route path='/detalle' element={<DetallePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
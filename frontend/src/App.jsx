// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Main';
import Home from './pages/Home';
import Veiculos from './pages/Veiculos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/lancha' element={<Veiculos tipo="lancha"/>}/>
          <Route path='/utv' element={<Veiculos tipo="utv"/>}/>
          <Route path='/moto-aquatica' element={<Veiculos tipo="motoAquatica"/>}/>
          <Route path='/quadriciculo' element={<Veiculos tipo="quadriciculo"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

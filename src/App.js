import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './Components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  /*FUNCIONES */



  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

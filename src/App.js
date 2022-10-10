import { Container } from 'react-bootstrap';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Formulario from "./Pages/Formulario";
import Dashboard from "./Pages/Dashboard";
import AdministrarUsuarios from "./components/AdministrarUsuarios";
import GestionarAsambleas from './components/GestionarAsambleas';
import Asamblea from './components/Asamblea';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <div id="fondo">
      <Container fluid>        
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Formulario />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="administrar-usuarios" element={<AdministrarUsuarios />} />
                <Route path="" element={<GestionarAsambleas />} />
                <Route path="asamblea/:asambleaId" element={<Asamblea />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>        
      </Container>
    </div>
  );
}

export default App;

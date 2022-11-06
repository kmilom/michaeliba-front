import { Container } from 'react-bootstrap';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/formulario" element={<Formulario />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="administrar-usuarios" element={<AdministrarUsuarios />} />
                <Route path="gestionar-asambleas" element={<GestionarAsambleas />} />
                <Route path="gestionar-asambleas/asamblea/:idAsamblea" element={<Asamblea />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>        
      </Container>
    </div>
  );
}

export default App;

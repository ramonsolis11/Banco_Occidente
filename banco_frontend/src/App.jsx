import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Clientes from './components/Clientes';
import Transacciones from './components/Transacciones';
import Agencias from './components/Agencias';
import './assets/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/transacciones" element={<Transacciones />} />
        <Route path="/agencias" element={<Agencias />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

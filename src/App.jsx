import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Curriculo from './pages/Curriculo';
import JogoDaSenha from './pages/JogoDaSenha';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Curriculo />} />
          <Route path="/jogo" element={<JogoDaSenha />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;

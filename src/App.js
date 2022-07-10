import './App.css';
import { Header } from './shared/components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/homepage/Homepage';
import ProjectContainer from './pages/homepage/project/ProjectContainer';
import SkillContainer from './pages/homepage/Skills/SkillContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Project" element={<ProjectContainer />} />
          <Route path="/Skills" element={<SkillContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ongoing from './pages/Ongoing';
import EpisodePlayer from './pages/EpisodePlayer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* The 'element' prop is now used in v6 */}
        <Route path="/" element={<Ongoing />} />
        <Route path="/anime/player" element={<EpisodePlayer />} />
      </Routes>
    </Router>
  );
};

export default App;

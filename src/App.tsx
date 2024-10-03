import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ongoing from './pages/Ongoing'; // Page showing ongoing anime
import Movies from './pages/Movies'; // Page showing movies
import Completed from './pages/Completed'; // Page showing completed anime
import EpisodePlayer from './pages/EpisodePlayer'; // Component for playing specific anime episodes
import Navbar from './components/Navbar'; // Your Navbar component, if applicable

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Optional: Navigation Bar */}
      <Routes>
        {/* Define your routes for different pages */}
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/completed" element={<Completed />} />

        {/* Define the route for watching specific anime episodes */}
        <Route path="/anime/player" element={<EpisodePlayer />} /> {/* Episode player page */}

        {/* Optionally, add a default route or redirect */}
        <Route path="*" element={<Ongoing />} /> {/* Redirect to Ongoing page by default */}
      </Routes>
    </Router>
  );
};

export default App;

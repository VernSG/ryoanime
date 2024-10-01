// pages/Genres.tsx
import React, { useEffect, useState } from 'react';
import { fetchAnimeData } from '../utils/api';

interface Genre {
  genre_slug: string;
  genre_title: string;
}

const Genres: React.FC = () => {
  const [genresList, setGenresList] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimeData('anime/genres')
      .then(data => {
        setGenresList(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {genresList.map((genre) => (
        <div key={genre.genre_slug} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">{genre.genre_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Genres;

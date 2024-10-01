// pages/Movies.tsx
import React, { useEffect, useState } from 'react';
import { fetchAnimeData } from '../utils/api';

interface Movie {
  slug: string;
  title: string;
  episode: string;
  image: string;
}

const Movies: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimeData('anime/movies')
      .then(data => {
        setMoviesList(data);
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
      {moviesList.map((movie) => (
        <div key={movie.slug} className="p-4 bg-white rounded shadow">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p>Episode: {movie.episode}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;

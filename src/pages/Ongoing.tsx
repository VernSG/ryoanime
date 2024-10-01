import React, { useEffect, useState } from 'react';
import { fetchAnimeData } from '../utils/api';
import { Link } from 'react-router-dom';

interface Anime {
  slug: string;
  title: string;
  episode: string;
  image: string;
  type: string[];
}

const Ongoing: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimeData('ongoing')
      .then((response) => {
        if (response && response.data && Array.isArray(response.data)) {
          setAnimeList(response.data);
        } else {
          setError('No data available or invalid response format');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Failed to fetch data: ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {animeList.map((anime) => (
        <div key={anime.slug} className="p-4 bg-white rounded shadow">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="text-xl font-bold">
            {/* Create a link to the episode player page */}
            <Link to={`/anime/player?slug=${encodeURIComponent(anime.slug)}`}>
              {anime.title}
            </Link>
          </h2>
          <p>Episode: {anime.episode}</p>
          <p>Type: {anime.type.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Ongoing;

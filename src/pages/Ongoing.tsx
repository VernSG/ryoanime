import React, { useEffect, useState } from 'react';
import { fetchAnimeData } from '../utils/api';
import AnimeCard from '../components/AnimeCard';

interface Anime {
  slug: string;
  title: string;
  episode: string;
  image: string;
  viewers: number;
  rating: number;
  description: string;
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
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animeList.map((anime) => (
          <AnimeCard key={anime.slug} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Ongoing;

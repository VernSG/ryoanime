import React from 'react';
import { Link } from 'react-router-dom';

interface AnimeCardProps {
  anime: {
    slug: string;
    title: string;
    episode: string;
    viewers: number;
    rating: number;
    description: string;
    image: string;
  };
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Link to={`/anime/player?slug=${encodeURIComponent(anime.slug)}`}>
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-48 object-cover rounded mb-2"
        />
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            Ep {anime.episode}
          </span>
          <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {anime.viewers} views
          </span>
          <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {anime.rating}/10
          </span>
        </div>
        <h2 className="text-lg font-bold mb-2">{anime.title}</h2>
        <p>{anime.description}</p>
      </div>
    </Link>
  );
};

export default AnimeCard;

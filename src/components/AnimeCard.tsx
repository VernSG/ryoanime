import React from 'react';

interface AnimeCardProps {
  anime: any;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-lg font-bold">{anime.title}</h2>
      <p>{anime.description}</p>
    </div>
  );
};

export default AnimeCard;

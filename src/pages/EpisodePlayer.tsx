import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EpisodePlayer: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Helper function to get query parameters from the URL
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const episodeSlug = query.get('slug'); // Extract the 'slug' from query parameters

  useEffect(() => {
    if (!episodeSlug) {
      setError('Invalid episode slug');
      setLoading(false);
      return;
    }

    // Assuming the 'slug' contains the full URL to the episode video page
    setVideoUrl(episodeSlug);
    setLoading(false);
  }, [episodeSlug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Now Playing</h2>

      {/* Embed the video from the URL */}
      {videoUrl && (
        <iframe
          src={videoUrl}
          title="Anime Episode Player"
          width="100%"
          height="600px"
          allowFullScreen
          className="rounded"
        ></iframe>
      )}
    </div>
  );
};

export default EpisodePlayer;

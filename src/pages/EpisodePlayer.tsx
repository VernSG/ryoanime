import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Define the shape of the anime and episode data based on your API response
interface Episode {
  title: string;
  images: string;
  descriptions: string;
  episode_list: Array<{ episodeId: string; epsTitle: string }>; // Adjust according to your actual data structure
}

const EpisodePlayer: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get('slug'); // Get the slug from the query parameters

  // State to store the episode data
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch episode data based on the slug
  useEffect(() => {
    const fetchEpisodeData = async () => {
      if (!slug) {
        setError('No episode slug provided');
        setLoading(false);
        return;
      }
    
      try {
        const url = `http://localhost:8000/api/v2/anime/${slug}`;
        console.log(`Fetching episode data from: ${url}`);
        
        const response = await fetch(url);
        console.log(response); // Log the response object
    
        const data = await response.json();
    
        if (response.ok) {
          setEpisode(data.data);
        } else {
          setError(`Failed to load episode: ${data.message || 'Unknown error'}`);
        }
      } catch (error) {
        setError(`Error fetching episode data`);
      } finally {
        setLoading(false);
      }
    };
    

    fetchEpisodeData();
  }, [slug]);

  // Handle loading state
  if (loading) {
    return <div>Loading episode...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle case where no episode data was found
  if (!episode) {
    return <div>No episode data available</div>;
  }

  return (
    <div className="w-[95%] md:w-[90%] m-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
        <div className="leftBar md:col-span-4">
          <div className="aspectVideo mb-3">
            <video width="100%" controls>
              {/* Replace with your video source if necessary */}
              <source src={episode.episode_list[0]?.episodeId} type="video/mp4" /> {/* Adjust accordingly */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-3 py-3 flex justify-between">
            <div className="episodeTitle">
              <h1 className="text-white text-lg font-semibold">{episode.title}</h1>
            </div>
            <div className="flex flex-col gap-3">
              {/* Here you can implement episode navigation if needed */}
              <select className="bg-[#232329] text-slate-200 px-4 py-2 rounded-md">
                {episode.episode_list.map((eps) => (
                  <option key={eps.episodeId} value={eps.episodeId}>
                    {eps.epsTitle}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="synopsis h-52 md:h-full overflow-y-scroll md:overflow-auto mt-10 bg-[#232329] px-6 py-5 rounded-md">
            <p className="text-white text-sm font-light">
              {episode.descriptions}
            </p>
          </div>
        </div>
        <div className="sideBar md:col-span-2">
          <div className="">
            <h1 className="text-white text-xl">Up Next</h1>
            <div className="episodeList px-1 md:px-3 py-5 mt-5 flex flex-col gap-4 md:gap-5 ">
              {episode.episode_list.map((eps) => (
                <a
                  href={`/anime/player?slug=${eps.episodeId}`} // Adjust based on your routing structure
                  className="bg-[#232329] px-3 py-3 rounded-md text-white ring-2 ring-[#f0683e] cursor-pointer md:py-4"
                  key={eps.episodeId}
                >
                  {eps.epsTitle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePlayer;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AnimeStream = () => {
  const { anime_id, anime_slug, episode_id } = useParams();
  const [episode, setEpisode] = useState<any>(null); // Define a proper type based on the response structure
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchEpisode() {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v2/anime/${anime_id}/${anime_slug}/episode/${episode_id}`
        );
        const dataResponse = await response.data;
        if (dataResponse?.status === "success") {
          setEpisode(dataResponse?.data);
        } else {
          console.log("Failed to retrieve episode details");
        }
      } catch (error) {
        console.log("Error fetching episode:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEpisode();
  }, [anime_id, anime_slug, episode_id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {episode ? (
        <div className="container mx-auto mt-20">
          <h1 className="font-sans font-lg font-medium">
            Episode {episode_id}: {episode.title}
          </h1>
          <div>
            <video
              src={episode.stream_url} // Assuming there's a URL for the stream
              controls
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : (
        <h1>Episode not found</h1>
      )}
    </>
  );
};

export default AnimeStream;

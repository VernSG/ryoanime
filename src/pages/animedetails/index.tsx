import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimeInfo, Episode } from "../../types/animedetails"; 

const AnimeDetails = () => {
  const { anime_id, anime_slug } = useParams();
  const [data, setData] = useState<AnimeInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchDataAnimeOnGoing() {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v2/anime/${anime_id}/${anime_slug}`
        );
        const dataResponse = await response?.data;
        console.log(dataResponse);
        if (dataResponse?.status === "success") {
          setData(dataResponse?.data);
        } else {
          console.log("Failed to retrieve anime details");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchDataAnimeOnGoing();
  }, [anime_id, anime_slug]);

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {loading ? (
            // DaisyUI Loading Spinner
            <div className="flex justify-center items-center">
              <button className="btn loading">Loading...</button>
            </div>
          ) : (
            data && (
              <>
                {/* Display anime details */}
                <div className="card w-full bg-base-100 shadow-xl">
                  <figure>
                    <img src={data.images} alt={data.title} className="rounded-lg" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>Type: {data.type}</p>
                    <p>Description: {data.descriptions}</p>
                    <p>Status: {data.status}</p>
                    <p>Release: {data.release}</p>
                    <p>Studio: {data.studio}</p>
                    <p>Total Episodes: {data.total_eps}</p>
                    <p>Rating: {data.ratings}</p>
                  </div>
                </div>

                {/* Simple Episode List */}
                <div>
                  <h2 className="font-sans font-lg font-medium mb-4">Episodes</h2>
                  <ul className="list-disc pl-5">
                    {data.episode_list.map((episode: Episode) => (
                      <li key={episode.episodeId} className="mb-2">
                        <Link
                          to={`../${episode.episodeId}`} 
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Episode {episode.epsTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {data.has_next.has_next_page && (
                    <p className="mt-4">
                      More episodes available:{" "}
                      <a href={data.has_next.has_next_link} className="text-blue-500 hover:text-blue-700 underline">
                        Next Page
                      </a>
                    </p>
                  )}
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AnimeDetails;

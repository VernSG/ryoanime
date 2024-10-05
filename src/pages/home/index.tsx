import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type AnimeOngoingTypes = {
  episode: string;
  image: string;
  slug: string;
  title: string; // Dynamically fetched title
  type: Array<string>;
};

const Home = () => {
  const [data, setData] = useState<AnimeOngoingTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchDataAnimeOnGoing() {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/v2/anime/completed");
        const dataResponse = await response?.data;
        setLoading(true);
        console.log(dataResponse);
        if (dataResponse?.status === "success") {
          setData(dataResponse?.data);
        } else {
          console.log("Failed to retrieve anime list data");
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDataAnimeOnGoing();
  }, []);

  return (
    <>
      <div className="container w-[90%] mx-auto mt-20">
        <div className="grid lg:grid-cols-5 lg:gap-10 gap-5">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.map((item, index) => (
              <Link to={item?.slug} key={index}>
                <div className="hover:cursor-pointer">
                  <img src={item?.image} alt="img" className="w-full object-cover rounded-lg" loading="lazy" />
                  {/* Only the title is fetched dynamically now */}
                  <h1 className="font-sans font-semibold text-lg text-center px-1">
                    {item?.title} {/* Fetching the title dynamically */}
                  </h1>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

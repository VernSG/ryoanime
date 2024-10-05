import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import { Home, AnimeDetails } from "../pages"; // Assuming AnimeStream is your component for episode streaming
import AnimeStream from "../pages/animestream";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "anime/:anime_id/:anime_slug",
        element: <AnimeDetails />,
      },
      {
        path: "anime/:anime_id/:anime_slug/episode/:episode_id",
        element: <AnimeStream />, // Component for streaming episodes
      },      
    ],
  },
]);

import { lazy } from "react";

const Home = lazy(() => import("./home"));
const AnimeDetails = lazy(() => import("./animedetails"));

export { Home, AnimeDetails };

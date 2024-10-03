// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { fetchAnimeData } from "../utils/api"; // Use your existing fetchAnimeData
// import "react-html5video/dist/styles.css";
// import { DefaultPlayer as Video } from 'react-html5video';
// import Thumbnail from "../assets/Ryo Yamada.jpeg";


// const Watch: React.FC = () => {
//     const { animeId, animeName } = useParams<{ animeId: string; animeName: string }>();
    
//     const [animeDetails, setAnimeDetails] = useState<any>(null);
  
//     useEffect(() => {
//       async function fetchDetails() {
//         try {
//           const response = await fetchAnimeData(`anime/${animeId}`);
//           setAnimeDetails(response.data);
//         } catch (error) {
//           console.error('Error fetching anime details:', error);
//         }
//       }
  
//       fetchDetails();
//     }, [animeId]);
  
//     return (
//       <div>
//         <h1>{animeDetails?.title}</h1>
//         {/* Render other anime details here */}
//       </div>
//     );
//   };
  
//   export default Watch;
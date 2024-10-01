import express, { Application } from "express";
import animeIndo from "./src/routes/animeindoRoute";
import cors from "cors";
import limiter from "./src/middleware/rateLimit";
import "dotenv/config";
import morgan from "morgan";

const app: Application = express();
const port = process.env.PORT || 8000;

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Ensure this matches your frontend URL
    credentials: true, // Allow credentials
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
    exposedHeaders: ["Authorization"],
    methods: ["GET", "POST", "OPTIONS"], // Allow OPTIONS method for preflight requests
  })
);

app.use(express.json());
app.use(limiter);
app.use(morgan("combined"));

// Add a route to handle preflight OPTIONS requests for all routes
app.options("*", cors()); // This will respond to any OPTIONS requests

// Main routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to LuckyAnime Indo V2 & TypeScript Server",
    route: "Go to our route /api/v2/anime",
  });
});

app.use("/api/v2/anime", animeIndo);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Your favorite songs
const myFavoriteSongs = [
  "As It Was",
  "Blinding Lights",
  "Style",
  "Perfect",
  "Viva La Vida",
  "Shivers",
  "Opalite",
  "Watermelon Sugar",
  "Soda Pop",
  "Bye Bye Bye",
  "Levitating"
];

// Route 1 → Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Route 2 → Game round
app.get("/game", async (req, res) => {
  try {
    // Pick a random favorite
    const randomSong = myFavoriteSongs[Math.floor(Math.random() * myFavoriteSongs.length)];

    // Fetch from iTunes
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(randomSong)}&entity=song&limit=1`;
    const response = await axios.get(url);
    const correctSong = response.data.results[0];

    // Get wrong answers
    let wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      const random = myFavoriteSongs[Math.floor(Math.random() * myFavoriteSongs.length)];
      if (random !== randomSong && !wrongAnswers.includes(random)) {
        wrongAnswers.push(random);
      }
    }

    // Combine + shuffle options
    const options = [correctSong.trackName, ...wrongAnswers].sort(() => Math.random() - 0.5);

    res.render("game", { correctSong, options });
  } catch (error) {
    console.error(error);
    res.send("Error fetching song from API");
  }
});

app.listen(port, () => console.log(`🎧 Server running on http://localhost:${port}`));

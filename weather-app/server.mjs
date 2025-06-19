import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).send("City is required");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching weather");
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

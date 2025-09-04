const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

const { getRecommendation } = require('./recommendationLogic');
const { getChatbotResponse } = require('./chatbotLogic');

app.use(express.static('public'));
app.use(express.json());

app.post('/recommend', async (req, res) => {
  const { city, soil, ph } = req.body;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();
    const temp = weatherData.main.temp;
    const humidity = weatherData.main.humidity;

    const { crop, fertilizer, irrigation } = getRecommendation(soil, temp, humidity, ph);
    res.json({ crop, fertilizer, irrigation });
  } catch (error) {
    res.status(500).json({ error: 'Weather data fetch failed' });
  }
});

app.post('/chatbot', (req, res) => {
  const { message } = req.body;
  const reply = getChatbotResponse(message);
  res.json({ reply });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

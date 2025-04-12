# 🌦️ Real-Time Weather Dashboard - 

A full-stack real-time weather dashboard built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

---

 ✨ Features

- 🔍 Search weather by city name
- 📊 Real-time weather data using OpenWeatherMap API
- 🌬 Displays temperature, condition, humidity, wind speed, icon
- ❌ Error handling for invalid or empty city
- 📦 MERN Stack based architecture
- ✨ Clean and responsive UI

---

📁 Folder Structure

```
weather-dashboard/
├── client/           # React frontend
│   └── src/
│       ├── components/
│       │   ├── SearchBar.jsx
│       │   └── WeatherCard.jsx
│       ├── App.js
│       └── index.js
├── server/           # Node.js backend
│   ├── routes/
│   │   └── weather.js
│   ├── .env
│   └── server.js
├── .gitignore
└── README.md
```

---

🛠️ Installation & Setup

🔧 Prerequisites
- Node.js installed
- OpenWeatherMap API key

⚙️ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
API_KEY=your_openweathermap_api_key
```

Start the server:
```bash
node server.js
```

📅 Server runs at: `http://localhost:5000`

---

💻 Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm start
```

📅 React app runs at: `http://localhost:3000`

---

🧰 Test API

To test the API directly in browser:
```
http://localhost:5000/weather?city=London
```

---


🧠 Future Enhancements (Optional)

- 🌙 Dark/Light mode toggle
- 🗓 Show 5-day forecast
- 🔍 City autocomplete using GeoDB API
- 📂 Store search history in `localStorage`
- 🚀 Deploy backend (Render) and frontend (Vercel or Netlify)




# 🌤️ Weather App

A simple weather application that fetches and displays real-time weather data for a selected city. The app uses an Express.js server and serves a responsive front-end with HTML, CSS, and JavaScript.

---

## 🚀 Features

- Search for current weather by city name
- Displays temperature, conditions, and location info
- Express.js backend with clean project structure
- Responsive and user-friendly interface
- Static file serving from the `/public` directory

---

## 🗂️ Project Structure

```

weather-app/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── \[background images...]
│   ├── script/
│   │   └── script.js
│   └── index.html
├── server.mjs
├── package.json
├── package-lock.json
└── .gitignore

````

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js with Express.js
- **External APIs**: (e.g., OpenWeather API – optional if used)

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node server.mjs
   ```

4. Open your browser and go to:

   ```
   http://localhost:3000
   ```

---

## ⚙️ How It Works

* The server is powered by **Express.js**, serving static files from the `/public` directory.
* When a user enters a city name, the frontend sends a request to a weather API (handled in `script.js`).
* The weather data is fetched client-side (or server-side if you prefer) and rendered dynamically.

---

## 📁 Example `.gitignore`

```
node_modules/
.env
```

---

## 📌 Future Improvements

* Add 5-day forecast feature
* Geolocation-based weather lookup
* Improve UI with animations and transitions
* Save recent searches using localStorage

---

## 🧑‍💻 Author

> [GitHub](https://github.com/lee-alt-add)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

import { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherAPI";
import { WeatherCard } from "./components/WeatherCard";
import { SearchBar } from "./components/SearchBar";
import { WeatherData } from "./types/weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Colombo");
  const [query, setQuery] = useState("Colombo");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchWeather(city)
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [city]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(query);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="app">
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      <h1 className="title">🌤️ Weather Reporter</h1>
      <SearchBar query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {!loading && weather && <WeatherCard data={weather} />}
      {!loading && !weather && <p>Failed to load weather data.</p>}
    </div>
  );
}

export default App;

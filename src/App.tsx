import { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherAPI";
import { WeatherCard } from "./components/WeatherCard";
import { WeatherData } from "./types/weather";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Colombo");
  const [query, setQuery] = useState("Colombo");

  useEffect(() => {
    fetchWeather("Colombo")
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchWeather(city)
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [city]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(query);
  };

  if (loading) return <p>Loading...</p>;
  if (!weather) return <p>Failed to load weather data.</p>;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Simple Weather Reporter</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
          required
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit">Search</button>
      </form>

      <WeatherCard data={weather} />
    </div>
  );
}

export default App;

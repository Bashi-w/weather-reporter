import { useEffect, useState } from 'react';
import { fetchWeather } from './services/weatherAPI';
import { WeatherCard } from './components/WeatherCard';
import { WeatherData } from './types/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather('Colombo')
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!weather) return <p>Failed to load weather data.</p>;

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Simple Weather Reporter</h1>
      <WeatherCard data={weather} />
    </div>
  );
}

export default App;

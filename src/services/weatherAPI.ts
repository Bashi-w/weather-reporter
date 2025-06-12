const BASE_URL = 'https://api.weatherapi.com/v1';

export async function fetchWeather(city: string) {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `${BASE_URL}/current.json?key=${key}&q=${city}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
}

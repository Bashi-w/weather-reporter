import { WeatherData } from "../types/weather";

interface Props {
  data: WeatherData;
}

export const WeatherCard = ({ data }: Props) => (
  <div className="weather-card">
    <h2>
      {data.location.name}, {data.location.country}
    </h2>
    <img
      src={data.current.condition.icon}
      alt={data.current.condition.text}
      className="weather-icon"
    />
    <p>{data.current.condition.text}</p>
    <div className="weather-grid">
      <p>🌡️ Temp: {data.current.temp_c}°C</p>
      <p>🌡️ Feels Like: {data.current.feelslike_c}°C</p>
      <p>💧 Humidity: {data.current.humidity}%</p>
      <p>💨 Wind: {data.current.wind_kph} kph</p>
      <p>🌫️ Visibility: {data.current.vis_km} km</p>
      <p>🔆 UV Index: {data.current.uv}</p>
      <p>💡 Pressure: {data.current.pressure_mb} mb</p>
      <p>☁️ Cloud Cover: {data.current.cloud}%</p>
    </div>
  </div>
);

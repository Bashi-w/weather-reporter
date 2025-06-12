import { WeatherData } from "../types/weather";

interface Props {
  data: WeatherData;
}

export const WeatherCard = ({ data }: Props) => (
  <div>
    <h2>
      Weather in {data.location.name}, {data.location.country}
    </h2>
    <p>🌡️ Temperature: {data.current.temp_c}°C</p>
    <p>💧 Humidity: {data.current.humidity}%</p>
    <p>💨 Wind Speed: {data.current.wind_kph} kph</p>
    <p>🌞 UV Index: {data.current.uv}</p>
    <img src={data.current.condition.icon} alt={data.current.condition.text} />
    <p>{data.current.condition.text}</p>
    <p>🌡️ Feels Like: {data.current.feelslike_c}°C</p>
    <p>🌫️ Visibility: {data.current.vis_km} km</p>
    <p>💡 Pressure: {data.current.pressure_mb} mb</p>
  </div>
);

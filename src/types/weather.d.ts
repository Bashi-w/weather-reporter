export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    uv: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

# Simple Weather Reporter

A clean, responsive React web app that fetches and displays the current weather for any city using the WeatherAPI. Designed with an elegant UI, dark mode, and smooth background effects.

---

## Features

- Fetches real-time weather data for any searched city (default: Colombo, Sri Lanka).
- Displays key metrics: Temperature, Feels Like, Humidity, Wind Speed, UV Index, Pressure, Visibility, and Cloud Cover.
- Responsive and visually appealing design with glassmorphism effect.
- Dark mode toggle for comfortable viewing in low light.
- Loading spinner while fetching data.
- Search bar for easy city lookup.
- Smooth hover animations and floating weather icon.

---

## Demo

[Live Demo Link](https://weather-reporter-alpha.vercel.app/) 

---

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm or yarn package manager
- WeatherAPI account and API key ([Sign up here](https://www.weatherapi.com/signup.aspx))

### Installation

Clone the repository:

```bash
git clone https://github.com/Bashi-w/weather-reporter.git
cd weather-reporter
```

Install dependencies:
```bash
npm install
```

Create a .env file in the root directory and add your WeatherAPI key:
```bash
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### Running Locally

Start the development server:
```bash
npm start
```

### Design Choices

- React functional components with hooks for state and lifecycle management.
- CSS glassmorphism style for a modern, clean UI.
- Responsive grid layout for weather metrics.
- Dark mode implemented by toggling a class on the body element.
- Avoided heavy UI libraries to keep bundle size small.
- Environment variables used for API key security.

### Challenges
- Balancing visual appeal with compact layout to avoid scrollbars.
- Implementing smooth animations without performance hits.
- Handling API errors gracefully with fallback messages.

### Future Improvements
- Add weather forecast for upcoming days.
- Integrate location-based auto-detection.
- Include more detailed weather metrics and charts.
- Add unit toggle (Celsius/Fahrenheit).
- Improve accessibility and internationalization.


import { useState } from "react";
import SearchInput from "./assets/components/SearchInput/SearchInput";
import WeatherCard from "./assets/components/WeatherCard/WeatherCard";
import SunriseAndSunset from "./assets/components/SunriseAndSunset/SunriseAndSunset";
import AirQuality from "./assets/components/AirQuality/AirQuality";

import DashboardGrid from "./assets/components/DashboardGrid/DashboardGrid";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function handleSearch() {
    if (!city) return;
    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=202ca396191d4d86b26211730250312&q=${city}&days=1&aqi=yes&lang=pt`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Cidade não encontrada: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function cityChange(e) {
    setCity(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <SearchInput
        onClick={handleSearch}
        city={city}
        onChange={cityChange}
      ></SearchInput>

      <DashboardGrid>
        <WeatherCard weather={weather}></WeatherCard>
        <SunriseAndSunset weather={weather}></SunriseAndSunset>
        <AirQuality weather={weather}></AirQuality>
      </DashboardGrid>
    </>
  );
}

export default App;

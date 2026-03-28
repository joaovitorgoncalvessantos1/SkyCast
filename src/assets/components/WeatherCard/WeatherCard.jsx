import styles from "./WeatherCard.module.css";

import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return <p>pesquise uma cidade</p>;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.city}>{weather.location.name}</h1>
        <p className={styles.date}>
          {new Date(weather?.location?.localtime).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <div className={styles.main}>
        <div className={styles.temperature}>
          <h2>{weather.current.temp_c}°C</h2>
          <p>{weather.current.condition.text}</p>
          <span>Sensação térmica: {weather.current.feelslike_c}°C</span>
        </div>

        <div className={styles.icon}>
          <img
          className={styles.icon}
            src={`https:${weather.current.condition.icon}`}
            alt="Ícone do clima"
          />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <p>Humidity</p>
          <span>{weather.current.humidity + "%"}</span>
        </div>

        <div className={styles.detailItem}>
          <p>Wind</p>
         <span>{weather?.current?.wind_kph + " km/h"}</span>
        </div>

        <div className={styles.detailItem}>
          <p>UV index</p>
          <span>{weather.current.uv}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

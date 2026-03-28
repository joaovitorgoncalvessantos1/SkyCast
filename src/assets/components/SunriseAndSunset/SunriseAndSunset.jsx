import styles from "./SunriseAndSunset.module.css";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

import React from "react";

function SunriseAndSunset({ weather }) {
  if (!weather) return;
  return (
    <div className={styles.SunriseAndSunset}>

      <div className={styles.conteiner}>
        <h3>Nascer do sol </h3>
        <span>
          {" "}
          <BsSunriseFill className={styles.icon} />
          {weather?.forecast?.forecastday?.[0]?.astro?.sunrise}
        </span>
      </div>
      <div className={styles.conteiner}>
        <h3>Pôr do sol </h3>
        <span>
          <BsSunsetFill className={styles.icon} />
          {weather?.forecast?.forecastday?.[0]?.astro?.sunset}
        </span>
      </div>
    </div>
  );
}

export default SunriseAndSunset;

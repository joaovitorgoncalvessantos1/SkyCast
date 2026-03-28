import styles from "./AirQuality.module.css";
import React from "react";
import { FaCircle } from "react-icons/fa";

function AirQuality({ weather }) {
  function getAirQuality(index) {
    switch (index) {
      case 1:
        return { text: "Boa", color: "#22c55e" };
      case 2:
        return { text: "Moderada", color: "#eab308" };
      case 3:
        return { text: "Sensíveis", color: "#f97316" };
      case 4:
        return { text: "Ruim", color: "#ef4444" };
      case 5:
        return { text: "Muito ruim", color: "#a855f7" };
      case 6:
        return { text: "Perigosa", color: "#1f2937" };
      default:
        return { text: "N/A", color: "#9ca3af" };
    }
  }

  if (!weather?.current?.air_quality) return null;

const epaIndex = weather.current.air_quality["us-epa-index"];
const quality = getAirQuality(epaIndex);

const percentage = (epaIndex / 6) * 100;

const circumference = 188;
const offset = circumference - (circumference * percentage) / 100;
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <svg width="80" height="80">
          <circle cx="40" cy="40" r="30" className={styles.bg} />
          <circle
            cx="40"
            cy="40"
            r="30"
            className={styles.progress}
            stroke={quality.color}
            style={{
              strokeDashoffset: offset,
            }}
          />
        </svg>

    
        <span className={styles.value}>{epaIndex}/6</span>
      </div>

      <h3 className={styles.title}>🌫️ Qualidade do ar</h3>

      <div className={styles.content}>
        <div className={styles.status}>
          <FaCircle color={quality.color} size={12} />
          <span>{quality.text}</span>
        </div>
      </div>
    </div>
  );
}

export default AirQuality;

import React from "react";
import Eye from "./Eye";
import styles from "./character.module.css";

export default function Character({ reaction, color, variant = "rectangle", tilted = false }) {
  
  const getEyeMode = () => {
    switch (reaction) {
      case "side": return "side";
      case "closed": return "closed";
      case "surprise": return "surprise";
      case "submit": return "happy";
      default: return "track";
    }
  };

  return (
    <div 
      // Aplica a classe base .character E a classe da variante (ex: styles.rectangle)
      className={`${styles.character} ${styles[variant]} ${tilted ? styles.tilted : ''}`} 
      style={{ backgroundColor: color }}
    >
      <div className={styles.eyesRow}>
        <Eye mode={getEyeMode()} />
        <Eye mode={getEyeMode()} />
      </div>

      <div className={`${styles.mouth} ${styles[reaction] || styles.idle}`} />
    </div>
  );
}
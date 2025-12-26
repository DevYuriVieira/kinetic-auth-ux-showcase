import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        padding: '10px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s'
      }}
      title="Alternar Tema"
    >
      {/* Muda o ícone: Lua cheia pro escuro, Sol pro claro */}
      {dark ? "🌚" : "☀️"}
    </button>
  );
}
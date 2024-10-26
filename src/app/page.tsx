"use client";
import { useState } from "react";

export default function Home() {
  const [theme,setTheme] = useState("light");

  return (
    <div>
      <header className={`w-full border-2 border-red-700 h-80 ${ theme === "light" ? "header-white" : "header-dark" }`}></header>
      <button
        onClick={() => {
          setTheme((previousValue) => (previousValue === "light" ? "dark" : "light"));
        }}
      >Mudar tema</button>
    </div>
  );
} 
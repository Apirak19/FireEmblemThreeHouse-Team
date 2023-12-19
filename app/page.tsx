"use client"
import React, {useState} from "react";
import data from './data.json'

export default function page() {
  const [characterData, setCharacterData] = useState([])
  const fetchData = async () => {
    const response = await fetch("http://localhost3000")
    const data = await response.json()
}

  return (
    <main className="min-h-screen">
      <h1 className="text-5xl font-bold text-center p-3 pt-5">
        Fire Emblem Three Houses
      </h1>
      <h2 className="text-xl font-bold text-center p-1">
        Class and Ability Guide
      </h2>
      <div>
        {Object(data).map(() => (
          <div>
            
          </div>
        ))}
      </div>
    </main>
  );
}

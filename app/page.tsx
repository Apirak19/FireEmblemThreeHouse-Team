"use client";
import React from "react";

import characterData from "./data.json";

export default function page() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl font-bold text-center p-3 pt-5">
        Fire Emblem Three Houses
      </h1>
      <h2 className="text-xl font-bold text-center p-1">
        Class and Ability Guide
      </h2>
      <div>
        {characterData.map((character) => (
          <div key={character.name} className="m-5">
            <h1 className="text-2xl font-semibold">{character.name}</h1>
            <div className="p-3 pb-0">
              <span className="font-semibold">Type: </span>
              <span className="inline-block">{ Array.isArray(character.type)? character.type.join(", ") : character.type}</span>
            </div>
            <div className="px-3">
              <span className="font-semibold">Class: </span>
              <span className="inline-block">
                {character.firstClass}
                {" => "}
                {character.intermediateClasses}
                {" => "}
                {character.advancedClasses}
                {" => "}
                {character.masterClasses}
              </span>
            </div>
            <div className="px-3">
              <span className="font-semibold">Abilities: </span>
              <span>
                {character.abilities.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

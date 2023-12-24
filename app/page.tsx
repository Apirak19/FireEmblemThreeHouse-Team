"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import characterData from "./data.json";


export default function page() {
  const Character = [...characterData].sort((a, b) =>
  a.name.localeCompare(b.name)
  );
  
  const characterList = Character.map((item) => (
    <Link key={item.name} to={item.name} smooth={true}
    duration={200}> {item.name}</Link>
    )).join(", ")
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Link
        className="fixed bottom-5 right-5"
        to="top"
        smooth={true}
        duration={200}
      >
        <button className="bg-blue-950 rounded-full w-14 h-14">
          <KeyboardArrowUpIcon fontSize="large" />
        </button>
      </Link>
      <h1 className="text-5xl font-bold text-center pt-5" id="top">
        Fire Emblem Three Houses
      </h1>
      <h2 className="text-xl font-bold text-center pt-5">
        Class and Ability Guide
      </h2>
      <div>
      {characterList}
        </div>
      <div>
        {Character.map((character, index) => (
          <div
            key={character.name}
            id={character.name}
            className="my-10 bg-slate-700 p-10 rounded-3xl w-[700px] flex flex-col justify-center"
          >
            <h1 className="text-2xl font-semibold text-pink-200 mb-3">
              {index + 1}. {character.name}
            </h1>
            <img
              src={character.image}
              alt=""
              className="rounded-full w-[200px]"
            />
            <div className="p-3 pb-0">
              <p className="font-semibold w-[125px] inline-block">Type: </p>
              <span className="inline-block">
                {Array.isArray(character.type)
                  ? character.type.join(", ")
                  : character.type}
              </span>
            </div>
            <div className="px-3">
              <p className="font-semibold w-[125px] inline-block">Class: </p>
              <span className="text-slate-300">{character.firstClass}</span>
              {" => "}
              <span className="text-green-500">
                {character.beginnerClasses}
              </span>
              {" => "}
              <span className="text-blue-500">
                {character.intermediateClasses}
              </span>
              {" => "}
              <span className="text-purple-500">
                {character.advancedClasses}
              </span>
              {" => "}
              <span className="text-yellow-600">{character.masterClasses}</span>
            </div>
            {character.classAbilities && (
              <div className="px-3">
                <p className="font-semibold w-[125px] inline-block">
                  Class Abilities:
                </p>
                <span className="text-red-500">
                  {character.classAbilities.join(", ")}
                </span>
              </div>
            )}
            <p className="px-3 w-[600px]">
              <span className="font-semibold w-[125px] border-4">
                Abilities:
              </span>
              <span className="border-4 w-[375px] inline-block">
                {character.abilities.join(", ")}
              </span>
            </p>
            <div className="px-3">
              <p className="font-semibold w-[125px] inline-block">
                Requirements:
              </p>
              <span className="text-red-500">
                {character.requirements.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

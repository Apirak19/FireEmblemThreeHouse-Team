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
    <Link
      className="cursor-pointer"
      key={item.name}
      to={item.name}
      smooth={true}
      duration={200}
    >
      {" "}
      {item.name}
    </Link>
  ));
  return (
    <main className="min-h-screen flex flex-col items-center overflow-hidden box-border">
      <Link
        className="fixed bottom-5 right-5"
        to="top"
        smooth={true}
        duration={200}
      >
        <button className="bg-slate-400 rounded-full w-14 h-14">
          <KeyboardArrowUpIcon fontSize="large" sx={{ color: "white" }} />
        </button>
      </Link>

      {/* -------------------------- Header -------------------------- */}
      <h1 className="text-5xl font-bold text-center mt-5" id="top">
        Fire Emblem Three Houses
      </h1>
      <h2 className="text-xl font-bold text-center mt-5">
        Class and Ability Guide
      </h2>
      <div className="mt-10 px-10">{characterList}</div>

      {/* -------------------------- Character -------------------------- */}
      <div>
        {Character.map((character, index) => (
          <div
            key={character.name}
            id={character.name}
            className="my-10 mx-10 bg-slate-700 p-10 rounded-3xl w-[750px] flex flex-col justify-center"
          >
            <h1 className="text-2xl font-semibold text-pink-200 my-1">
              {character.name}
            </h1>
            {/* -------------------------- Line -------------------------- */}
            <div className="w-full bg-slate-300 h-1 blur-[1.5px] mb-3"></div>

            <div className="flex">
              <img
                src={character.image}
                alt={character.name}
                title={character.name}
                className="rounded-full w-[150px]"
              />
            </div>
            <div className="data-section">
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
                <p className="inline-block">
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
                  <span className="text-yellow-600">
                    {character.masterClasses}
                  </span>
                </p>
              </div>
              {character.classAbilities && (
                <div className="px-3">
                  <p className="font-semibold w-[125px] inline-block">
                    Class Abilities:
                  </p>
                  <p className="inline-block">
                    <span className="text-red-500 ">
                      {character.classAbilities.join(", ")}
                    </span>
                  </p>
                </div>
              )}
              <p className="px-3 w-[600px]">
                <span className="font-semibold w-[125px] inline-block">
                  Abilities:
                </span>
                <span className="inline-block">
                  {character.abilities.join(", ")}
                </span>
              </p>
              <div className="px-3">
                <p className="font-semibold w-[125px] inline-block">
                  Requirements:
                </p>
                <span className="text-red-500 inline-block">
                  {character.requirements.join(", ")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CharacterSection from "./character";

import characterData from "./data.json";

export default function page() {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const updateSelected = (newSelected: any) => {
    setSelectedCharacter(newSelected);
  };
  const Character = [...characterData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const characterList = Character.map((item) => (
    <Link
      className="mx-1 cursor-pointer hover:text-yellow-500 hover:underline"
      key={item.name}
      to={item.name}
      smooth={true}
      duration={200}
      onClick={() => {
        setSelectedCharacter(item.name);
      }}
    >
      {item.name}
    </Link>
  ));
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      {/* ------------- background ------------- */}
      <div className="w-[75vw] min-h-screen fixed top-0 bg-slate-800 bg-opacity-75 blur-xl -z-50"></div>
      <div className="flex flex-col">
        <Link
          className="fixed bottom-5 right-5"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          to=""
          smooth={true}
          duration={200}
        >
          <button className="bg-slate-400 rounded-full w-[5vw] h-[5vw]">
            <KeyboardArrowUpIcon fontSize="large" sx={{ color: "white" }} />
          </button>
        </Link>

        {/* -------------------------- Header -------------------------- */}
        <h1
          className="text-5xl font-bold text-center mt-10 text-white"
        >
          Fire Emblem Three Houses
        </h1>
        <h2 className="text-xl text-white font-bold text-center mt-5">
          Class and Ability Guide for Each Character
        </h2>
        <h2 className="text-xl underline text-white font-bold text-start mt-5">
          List of Characters
        </h2>
        <div className="w-[750px] flex flex-wrap mt-2 text-white">
          {characterList}
        </div>
        <h1 className="text-yellow-500 font-bold text-center mt-5">
          **The details are based on characters' ideal end-game status**
        </h1>
      </div>
      {/* -------------------------- Character -------------------------- */}

      <CharacterSection selectedCharacter={selectedCharacter} />
    </main>
  );
}

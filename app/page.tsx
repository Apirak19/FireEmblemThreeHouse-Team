"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CharacterSection from "./character";

import characterData from "./data.json";

export default function page() {
  const Character = [...characterData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const characterList = Character.map((item) => (
    <Link
      className="m-1 cursor-pointer hover:text-yellow-500 hover:underline"
      key={item.name}
      to={item.name}
      smooth={true}
      duration={200}
    >
      {item.name}
    </Link>
  ));
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[750px] bg-yellow-100 flex flex-col">
      
      <Link
        className="fixed bottom-5 right-5"
        onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
        to=""
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
      <div className="w-[750px] bg-yellow-100 flex flex-wrap mt-5">{characterList}</div>
      </div>

      {/* -------------------------- Character -------------------------- */}
      
      <CharacterSection/>
      
    </main>
  );
}

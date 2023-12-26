"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CharacterSection from "./character";
import './globals.css'

import characterData from "./data.json";

export default function page() {
  const [selectedCharacter, setSelectedCharacter] = useState("Byleth");
  const updateSelected = (newSelected: any) => {
    setSelectedCharacter(newSelected);
  };
  const Character = [...characterData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const characterList = Character.map((item) => (
    <div key={item.name}>
      <button className="w-[300px] hover:bg-slate-300 hover:text-slate-700 rounded-sm flex flex-col justify-center items-center text-center py-[7px]">
        <Link
          className=" w-[300px] text-xl flex flex-col justify-center items-center"
          to={item.name}
          smooth={true}
          duration={200}
          onClick={() => {
            setSelectedCharacter(item.name);
          }}
        >
          <p className="w-[200px] text-start">{item.name}</p>
        </Link>
      </button>
      <div className="w-full bg-slate-900 h-[1px] blur-[1px]"></div>
    </div>
  ));
  return (
    <main className="min-h-screen max-w-[1280px] mx-auto">
      {/* ------------- To Top ------------- */}
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
      {/* -------------------------- Sidebar -------------------------- */}

      <aside className="relative top-0 left-0 inline-block">
        <div
          className="w-[300px] list flex flex-col justify-start items-center bg-slate-700 text-white font-light rounded-md shadow-2xl fixed"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        >
          <h2 className="w-[300px] text-xl text-slate-700 font-bold mb-1 bg-slate-400 h-[100px] text-center">
            Characters
          </h2>
          <div className="h-max-[cal(100%-300px)] overflow-y-auto">{characterList}</div>
        </div>
      </aside>
      {/* -------------------------- Header -------------------------- */}
      <section className="max-w-[calc(100%-200px)] relative left-[150px] flex flex-col items-center justify-start -z-10">
        <div className="w-[60vw] min-h-screen fixed top-0 bg-slate-800 bg-opacity-75 blur-xl -z-50">
          {/* ------------- background ------------- */}
        </div>
        <h1 className="title text-5xl font-bold text-center mt-5 text-white">
          Fire Emblem Three Houses
        </h1>
        <h2 className="sub-title text-xl text-white font-bold text-center mt-1">
          Class and Ability Guide for Each Character
        </h2>

        <h1 className="text-yellow-500 font-bold text-center mt-1">
          **The details are based on characters' ideal end-game status**
        </h1>
        {/* -------------------------- Character -------------------------- */}

        <CharacterSection selectedCharacter={selectedCharacter} />
      </section>
    </main>
  );
}

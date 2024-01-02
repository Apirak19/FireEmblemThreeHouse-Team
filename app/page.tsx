"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CharacterSection from "./character";
import "./globals.css";

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
    <main>
      {/* ------------- To Top ------------- */}
      {/* <Link
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
      </Link> */}
      {/* -------------------------- Sidebar -------------------------- */}

      <aside className="">
        <div className="container rounded-xl overflow-hidden">
          <h2 className="w-[300px] text-xl text-slate-700 font-bold bg-slate-400 h-[75px] text-center flex justify-center items-center">
            Characters
          </h2>
          <div className="content w-[300px] flex flex-col bg-gray-600 text-white font-light shadow-sm ">
            {characterList}
          </div>
        </div>
      </aside>
      {/* -------------------------- Header -------------------------- */}
      <section className="max-w-[calc(100%-200px)] flex flex-col items-center justify-start col-span-2">
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

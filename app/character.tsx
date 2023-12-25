"use client";
import React, { useState } from "react";
import characterData from "./data.json";

const Character = [...characterData].sort((a, b) =>
  a.name.localeCompare(b.name)
);
export default function CharacterSection() {
   return (
      <div id="CharacterSection">
         {Character.map((character, index) => (
            <div
               key={character.name}
               id={character.name}
               className="my-10 mx-10 bg-yellow-100 p-5 rounded-3xl w-[750px] flex flex-col justify-center"
            >
               <h1 className="text-2xl font-light text-slate-900 my-1">
                  {character.name}
               </h1>
               {/* -------------------------- Line -------------------------- */}
               <div className="w-full bg-slate-900 h-[1px] blur-[1px]mb-[2px]"></div>
               <div className="w-full bg-yellow-900 h-[1px] blur-[2px] mb-3"></div>

               <div className="flex">
                  <img
                     src={character.image}
                     alt={character.name}
                     title={character.name}
                     className="rounded-full w-[150px] h-[150px]"
                  />
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
                        <span className="text-yellow-600">{character.masterClasses}</span>
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
            </div>
         ))}
      </div>
   );
}

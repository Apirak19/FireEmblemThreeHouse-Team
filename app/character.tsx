"use client";
import React, { useState } from "react";
import characterData from "./data.json";

const Character = [...characterData].sort((a, b) =>
  a.name.localeCompare(b.name)
);

interface CharacterSectionProps{
   selectedCharacter: any
}

const CharacterSection: React.FC<CharacterSectionProps> = ({ selectedCharacter }) =>{
   const FilterCharacter = Character.filter((item) => item.name === selectedCharacter)
      .map((character) => (
         <section
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
            {/* -------------------------- Detail -------------------------- */}
            <div className="flex">
               <img
                  src={character.image}
                  alt={character.name}
                  title={character.name}
                  className="rounded-full w-[150px] h-[150px]"
               />
               {/* -------------------------- Text -------------------------- */}
               <div className="data-section">
                  {/* -------------------------- Type -------------------------- */}
                  <article className="flex item-start max-w-[550px]">
                     <p className="pl-5 font-semibold w-[150px] inline-block">
                        Type:{" "}
                     </p>
                     <span className="inline-block">
                        {Array.isArray(character.type)
                           ? character.type.join(", ")
                           : character.type}
                     </span>
                  </article>
                  {/* -------------------------- Class -------------------------- */}
                  <article className="flex item-start max-w-[550px]">
                     <p className="pl-5 font-semibold w-[150px] inline-block">
                        Class:{" "}
                     </p>
                     <p className="flex flex-col">
                        <span className="text-slate-500">{character.firstClass}</span>
                        <span className="text-green-500">
                           {character.beginnerClasses}
                        </span>
                        <span className="text-blue-500">
                           {character.intermediateClasses}
                        </span>
                        <span className="text-purple-500">
                           {character.advancedClasses}
                        </span>
                        <span className="text-yellow-600">
                           {character.masterClasses}
                        </span>
                     </p>
                  </article>
                  {/* -------------------------- Class Abilities -------------------------- */}
                  {/* {character.classAbilities && (
                <div className="px-3">
                  <p className="pl-5 font-semibold w-[150px] inline-block">
                    Class Abilities:
                  </p>
                  <p className="inline-block">
                    <span className="text-red-500 ">
                      {character.classAbilities.join(", ")}
                    </span>
                  </p>
                </div>
              )} */}
                  {/* -------------------------- Abilities -------------------------- */}
                  <article className="flex item-start max-w-[550px]">
                     <p className="pl-5 font-semibold w-[150px] inline-block">
                        Abilities:
                     </p>
                     <div className="flex flex-col">
                        {character.abilities.map((ability) => (
                           <span>{ability}</span>
                        ))}
                     </div>
                  </article>
                  {/* -------------------------- Requirements -------------------------- */}
                  <article className="flex item-start max-w-[550px]">
                     <p className="pl-5 font-semibold w-[150px] inline-block">
                        Requirements:
                     </p>
                     <div className="flex flex-col">
                        {character.requirements.map((req) => (
                           <span className="text-red-500 inline-block">{req}</span>
                        ))}
                     </div>
                  </article>
               </div>
            </div>
         </section>
      ));

   return (
      <div>
      {FilterCharacter}
      </div>
   )
}

export default CharacterSection;
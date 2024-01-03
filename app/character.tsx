"use client";
import React, { useState } from "react";
import characterData from "./data.json";

const Character = [...characterData].sort((a, b) =>
  a.name.localeCompare(b.name)
);

interface CharacterSectionProps {
  selectedCharacter: any;
}

const CharacterSection: React.FC<CharacterSectionProps> = ({
  selectedCharacter,
}) => {
  const FilterCharacter = Character.filter(
    (item) => item.name === selectedCharacter
  ).map((character) => (
    <section key={character.name} id={character.name} className="card">
      <h1 className="text-2xl font-normal text-black my-1 text-start">
        {character.name}
      </h1>
      {/* -------------------------- Line -------------------------- */}
      <div className="w-full bg-black h-[1px] blur-[1px] mb-[2px] z-10"></div>
      <div className="w-full bg-yellow-900 h-[1px] blur-[1px] mb-3"></div>
      {/* -------------------------- Detail -------------------------- */}
      <div className="card-content flex justify-center items-start">
        <img
          src={character.image}
          alt={character.name}
          title={character.name}
          className="rounded-full w-[150px] h-[150px] object-cover"
        />
        <div className="detail ">
          {/* -------------------------- Type -------------------------- */}
          <span className="col-span-1 row-span-1 bg-slate-300">Type: </span>
          <span className="col-span-1 row-span-1 bg-slate-300">
            {Array.isArray(character.type)
              ? character.type.join(", ")
              : character.type}
          </span>

          {/* -------------------------- Class -------------------------- */}

          <span className="col-span-1 row-span-5 bg-slate-300">Class: </span>
          <span className="col-span-1 row-span-1 bg-slate-300">
            {character.firstClass}
          </span>

          
          <span className="col-span-1 row-span-1 bg-slate-300">
            {character.beginnerClasses}
          </span>

          
          <span className="col-span-1 row-span-1 bg-slate-300">
            {character.intermediateClasses}
          </span>

          
          <span className="col-span-1 row-span-1 bg-slate-300">
            {character.advancedClasses}
          </span>

          
          <span className="col-span-1 row-span-1 bg-slate-300">
            {character.masterClasses}
          </span>

          {/* -------------------------- Class Abilities -------------------------- */}
          {/* {character.classAbilities && (
                <div className="px-3">
                  <p className="pl-1 ml-4 font-semibold w-[150px] inline-block">
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
            <span className="col-span-1 row-span-5 bg-slate-300">
              Abilities:
            </span>
            
              {character.abilities.map((ability) => (
                <span className="col-span-1 row-span-1 bg-slate-300">{ability}</span>
              ))}
            
          {/* -------------------------- Requirements -------------------------- */}
            <span className={`col-span-1 row-span-${character.requirements.length} bg-slate-300`}>
              Requirements:
            </span>
              {character.requirements.map((req) => (
                <span className="col-span-1 row-span-1 bg-slate-300">{req}</span>
              ))}
        </div>
      </div>
    </section>
  ));

  return <div>{FilterCharacter}</div>;
};

export default CharacterSection;

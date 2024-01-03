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
      <h1 className="text-2xl font-normal text-black my-1 text-start mx-[20px]">
        {character.name}
      </h1>
      {/* -------------------------- Line -------------------------- */}
      <div className=" bg-black h-[1px] blur-[1px] mb-[2px] z-10 mx-[20px]"></div>
      <div className=" bg-yellow-900 h-[1px] blur-[1px] mb-3  mx-[20px]"></div>
      {/* -------------------------- Detail -------------------------- */}
      <div className="card-content flex justify-start items-start">
        <img
          src={character.image}
          alt={character.name}
          title={character.name}
          className="rounded-full w-[150px] h-[150px] object-cover mx-[10px]"
        />
        <div className="detail ">
          {/* -------------------------- Type -------------------------- */}
          <span className="card-text">Type: </span>
          <span className="card-text">
            {Array.isArray(character.type)
              ? character.type.join(", ")
              : character.type}
          </span>

          {/* -------------------------- Class -------------------------- */}

          <span className="col-span-1 row-span-5 bg-slate-300">Class: </span>
          <span className="card-text">
            {character.firstClass}
          </span>

          
          <span className="card-text">
            {character.beginnerClasses}
          </span>

          
          <span className="card-text">
            {character.intermediateClasses}
          </span>

          
          <span className="card-text">
            {character.advancedClasses}
          </span>

          
          <span className="card-text">
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
          <span className={`col-span-1 row-span-${character.abilities.length} bg-slate-300`}>
              Abilities:
            </span>
            
              {character.abilities.map((ability) => (
                <span className="card-text">{ability}</span>
              ))}
            
          {/* -------------------------- Requirements -------------------------- */}
            <span className={`col-span-1 row-span-${character.requirements.length} bg-slate-300`}>
              Requirements:
            </span>
              {character.requirements.map((req) => (
                <span className="card-text">{req}</span>
              ))}
        </div>
      </div>
      <div className="h-[2000px]">
        555
      </div>
    </section>
  ));

  return <div>{FilterCharacter}</div>;
};

export default CharacterSection;

"use client";
import React, { useState } from "react";
import characterData from "./data.json";

const Character = [...characterData].sort((a, b) =>
  a.name.localeCompare(b.name)
);

interface CharacterSectionProps {
  selectedCharacter: any;
  setSelectedCharacter: any;
}

const CharacterSection: React.FC<CharacterSectionProps> = ({
  selectedCharacter,
  setSelectedCharacter,
}) => {
  const FilterCharacter = Character.filter(
    (item) => item.name === selectedCharacter
  ).map((character) => (
    <section
      key={character.name}
      id={character.name}
      className="card bg-slate-300"
    >
        {/* -------------------------- Card -------------------------- */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-medium text-black mt-[15px] text-start mx-[20px]">
          {character.name}
        </h1>
        {/* -------------------------- Select -------------------------- */}
        <select
          name=""
          id=""
          defaultValue={selectedCharacter}
          onChange={(e) => {
            setSelectedCharacter(e.target.value);
          }}
        >
          {Character.map((character) => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
      </div>
      {/* -------------------------- Line -------------------------- */}
      <div className=" bg-black h-[1px] blur-[1px] mb-[2px] z-10 mx-[20px]"></div>
      <div className=" bg-yellow-900 h-[1px] blur-[1px] mb-3  mx-[20px]"></div>
      {/* -------------------------- Detail -------------------------- */}
      <div className="card-content flex justify-around items-start">
        <img
          src={character.image}
          alt={character.name}
          title={character.name}
          className="card-img"
        />
        <div className="bg-black rounded-2xl p-1">
          <div className="detail ">
            {/* -------------------------- Type -------------------------- */}
            <span className="card-text rounded-tl-xl">Type</span>
            <span className="card-text rounded-tr-xl">
              {Array.isArray(character.type)
                ? character.type.join(", ")
                : character.type}
            </span>

            {/* -------------------------- Class -------------------------- */}

            <span className="col-span-1 row-span-5 bg-slate-300 px-[10px]">
              Class
            </span>
            <span className="card-text text-green-800">
              {character.firstClass}
            </span>

            <span className="card-text text-blue-700">
              {character.beginnerClasses}
            </span>

            <span className="card-text text-purple-950">
              {character.intermediateClasses}
            </span>

            <span className="card-text text-red-700">
              {character.advancedClasses}
            </span>

            <span className="card-text text-yellow-700">
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
            <span
              className={`col-span-1 ${
                character.abilities.length == 5 && "row-span-5"
              } ${character.abilities.length == 6 && "row-span-6"} ${
                character.abilities.length == 7 && "row-span-7"
              } bg-slate-300 px-[10px]`}
            >
              Abilities
            </span>

            {character.abilities.map((ability) => (
              <span className="card-text">{ability}</span>
            ))}

            {/* -------------------------- Requirements -------------------------- */}
            <span
              className={`col-span-1 bg-slate-300 px-[10px] rounded-bl-xl ${
                character.requirements.length == 1 && "row-span-1"
              } ${character.requirements.length == 2 && "row-span-2"} ${
                character.requirements.length == 3 && "row-span-3"
              }`}
            >
              Requirements
            </span>
            {character.requirements.map((req, index) => (
              <span
                className={`card-text ${
                  index === character.requirements.length - 1 && "rounded-br-xl"
                }`}
              >
                {req}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  ));

  return <div>{FilterCharacter}</div>;
};

export default CharacterSection;

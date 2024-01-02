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
    <section
      key={character.name}
      id={character.name}
      className="my-3 mx-10 bg-slate-400 px-5 py-2 rounded-[2rem] w-[600px] h-[500px] flex flex-col justify-start"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
    >
      <h1 className="text-2xl font-normal text-black my-1">{character.name}</h1>
      {/* -------------------------- Line -------------------------- */}
      <div className="w-full bg-black h-[1px] blur-[1px] mb-[2px]"></div>
      <div className="w-full bg-yellow-900 h-[1px] blur-[1px] mb-3"></div>
      {/* -------------------------- Detail -------------------------- */}
      <div className="flex">
        <img
          src={character.image}
          alt={character.name}
          title={character.name}
          className="rounded-full w-[150px] h-[150px] object-cover"
        />
        {/* -------------------------- Text -------------------------- */}
        <div className="data-section">
          {/* -------------------------- Type -------------------------- */}
          <article className="flex item-start max-w-[550px]">
            <p className="ml-4 my-[1px] px-2 py-1 font-semibold w-[350px] bg-slate-300 ">
              <span className="w-[150px] pl-1 font-semibold ">Type: </span>
              <span className="pl-[100px]">
                {Array.isArray(character.type)
                  ? character.type.join(", ")
                  : character.type}
              </span>
            </p>
          </article>
          {/* -------------------------- Class -------------------------- */}
          <article className="flex flex-col item-start max-w-[550px]">
            <p className="ml-4 my-[1px] px-2 py-1 font-semibold w-[350px] bg-slate-300 ">
              <span className="w-[150px] pl-1 font-semibold ">Class: </span>
              <span className="text-slate-500 pl-[100px]">
                {character.firstClass}
              </span>
            </p>
            <p className="ml-4 my-[1px] px-2 py-1 font-semibold w-[350px] bg-slate-300 ">
              <span className="w-[150px] pl-1 font-semibold "></span>
              <span className="text-green-500 pl-[150px]">
                {character.beginnerClasses}
              </span>
            </p>
            <p className="ml-4 my-[1px] px-2 py-1 font-semibold w-[350px] bg-slate-300 ">
              <span className="w-[150px] pl-1 font-semibold "></span>
              <span className="text-blue-500 pl-[150px]">
                {character.intermediateClasses}
              </span>
            </p>
            <p className="ml-4 my-[1px] px-2 py-1 font-semibold w-[350px] bg-slate-300 ">
              <span className="w-[150px] pl-1 font-semibold "></span>
              <span className="text-purple-500 pl-[150px]">
                {character.advancedClasses}
              </span>
            </p>
            <p className="ml-4 my-[1px] px-2 py-1 font-semibold w-[350px] bg-slate-300 ">
              <span className="text-blue-500 pl-[100px]"></span>
            </p>
            <span className="text-purple-500 pl-[100px]"></span>
            <span className="text-yellow-600 pl-[100px]">
              {character.masterClasses}
            </span>
          </article>
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
          <article className="flex item-start max-w-[550px]">
            <p className="pl-1 ml-4 font-semibold w-[150px] inline-block">
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
            <p className="pl-1 ml-4 font-semibold w-[150px] inline-block">
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

  return <div>{FilterCharacter}</div>;
};

export default CharacterSection;

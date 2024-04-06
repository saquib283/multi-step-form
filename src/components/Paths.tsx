"use client";
import Image from "next/image";
import React, { useState } from "react";

interface pathType {
  title: string;
  text: string;
  image: string;
  popular: boolean;
}

export const path: pathType[] = [
  {
    title: "Foundational Math",
    text: "Build your foundational skills in algebra,geometry,and probability.",
    image: "/computer.png",
    popular: true,
  },
  {
    title: "Mathematical Thinking",
    text: "Build your foundational skills in algebra,geometry,and probability.",
    image: "/computer.png",
    popular: false,
  },
];

const Paths = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  return (
    <>
      {path.map((item, index) => {
        return (
          <div
            className={`w-72  relative flex justify-center rounded-md items-center border-[1px] cursor-pointer selection:bg-red-300 ${
              selectedIndex === index ? "border-yellow-500 shadow-lg" : ""
            }`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="text w-3/5 p-2 flex justify-center items-center flex-col">
              <p className="text-xs p-2">
                <span className="font-bold">{item.title} </span>
                {item.text}
              </p>
            </div>
            <div className="image flex justify-center items-center flex-wrap">
              <Image
                src={item.image}
                alt="not found"
                width={120}
                height={120}
              />
            </div>
            {item.popular && (
              <div className="absolute -top-4 ">
                <button className="text-[8px] font-bold w-24 h-6 rounded-2xl uppercase bg-yellow-500">
                  Most Popular
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Paths;

import React, { useState } from "react";
import { mathLevel } from "@/utils/data";
import Image from "next/image";

interface mathsProps {
  mathOptionSelected: boolean;
  setMathOptionSelected: (value: boolean) => void;
}

const MathComfortLevel = ({
  mathOptionSelected,
  setMathOptionSelected,
}: mathsProps) => {
  const [selected, setSelected] = useState<null | number>(null);
  const handleClick = (index: number) => {
    if (selected == null) {
      setMathOptionSelected(false);
    }
    setSelected(index);
    setMathOptionSelected(true);
  };
  return (
    <>
      {mathLevel.map((item, index) => {
        return (
          <div
            className={`cards size-28 md:size-40 rounded-sm shadow-sm border-[1px] border-gray-200 flex flex-col justify-center items-center ${
              selected === index
                ? "border-yellow-500 border-[2px] shadow-md"
                : ""
            }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="equation h-1/2 w-full flex justify-center">
              <Image
                src={item.image}
                height={80}
                width={80}
                alt="not forund"
                className="object-contain"
              />
            </div>
            <div className="texts text-[8px]  flex flex-col">
              <span className="font-bold text-center">{item.type}</span>
              <span className="text-gray-500 text-center">{item.level}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MathComfortLevel;

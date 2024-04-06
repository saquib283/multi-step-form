"use client"
import { interests } from "@/utils/data";
import { useState } from "react";
import Image from "next/image";
interface introProps {
  optionSelected:boolean,
  setOptionSelected:(value:boolean)=>void
}
const Interests = ({optionSelected ,setOptionSelected}:introProps) => {

  const [selected, setSelected] = useState<null | number>(null);

  const handleClick=(index:number)=>{
    if(selected==null){
      setOptionSelected(false);
    }
    setSelected(index);
    setOptionSelected(true);
  }
  return (
    <>
      {interests.map((item, index) => {
        return (
          <div
            className={`w-full h-12 border-[1px] shadow-sm transition-all duration-200 rounded-lg ${
              index === selected ? "border-yellow-500 shadow-lg" : ""
            } cursor-pointer border-gray-200 rounded-sm }`}
            key={index}
            onClick={()=>handleClick(index)}
          >
            <div className="h-full flex items-center ">
              <div className="Image w-12 h-full flex justify-center items-center ">
                <Image
                  src={item.image}
                  width={32}
                  height={32}
                  alt="not found"
                />
              </div>
              <div className="texts flex justify-center items-center  ">
                <span className="text-xs font-semibold  ">
                  {item.title}
                </span>
                <span className="text-xs mx-[2px] text-gray-700">
                  {item.optionalText}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Interests;

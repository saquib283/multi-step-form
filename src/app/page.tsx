"use client";
import Intro from "@/components/Intro";
import Image from "next/image";
import MathComfortLevel from "@/components/MathComfortLevel";
import Interests from "@/components/Interests";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [width, setWidth] = useState<number>();
  const [IntroOptionSelected, setIntroOptionSelected] =
    useState<boolean>(false);
  const [InterestOptionSelected, setInterestOptionSelected] =
    useState<boolean>(false);
  const [mathOptionSelected, setMathOptionSelected] = useState<boolean>(false);
  const router = useRouter();

  const handleButtonClick = (operation: string) => {
    if (step >= 1) {
      setStep(1);
    }
    if (operation === "INC") {
      setStep(step + 1);
    }
    if (operation === "DEC") {
      setStep(step - 1);
    }
  };
  useEffect(() => {
    const percent = (step / 5) * 100;
    setWidth(percent);
  }, [step]);

  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-evenly items-center gap-6">
        <div className=" w-72 l:w-96 sm:w-4/5 flex justify-between items-center px-2">
          {step >= 2 && (
            <div
              className="cursor-pointer "
              onClick={() => handleButtonClick("DEC")}
            >
              <ChevronLeft />
            </div>
          )}
          <div className="progress w-full h-1 bg-gray-200 ">
            <div
              className={`bg-emerald-500 bg-fixed  h-1`}
              style={{ width: `${width}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <div className="flex flex-col justify-evenly items-center gap-4 l:gap-8 transition-all duration-700">
            <div className="title px-4">
              <h1 className="text-center text-lg font-semibold py-2 ">
                Which decribes You best?
              </h1>
              <p className="text-center text-xs mb-4">
                This will help us to personalize your experience.
              </p>
            </div>
            <div className="Cardcontainer w-72 l:w-96 flex rounded-sm l:gap-4 flex-col justify-center items-center gap-2 ">
              <Intro
                optionSelected={IntroOptionSelected}
                setOptionSelected={setIntroOptionSelected}
              />
            </div>
            <div>
              <button
                disabled={!IntroOptionSelected}
                className={`w-36 h-10 p-2 cursor-pointer rounded-md text-sm text-white bg-black ${
                  IntroOptionSelected ? "" : "bg-gray-300 text-white"
                }`}
                onClick={() => handleButtonClick("INC")}
              >
                continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col  justify-evenly items-center gap-4  transition-all duration-700">
            <div className="title px-4 ">
              <h1 className="text-center text-lg font-semibold py-2 ">
                Which are you most interested in?
              </h1>
              <p className="text-center text-xs mb-4">
                Choose just one.This will help us get you started &#40;but
                won&apos;t limit your experience&#41;.
              </p>
            </div>
            <div className="Cardcontainer w-72 l:w-96 l:gap-4 flex  rounded-sm flex-col justify-center items-center gap-2 ">
              <Interests
                optionSelected={InterestOptionSelected}
                setOptionSelected={setInterestOptionSelected}
              />
            </div>
            <div>
              <button
                disabled={!InterestOptionSelected}
                className={`w-36 h-10 p-2 cursor-pointer rounded-md text-sm text-white bg-black ${
                  InterestOptionSelected ? "" : "bg-gray-200 text-white"
                }`}
                onClick={() => handleButtonClick("INC")}
              >
                continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="main w-full h-full flex flex-col items-center gap-6 sm:gap-24 ">
            <div className="h-full w-full flex flex-col l:flex-row l:w-[500px] sm:w-full sm:justify-evenly xl:justify-center  l:justify-evenly justify-between  items-center">
              <div className="l:w-96 image flex justify-center items-center">
                <Image
                  src={"/pulley.jpg"}
                  width={180}
                  height={180}
                  alt="not "
                  className="lg:w-80  object-cover"
                />
              </div>
              <div className="text w-72 lg:w-96 h-1/2 px-8 py-4">
                <h1 className="text-lg lg:text-xl lg:font-bold text-center py-4 lg:py-8 font-semibold">
                  You&apos;re in the right place.
                </h1>
                <p className="text-justify text- lg:text-lg">
                  Brilliant gets you hands-on to help improve your professional
                  skills and knowledge. You&apos;ll interact with concepts and
                  solve fun problems in math, science and computer science.
                </p>
              </div>
            </div>
            <div className="button">
              <button
                className={`w-36 h-10 p-2 cursor-pointer rounded-md text-sm text-white bg-black`}
                onClick={() => handleButtonClick("INC")}
              >
                continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="w-full xs:w-64 l:w-full  flex flex-col justify-center items-center gap-6">
            <div className="TitleBar px-6">
              <h1 className="text-center font-semibold text-md md:text-xl">
                What is your math comfort level?
              </h1>
              <p className="text-center text-gray-500 text-sm md:text-base">
                {" "}
                Choose the highest level you feel confident in &#x2014; you can
                always adjust later.{" "}
              </p>
            </div>

            <div className="cards h-64 flex justify-center content-center  flex-wrap gap-2 ">
              <MathComfortLevel
                mathOptionSelected={mathOptionSelected}
                setMathOptionSelected={setMathOptionSelected}
              />
            </div>

            <button
              disabled={!mathOptionSelected}
              className={`w-36 h-10 p-2 cursor-pointer rounded-md text-sm text-white bg-black ${
                mathOptionSelected ? "" : "bg-gray-200 text-white"
              }`}
              onClick={() => handleButtonClick("INC")}
            >
              continue
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="main w-full flex flex-col justify-center items-center gap-6">
            <div className="image w-full h-full flex justify-center items-center ">
              <Image
                src={"/alien.jpg"}
                width={150}
                height={150}
                alt="not found"
              />
            </div>

            <div className="text w-80 md:w-96 l:w-80 flex flex-col justify-center items-center">
              <h1 className="font-semibold text-lg mb-2">
                You&apos;re on your way!
              </h1>
              <div className="mb-2">
                <Rating max={5} value={5} readOnly />
              </div>
              <p className="text-xs text-justify px-6">
                &#8220;Though its engaging and well structured courses,
                Brilliant has taught me mathematical concepts that I previously
                struggled to understand. Inow feel confident approaching both
                technical job interviews and real world problem solving
                situations.&#8220;
              </p>
              <span className="text-sm">&#x2014; Jacob S.</span>
            </div>
            <div>
              <button
                className={`w-36 h-10 p-2 cursor-pointer rounded-md text-sm text-white bg-black`}
                onClick={() => router.push("/next-step")}
              >
                continue
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

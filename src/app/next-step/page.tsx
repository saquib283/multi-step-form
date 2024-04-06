"use client";
import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [value, setValue] = useState<number>(0);
  const router = useRouter()

  const interval = setInterval(() => {
    setValue((prev) => prev + 2);
    console.log(
      value
    );
    
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    router.push("/learning-paths");
  }, 5000);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <CircularProgress
          value={value}
          size={"80px"}
          thickness={"12px"}
          color="orange.400"
          max={100}
        />
      </div>

      <div>
        <h1 className="w-full font-semibold text-center p-4 sm:text-xl">
          Finding learning path recommendations for you based on your responses......
        </h1>
      </div>
    </main>
  );
};

export default Page;

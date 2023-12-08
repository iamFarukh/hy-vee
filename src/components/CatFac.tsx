"use client";
import Typewriter from "typewriter-effect";
import React, { useEffect, useState } from "react";
import styles from "../app/Home.module.css";
import PuffLoader from "react-spinners/PuffLoader";
import Image from "next/image";

type CatData = {
  fact: string;
  length: number;
};

export default function CatFac() {
  const [catData, setCatData] = useState<CatData>();
  const [isLoading, setLoading] = useState<Boolean>(true);

  async function getCatFacts() {
    try {
      setLoading(true);
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      setCatData(result);
      return result;
    } catch (error) {
      setLoading(false);
      console.log("error : ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCatFacts();
  }, []);

  return (
    <div className="flex min-h-screen flex-row h-screen items-center justify-center">
      <div>
        <h1 className={styles.logoText}>Do You Know ?</h1>
        <div className="flex box-content w-50 ">
          {isLoading ? (
            <PuffLoader color="#171819" />
          ) : (
            <div className="">
              <h1 className="text-2xl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(catData?.fact!).start();
                  }}
                />
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="ml-20">
        <button className="text-2xl" onClick={getCatFacts}>
          <Image src={"./refresh.svg"} height={24} width={24} alt="Refresh" />
        </button>
      </div>
    </div>
  );
}

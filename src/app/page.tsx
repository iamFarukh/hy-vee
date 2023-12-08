"use client";
import CatFac from "@/components/CatFac";
import styles from "./Home.module.css";
import { Assistant, Lato, Didact_Gothic } from "next/font/google";
import { useState } from "react";
import DogImage from "@/components/DogImage";

import Link from "next/link";

const assistant = Assistant({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [showData, setShowData] = useState(false);
  const catArray = ["cat", "cats", "cots", "cates", "cet"];
  const dogArray = ["dog", "dogs", "dogg", "dogd", "doggy"];

  // console.log("input : ", inputText);

  return (
    <main>
      <div className="flex min-h-screen flex-row h-screen items-center justify-center gap-10">
        {/* Landing Text  */}
        <div className="box-content h-50 p-9">
          <div className={assistant.className}>
            <h2 className="text-6xl text-slate-800">Hello Geeks</h2>
            <span className="text-4xl  text-slate-600">
              Type these and see magic
            </span>
          </div>
          <span>
            <h2 className={styles.logoText}>Cat and Dog</h2>
          </span>
        </div>

        {/* Input Form  */}
        <div>
          <form>
            <div className="bg-transparent">
              <input
                className="bg-transparent border-slate-500 box-content h-50 w-30 p-9 text-6xl"
                type="text"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                placeholder="|Type Here..."
              />
            </div>
            <div>
              <Link href="/#catdog">
                <button
                  type="button"
                  className="text-white underline-offset-auto text-2xl ml-9 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => {
                    setShowData(true);
                  }}
                >
                  Let's See Magic
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Display Cat Fact or Dog Image */}
      <div id="catdog">
        {showData && catArray.includes(inputText) ? (
          <CatFac />
        ) : showData && dogArray.includes(inputText) ? (
          <DogImage />
        ) : null}
      </div>
    </main>
  );
}

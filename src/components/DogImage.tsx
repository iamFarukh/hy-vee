import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

type DogDataType = {
  message: string;
  status: string;
};
export default function DogImage() {
  const [dogData, setDogData] = useState<DogDataType>();
  const [isLoading, setLoading] = useState<Boolean>(true);

  async function getDogImage() {
    try {
      setLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const result = await response.json();
      setDogData(result);
      return result;
    } catch (error) {
      setLoading(false);
      console.log("error : ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDogImage();
  }, []);

  console.log(dogData);
  return (
    <div className="flex min-h-screen flex-row h-screen items-center justify-center gap-10">
      <div className="box-content w-43 ">
        {isLoading ? (
          <PuffLoader color="#171819" />
        ) : (
          <div className="">
            <Image
              className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
              src={
                dogData?.message ||
                "https://images.dog.ceo/breeds/mudhol-indian/Indian-Mudhol.jpg"
              }
              width={500}
              height={500}
              loading="eager"
              alt="Picture of the author"
            />
          </div>
        )}
      </div>
      <div className="ml-20">
        <button className="text-2xl" onClick={getDogImage}>
          <Image src={"./refresh.svg"} height={24} width={24} alt="Refresh" />
        </button>
      </div>
    </div>
  );
}
1;

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BasicLayout from "../components/BasicLayout";
import { getAllGame } from "./api/allProducts";
export default function Home() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getAllGame();
      if (response.data) {
        setGames(response.data);
      }
      console.log("response", response);
    })();
  }, []);
  return (
    <BasicLayout>
      <div className="container mx-auto px-2">
        <section className="text-gray-600 body-font">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className=""></div>
          </div>
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 ">
              {games.length &&
                games.map((game: any) => (
                  <div
                    className="border border-gray-200 p-6 rounded-lg lg:w-1/4 md:w-1/2 w-full lg:my-2 md:my-3  my-3 mx-2"
                    key={game.id}
                  >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={game.cover}
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium truncate ">
                        {game.name}
                      </h2>
                      <p className="mt-1">${game.price}</p>
                    </div>
                    <button className="flextext-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded w-full ">
                      Agregar
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </BasicLayout>
  );
}

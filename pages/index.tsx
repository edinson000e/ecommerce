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
      <div className="container mx-auto px-4">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {games.length &&
                games.map((game: any) => (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={game.cover}
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {game.name}
                      </h2>
                      <p className="mt-1">${game.price}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </BasicLayout>
  );
}

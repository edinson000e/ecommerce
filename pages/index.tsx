import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../commons/types/products";
import BasicLayout from "../components/BasicLayout";
import { useCartContext } from "../context";
import { getAllGame } from "./api/allProducts";
export default function Home() {
  const [games, setGames] = useState([]);

  const { cartState, dispatch } = useCartContext();

  const validateProductInCart = useCallback(
    (id: number) => {
      return cartState.items.find((item) => item.product.id === id);
    },
    [cartState]
  );

  useEffect(() => {
    (async () => {
      const response = await getAllGame();
      if (response.data) {
        setGames(response.data);
      }
      console.log("response", response);
    })();
  }, []);

  useEffect(() => {
    console.log("cartstart", cartState);
  }, [cartState]);
  return (
    <BasicLayout>
      <div className="container mx-auto px-2">
        <section className="text-gray-600 body-font">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className=""></div>
          </div>
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 ">
              {!!games.length &&
                games.map((game: Product) => {
                  const { id, price, name, cover } = game;

                  const dataProductInCart = validateProductInCart(id);
                  console.log("validateProductInCart", dataProductInCart);
                  return (
                    <div
                      className="border border-gray-200 p-6 rounded-lg lg:w-1/4 md:w-1/2 w-full lg:my-2 md:my-3  my-3 mx-2"
                      key={id}
                    >
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={cover}
                        />
                      </a>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium truncate ">
                          {name}
                        </h2>
                        <p className="mt-1">${price}</p>
                      </div>
                      {!dataProductInCart ? (
                        <button
                          className="flextext-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded w-full "
                          onClick={() =>
                            dispatch.addItem({ product: game, quantity: 1 })
                          }
                        >
                          Agregar
                        </button>
                      ) : (
                        <div className="custom-number-input h-10 w-full">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() =>
                                dispatch.editQuantitySubtract({ id })
                              }
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <div className="text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none">
                              <span className="m-auto">
                                {dataProductInCart.quantity}
                              </span>
                            </div>
                            <button
                              data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => dispatch.editQuantityAdd({ id })}
                            >
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </BasicLayout>
  );
}

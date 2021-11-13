import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../commons/types/products";
import { AddDecrProduct } from "../components/AddDecrProdutc/AddDecrProduct";
import BasicLayout from "../components/BasicLayout";
import { useCart } from "../hooks/useCart";
import { getAllProducts } from "./api/allProducts";
export default function Home() {
  const [products, setProducts] = useState([]);

  const { increment, addProduct, decrement, validateProductInCart } = useCart();

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      if (response.data) {
        setProducts(response.data);
      }
    })();
  }, []);

  return (
    <BasicLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-3 mx-auto ">
          <div className="flex flex-wrap -m-4 ">
            {!!products.length &&
              products.map((product: Product) => {
                const { id, price, name, cover } = product;
                const dataProductInCart = validateProductInCart(id);
                return (
                  <div
                    className="border border-gray-200 p-6 rounded-lg lg:w-1/4 md:w-1/2 w-full lg:my-2 md:my-3  my-3 mx-2"
                    key={id}
                  >
                    <Image
                      alt="ecommerce"
                      src={cover}
                      width={10}
                      height={10}
                      layout={"responsive"}
                      loading={"eager"}
                    />
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium truncate ">
                        {name}
                      </h2>
                      <p className="mt-1">${price}</p>
                    </div>
                    {!dataProductInCart ? (
                      <button
                        className="flextext-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded w-full "
                        onClick={() => addProduct(product)}
                      >
                        Agregar
                      </button>
                    ) : (
                      <AddDecrProduct
                        decrement={() => decrement(id)}
                        increment={() => increment(id)}
                        quantity={dataProductInCart.quantity}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}

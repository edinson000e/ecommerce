import React from "react";
import { useCartContext } from "../../../context";
import Image from "next/image";
import { useCart } from "../../../hooks/useCart";
import { AddDecrProduct } from "../../AddDecrProdutc/AddDecrProduct";
import { DeleteProduct } from "../../DeleteProduct/DeleteProduct";
export const ListProducts = () => {
  const { cartState, increment, deleteProduct, decrement, emptyCart } =
    useCart();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="m-auto w-full  flex mr-0 justify-end">
        <DeleteProduct
          onClick={emptyCart}
          title="Vacias todo el carro"
          justifyMd="justify-end"
        />
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100 flex flex-wrap -m-4">
          {cartState.items.map((item) => (
            <div
              className="py-5 flex flex-wrap lg:flex-nowrap w-full"
              key={item.product.id}
            >
              <div className="lg:flex-grow lg:w-20 mx-2 m-auto sm:w-full  smd:w-2/5">
                <Image
                  src={item.product.cover}
                  alt={item.product.name}
                  width={10}
                  height={10}
                  layout="responsive"
                />
              </div>
              <div className="smd:flex-grow lg:w-2/5 mx-2 m-auto sm:w-full smd:w-2/5">
                <p className="text-sm font-medium text-gray-900 title-font mb-2 sm:m-auto">
                  {item.product.name}
                </p>
              </div>
              <div className="lg:w-1/5 mx-2 m-auto sm:w-full smd:w-full smd:text-center ">
                <p className="leading-relaxed text-2xl ">
                  ${item.product.price}
                </p>
              </div>
              <div className="lg:w-1/6 mx-2 m-auto sm:w-3/4 smd:w-10/12 smd:m-auto sm:m-auto">
                <AddDecrProduct
                  decrement={() => decrement(item.product.id)}
                  increment={() => increment(item.product.id)}
                  quantity={item.quantity}
                  colorQuantity={false}
                  textSize="text-base"
                  roundedL="rounded-full"
                  roundedR="rounded-full"
                  disabledDecrementMin={true}
                  color="bg-yellow-500"
                  colorH="hover:bg-yellow-600"
                />
              </div>
              <div className="m-auto mx-6 sm:w-full sm:text-center sm:my-4 smd:w-full    smd:text-center  smd:my-4 md:my-auto md:w-2.5">
                <DeleteProduct onClick={() => deleteProduct(item.product.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

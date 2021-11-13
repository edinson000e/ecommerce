import React from "react";
import { useCartContext } from "../../../context";
import Image from "next/image";
export const ListProducts = () => {
  const { cartState } = useCartContext();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100 flex flex-wrap -m-4">
          {cartState.items.map((item) => (
            <div
              className="py-8 flex flex-wrap md:flex-nowrap w-full"
              key={item.product.id}
            >
              <div className="md:flex-grow w-20 mx-2">
                <Image
                  src={item.product.cover}
                  alt={item.product.name}
                  width={10}
                  height={10}
                  layout="responsive"
                />
              </div>
              <div className="md:flex-grow md:w-1/3 mx-2">
                <p className="text-base font-medium text-gray-900 title-font mb-2">
                  {item.product.name}
                </p>
              </div>
              <div className="md:w-1/3 mx-2">
                <p className="leading-relaxed">{item.product.price}</p>
              </div>
              <div className="md:w-1/3 mx-2">
                <p className="leading-relaxed">{item.product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import BasicLayout from "../components/BasicLayout";
import { ListProducts } from "../components/Cart/ListProducts/ListProducts";

export default function Cart() {
  return (
    <BasicLayout>
      <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <ListProducts />
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Resumen del pedido
          </h2>

          <div className="relative mb-4">Resumen del pedido</div>
        </div>
      </div>
    </BasicLayout>
  );
}

import React from "react";
import { useCart } from "../../../hooks/useCart";

export const OrderSummary = () => {
  const {
    cartState: {
      totals: { quantity, totalPrice },
    },
  } = useCart();
  return (
    <div>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Resumen de la compra
      </h2>
      <div className=" w-full mx-auto flex flex-wrap">
        <div className="  w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Cantidad</span>
            <span className="ml-auto text-gray-900">{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="title-font font-medium text-2xl text-gray-900">
              TOTAL
            </span>
            <span className="title-font font-medium text-2xl text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import BasicLayout from "../components/BasicLayout";
import EmptyCart from "../components/Cart/EmptyCart/EmptyCart";
import { ListProducts } from "../components/Cart/ListProducts/ListProducts";
import { OrderSummary } from "../components/Cart/OrderSummary";
import Loading from "../components/Loading/Loading";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const {
    cartState: { init, totals },
  } = useCart();
  return (
    <BasicLayout>
      <div className="container px-5 py-4 mx-auto flex flex-wrap ">
        <div className="w-full">
          <Loading loadingOn={!init} />
        </div>
        {init && (
          <>
            {totals.quantity === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <ListProducts />
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8   md:ml-auto w-full h-4/5">
                  <OrderSummary />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </BasicLayout>
  );
}

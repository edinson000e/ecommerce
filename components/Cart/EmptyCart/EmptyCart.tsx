import React from "react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Aún no tienes productos en tu carrito
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Puedes visualizar mas productos dando click aqui
          </p>
          <Link href='/'>
            <a className="text-white bg-indigo-500 border-0 py-2 my-5 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg m-auto">
              {" "}
              Ir a productos
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

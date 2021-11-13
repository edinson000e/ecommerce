import { Product } from "../../commons/types/products";

export async function getAllProducts() {
  const res = await fetch(`https://products-api-meru.vercel.app/api/products`);
  const data = (await res.json()) as Product[];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    data, // will be passed to the page component as props
  };
}

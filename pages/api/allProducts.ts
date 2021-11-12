export async function getAllGame() {
  const res = await fetch(`https://products-api-meru.vercel.app/api/products`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    data, // will be passed to the page component as props
  };
}

import { CartItem } from "./types";

export const updateCartTotals = (cartItems: CartItem[]) => {
  const quantity = cartItems.reduce<number>((accum, item) => {
    accum += item.quantity;
    return accum;
  }, 0);

  const totalPrice = cartItems.reduce<number>((accum, item) => {
    const { price } = item.product;
    accum += +price * item.quantity;
    return accum;
  }, 0);

  return {
    quantity,
    totalPrice,
  };
};

export const persistentCart = () => {
  const key = "cart";

  return {
    persist: (data: CartItem[]) =>
      localStorage.setItem(key, JSON.stringify(data)),
    get: (): CartItem[] => JSON.parse(localStorage.getItem(key)),
    remove: () => localStorage.removeItem(key),
  };
};

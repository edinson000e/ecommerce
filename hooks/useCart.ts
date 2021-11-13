import { useCallback } from "react";
import { Product } from "../commons/types/products";
import { useCartContext } from "../context";

export const useCart = () => {
  const { cartState, dispatch } = useCartContext();

  const addProduct = useCallback(
    (product: Product) => {
      dispatch.addItem({ product, quantity: 1 });
      dispatch.updateCartTotals();
    },
    [dispatch]
  );

  const validateProductInCart = useCallback(
    (id: number) => {
      return cartState.items.find((item) => item.product.id === id);
    },
    [cartState]
  );

  const increment = useCallback(
    (id: number) => {
      dispatch.editQuantityAdd({ id });
      dispatch.updateCartTotals();
    },
    [dispatch]
  );
  const decrement = useCallback(
    (id: number) => {
      dispatch.editQuantitySubtract({ id });
      dispatch.updateCartTotals();
    },
    [dispatch]
  );

  const deleteProduct = useCallback(
    (id: number) => {
      dispatch.removeItem(id);
      dispatch.updateCartTotals();
    },
    [dispatch]
  );

  return {
    cartState,
    increment,
    addProduct,
    decrement,
    validateProductInCart,
    deleteProduct,
  };
};

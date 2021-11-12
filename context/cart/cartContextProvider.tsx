import { createContext, useContext, useMemo, useReducer } from "react";
import { AnyObject } from "../../commons/types/types";
import {
  addItem,
  editQuantity,
  removeItem,
  updateCartTotals,
  updateState,
} from "./actions";
import { cartInitialState, cartReducer } from "./cartReducer";
import { CartState, Dispatch } from "./types";

export interface CartContextValue {
  cartState: CartState;
  dispatch: Dispatch | AnyObject;
}

const CartContext = createContext<CartContextValue>({
  cartState: cartInitialState,
  dispatch: {},
});

interface CartContextProviderProps {
  children: JSX.Element;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatcher] = useReducer(cartReducer, cartInitialState);

  const dispatch = useMemo<Dispatch>(
    () => ({
      addItem: (item) => dispatcher(addItem(item)),
      removeItem: (id) => dispatcher(removeItem(id)),
      editQuantity: ({ id, newQuantity }) =>
        dispatcher(editQuantity({ id, newQuantity })),
      updateCartTotals: () => dispatcher(updateCartTotals()),
      updateState: (state: CartState) => dispatcher(updateState(state)),
    }),
    [dispatcher]
  );

  const contextValue = useMemo(
    () => ({ cartState, dispatch }),
    [cartState, dispatch]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

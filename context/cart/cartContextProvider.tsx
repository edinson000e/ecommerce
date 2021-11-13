import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Product } from "../../commons/types/products";
import { AnyObject } from "../../commons/types/types";
import { getAllProducts } from "../../pages/api/allProducts";
import {
  addItem,
  cartInit,
  editQuantity,
  editQuantityAdd,
  editQuantitySubtract,
  emptyCart,
  removeItem,
  updateCartTotals,
  updateState,
} from "./actions";
import { cartInitialState, cartReducer, initialTotals } from "./cartReducer";
import { CartItem, CartState, Dispatch } from "./types";
import { persistentCart } from "./utils";

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

const persistCart = persistentCart();

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatcher] = useReducer(cartReducer, cartInitialState);

  useEffect(() => {
    if (cartState.init) {
      persistCart.persist(cartState.items);
    }
  }, [cartState.items, cartState.init]);

  const dispatch = useMemo<Dispatch>(
    () => ({
      addItem: (item) => dispatcher(addItem(item)),
      removeItem: (id) => dispatcher(removeItem(id)),
      editQuantity: ({ id, newQuantity }) =>
        dispatcher(editQuantity({ id, newQuantity })),
      editQuantityAdd: ({ id }) => dispatcher(editQuantityAdd({ id })),
      editQuantitySubtract: ({ id }) =>
        dispatcher(editQuantitySubtract({ id })),
      updateCartTotals: () => {
        dispatcher(updateCartTotals());
      },
      updateState: (state: CartState) => dispatcher(updateState(state)),
      emptyCart:()=>{dispatcher(emptyCart());}
    }),
    [dispatcher]
  );

  const contextValue = useMemo(
    () => ({ cartState, dispatch }),
    [cartState, dispatch]
  );

  const initials = useCallback(async () => {
    const ownerPersist = persistCart.get();
    if (ownerPersist?.length) {
      try {
        const response = await getAllProducts();
        const newCart = ownerPersist.reduce(
          (allItems: CartItem[], { quantity, product: { id } }: CartItem) => {
            const copyAllItems = [...allItems];
            const dataProduct = response.data.find(
              (product: Product) => product.id === id
            );
            if (dataProduct) {
              copyAllItems.push({
                product: dataProduct,
                quantity,
              });
            }
            return copyAllItems;
          },
          []
        );
        dispatch.updateState({
          items: newCart,
          totals: initialTotals,
          init: true,
        });
        dispatch.updateCartTotals();
      } catch (error) {
        persistCart.remove();
        dispatcher(cartInit());
      }
    } else {
      dispatcher(cartInit());
    }
  }, [dispatcher, dispatch]);

  useEffect(() => {
    initials();
  }, [initials]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

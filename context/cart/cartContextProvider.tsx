import { createContext } from "react";

 export interface CartContextValue {
   cartState: CartState;
   dispatch: Dispatch | AnyObject;
 }

const CartContext = createContext<CartContextValue>({
   cartState: cartInitialState,
   dispatch: {},
 });

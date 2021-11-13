import { Product } from "../../commons/types/products";
import { AnyObject } from "../../commons/types/types";

export interface CartTotal {
  totalPrice: number;
  quantity: number;
}

export interface CartActions {
  type: string;
  payload?: AnyObject;
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export interface CartState {
  items: Array<CartItem>;
  totals: CartTotal;
  init: boolean;
}

export interface EditQuantityAddSubtract {
  id: number | string;
}
export interface EditQuantity {
  id: number | string;
  newQuantity: number;
}

export interface RemoveItem {
  idItem: number;
}

export interface AddItem {
  item: Product;
}

export interface Dispatch {
  addItem: (item: CartItem) => void;
  removeItem: (id: number | string) => void;
  editQuantity: ({ id, newQuantity }: EditQuantity) => void;
  editQuantityAdd: ({ id }: EditQuantityAddSubtract) => void;
  editQuantitySubtract: ({ id }: EditQuantityAddSubtract) => void;
  updateCartTotals: () => void;
  updateState: (state: CartState) => void;
}

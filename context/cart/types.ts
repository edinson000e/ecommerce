import { AnyObject } from "../../commons/types/types";

export interface CartTotal {
  subTotal: number;
  shippingPrice: number;
  totalPrice: number;
  totalOnePay: number;
  installments: number;
  quantity: number;
}

export interface CartActions {
  type: string;
  payload?: AnyObject;
}

export interface CartState {
  items: Array<any>;
  lastUpdate?: Date;
  totals: CartTotal;
}

export interface EditQuantity {
  id: number | string;
  newQuantity: number;
}

export interface RemoveItem {
  idItem: number;
}

export interface AddItem {
  item: any;
}

export interface Dispatch {
  addItem: (item: any) => void;
  removeItem: (id: number | string) => void;
  editQuantity: ({ id, newQuantity }: EditQuantity) => void;
  updateCartTotals: () => void;
  updateState: (state: CartState) => void;
}

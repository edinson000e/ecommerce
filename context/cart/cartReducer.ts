import {
  ADD_ITEM,
  EDIT_ITEM,
  EDIT_QUANTITY,
  REMOVE_ITEM,
  UPDATE_CART_TOTALS,
  UPDATE_STATE,
} from "./const";
import { CartActions, CartState } from "./types";

export const initialTotals = {
  subTotal: 0,
  shippingPrice: 0,
  totalPrice: 0,
  totalOnePay: 0,
  installments: 1,
  quantity: 0,
};

export const cartInitialState: CartState = {
  items: [],
  totals: initialTotals,
};

export const cartReducer = (state = cartInitialState, action: CartActions) => {
  switch (action.type) {
    case ADD_ITEM: 
      return {
        ...state,
        items: [...state.items, action.payload?.item],
      };
    case REMOVE_ITEM:
      return {
        ...state,
      };
    case EDIT_QUANTITY:
      return {
        ...state,
      };
    case EDIT_ITEM:
      return {
        ...state,
      };
    case UPDATE_CART_TOTALS:
      return {
        ...state,
      };
    case UPDATE_STATE:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

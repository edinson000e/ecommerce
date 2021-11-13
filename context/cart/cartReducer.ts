import {
  ADD_ITEM,
  CART_INIT,
  EDIT_ITEM,
  EDIT_QUANTITY,
  EDIT_QUANTITY_ADD,
  EDIT_QUANTITY_SUBTRACT,
  EMPTY_CART,
  REMOVE_ITEM,
  UPDATE_CART_TOTALS,
  UPDATE_STATE,
} from "./const";
import { CartActions, CartState } from "./types";
import { updateCartTotals } from "./utils";

export const initialTotals = {
  totalPrice: 0,
  quantity: 0,
};

export const cartInitialState: CartState = {
  items: [],
  totals: initialTotals,
  init: false,
};

export const cartReducer = (state = cartInitialState, action: CartActions) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload?.item],
      };
    case REMOVE_ITEM:
      const copyItemsRemove = state.items.filter(
        (item) => item.product.id !== action.payload?.id
      );
      return {
        ...state,
        items: copyItemsRemove,
      };
    case EDIT_QUANTITY_ADD:
      const copyItemsAdd = [...state.items];
      const idItemEditAdd = state.items.findIndex(
        (item) => item.product.id === action.payload?.id
      );
      copyItemsAdd[idItemEditAdd] = {
        ...copyItemsAdd[idItemEditAdd],
        quantity: copyItemsAdd[idItemEditAdd].quantity + 1,
      };
      return {
        ...state,
        items: [...copyItemsAdd],
      };
    case EDIT_QUANTITY_SUBTRACT:
      const copyItemsSubtract = [...state.items];
      const idItemEditSubtract = copyItemsSubtract.findIndex(
        (item) => item.product.id === action.payload?.id
      );

      if (state.items[idItemEditSubtract].quantity - 1 > 0)
        copyItemsSubtract[idItemEditSubtract] = {
          ...copyItemsSubtract[idItemEditSubtract],
          quantity: copyItemsSubtract[idItemEditSubtract].quantity - 1,
        };
      else copyItemsSubtract.splice(idItemEditSubtract, 1);

      return {
        ...state,
        items: copyItemsSubtract,
      };
    case EDIT_QUANTITY:
      const copyItems = [...state.items];
      const idItemEdit = copyItems.findIndex(
        (item) => item.product.id === action.payload?.id
      );
      copyItems[idItemEdit].quantity = action.payload?.quantity;
      return {
        ...state,
        items: copyItems,
      };
    case EDIT_ITEM:
      return {
        ...state,
      };
    case UPDATE_CART_TOTALS:
      return {
        ...state,
        totals: updateCartTotals(state.items),
      };
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case CART_INIT:
      return {
        ...state,
        init: true,
      };
    case EMPTY_CART:
      return {
        ...state,
        items: [],
        totals: initialTotals,
      };
    default:
      return {
        ...state,
      };
  }
};

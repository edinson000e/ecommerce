import {
  ADD_ITEM,
  EDIT_ITEM,
  EDIT_QUANTITY,
  EDIT_QUANTITY_ADD,
  EDIT_QUANTITY_SUBTRACT,
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
    case EDIT_QUANTITY_ADD:
      const copyItemsAdd = [...state.items];
      const idItemEditAdd = state.items.findIndex(
        (item) => item.product.id === action.payload?.id
      );
      const quantityAdd = state.items[idItemEditAdd].quantity + 1;
      copyItemsAdd[idItemEditAdd].quantity = quantityAdd;
      return {
        ...state,
        items: [...copyItemsAdd],
      };
    case EDIT_QUANTITY_SUBTRACT:
      const copyItemsSubtract = [...state.items];
      const idItemEditSubtract = copyItemsSubtract.findIndex(
        (item) => item.product.id === action.payload?.id
      );
      const quantityOldDesc = state.items[idItemEditSubtract].quantity;
      const quantityDesc = quantityOldDesc - 1;
      if (quantityDesc > 0)
        copyItemsSubtract[idItemEditSubtract].quantity = quantityDesc;
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

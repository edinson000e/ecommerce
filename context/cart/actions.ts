import { AddItem, EditQuantity, CartState, EditQuantityAddSubtract } from "./types";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_QUANTITY,
  EDIT_ITEM,
  UPDATE_CART_TOTALS,
  UPDATE_STATE,
  EDIT_QUANTITY_ADD,
  EDIT_QUANTITY_SUBTRACT,
  CART_INIT,
  EMPTY_CART,
} from "./const";

export const addItem = (item: any) => ({
  type: ADD_ITEM,
  payload: { item },
});

export const removeItem = (id: number | string) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const editQuantity = (value: EditQuantity) => ({
  type: EDIT_QUANTITY,
  payload: value,
});

export const editQuantityAdd = (value: EditQuantityAddSubtract) => ({
  type: EDIT_QUANTITY_ADD,
  payload: value,
});

export const editQuantitySubtract = (value: EditQuantityAddSubtract) => ({
  type: EDIT_QUANTITY_SUBTRACT,
  payload: value,
});

export const editItem = (item: AddItem) => ({
  type: EDIT_ITEM,
  payload: item,
});

export const updateCartTotals = () => ({
  type: UPDATE_CART_TOTALS,
});

export const updateState = (state: CartState) => ({
  type: UPDATE_STATE,
  payload: state,
});


export const cartInit = () => ({
  type: CART_INIT,
});

export const emptyCart = () => ({
  type: EMPTY_CART
})
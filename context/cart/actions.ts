import { AddItem, EditQuantity, CartState,   } from './types';
import { ADD_ITEM, REMOVE_ITEM, EDIT_QUANTITY, EDIT_ITEM, UPDATE_CART_TOTALS, UPDATE_STATE } from './const';

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

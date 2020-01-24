import { ShoppingItem } from "../models/shopping-item.model";
import {
  ShoppingAction,
  ShoppingActionTypes
} from "../actions/shopping.action";

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

export function ShoppingReducers(
  state: ShoppingState = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return state.list.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

// [{ id: "1", name: "Diet Code1" }];

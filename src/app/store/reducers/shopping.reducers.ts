import { ShoppingItem } from "../models/shopping-item.model";
import {
  ShoppingAction,
  ShoppingActionTypes
} from "../actions/shopping.action";

const initialState: Array<ShoppingItem> = [{ id: "1", name: "Diet Code1" }];

export function ShoppingReducers(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}

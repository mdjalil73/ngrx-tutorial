import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/models/app-state.model";
import { Observable } from "rxjs";
import { ShoppingItem } from "./store/models/shopping-item.model";
import {
  AddItemAction,
  DeleteItemAction
} from "./store/actions/shopping.action";
import { v4 as uuid } from "uuid";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: "", name: "" };
  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);
  }

  constructor(private store: Store<AppState>) {}
  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: "", name: "" };
  }
  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}

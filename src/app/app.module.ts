import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { ShoppingReducers } from "./store/reducers/shopping.reducers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ shopping: ShoppingReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

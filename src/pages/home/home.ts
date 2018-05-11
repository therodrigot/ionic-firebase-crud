import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shoppinglist/shoppinglist.service';
import { ShoppingItem } from '../../models/item/item.model';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$:Observable<ShoppingItem[]>

  constructor(public navCtrl: NavController,
    private shoppingService:ShoppingListService) {
      this.shoppingList$ = this.shoppingService
        .getShoppingList()
        .snapshotChanges()
        .map(
          changes =>{
            return changes.map( c=> ({
              key:c.key,
              ...c.payload.val()
            }))
          }
        )
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shoppinglist/shoppinglist.service';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item:ShoppingItem={
    name:'',
    quantity:undefined,
    price:undefined,
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingService:ShoppingListService
  ) {}

  addItem(item:ShoppingItem){
    // let simulitem:Item={name:'teste',price:10,quantity:1}
    this.shoppingService.addItem(item).then(
      ref=>{
        this.navCtrl.setRoot('HomePage',{key:ref.key});
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

}

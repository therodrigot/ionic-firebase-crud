import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shoppinglist/shoppinglist.service';
import { AlertController } from 'ionic-angular';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item:ShoppingItem={
    name:'',
    quantity:undefined,
    price:undefined,
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingService:ShoppingListService,
    public alertCtrl:AlertController,
    public toastSvc:ToastService) {
  }

  saveItem(item:ShoppingItem){
    this.shoppingService.editItem(item).then(
      ()=>{
        this.toastSvc.show(item.name+' Saved')
        this.navCtrl.setRoot("HomePage")
      }
    );
  }


  confirmDelete(item:ShoppingItem) {
    let confirm = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you really want to delete this entry?',
      buttons: [
        {
          text: "Don't Delete",
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'CONFIRM',
          handler: () => {
            this.deleteItem(item);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  deleteItem(item:ShoppingItem){
    this.shoppingService.deleteItem(item).then(
      ()=>{
        this.toastSvc.show(item.name+' Removed')
        this.navCtrl.setRoot("HomePage")
      }
    );
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item')
    console.log(this.item);
  }

}

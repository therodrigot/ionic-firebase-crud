import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { ShoppingItem } from "../../models/item/item.model";

@Injectable()
export class ShoppingListService{

	private shoppingListRef = this.db.list<ShoppingItem>('shoppinglist');

	constructor(private db:AngularFireDatabase){

	}

	getShoppingList(){
		return this.shoppingListRef;
	}
	addItem(item:ShoppingItem){
		return this.shoppingListRef.push(item);
	}
	editItem(item:ShoppingItem){
		return this.shoppingListRef.update(item.key,item);
	}
	deleteItem(item:ShoppingItem){
		return this.shoppingListRef.remove(item.key)
	}
}
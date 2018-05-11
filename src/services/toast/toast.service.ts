import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class ToastService{

	constructor(private toastCtrl:ToastController){}

	show(msg:string) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration:1200,
			position: 'bottom'
		});
		toast.present();
	}
}
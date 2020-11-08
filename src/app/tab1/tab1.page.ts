import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Groceries";

  items = [
    {
      name: "Spam",
      qty: 2,
      unit: "Cases",
      imgUrl: "assets/img/spam.png"
    },
    {
      name: "Sardines",
      qty: 12,
      unit: "Cans",
      imgUrl: "assets/img/sardines.png"

    },
    {
      name: "Fish Sauce",
      qty: 2,
      unit: "Bottles",
      imgUrl: "assets/img/patis.png"
    },
    {
      name: "Salted Eggs",
      qty: 1,
      unit: "Dozen",
      imgUrl: "assets/img/itlog.png"
    },
    {
      name: "Pork Skin",
      qty: 3,
      unit: "Bags",
      imgUrl: "assets/img/chicharon.png"
    },

  ];

}
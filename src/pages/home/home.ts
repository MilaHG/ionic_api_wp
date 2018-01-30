import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {IntroPage} from "../intro/intro";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // On affiche en premier les capsules populaires
  capsules:string = "populaires";

  constructor(
    public navCtrl: NavController,
    public storage: Storage  ) { }

  ionViewDidLoad() {
    // : https://alligator.io/ionic/intro-slider/
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(IntroPage);
      }
    });
  }

}

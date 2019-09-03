import { Component  } from '@angular/core';
import { App, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-privacy',
    templateUrl: 'privacy.html',
})
export class PrivacyPage {

    text: string;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.text = "";
    }
}

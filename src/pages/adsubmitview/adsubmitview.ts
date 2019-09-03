import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { RequestPage } from '../request/request';

/**
 * Generated class for the AdSubmitViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-adsubmitview',
    templateUrl: 'adsubmitview.html',
})
export class AdSubmitViewPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
    }

    backToMenu(){
        this.navCtrl.popTo(SettingPage);
    }

    goRequest(){
        this.navCtrl.push(RequestPage)
    }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticeViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-noticeview',
    templateUrl: 'noticeview.html',
})
export class NoticeViewPage {

    notice : any;	

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.notice = this.navParams.get('notice');
    }

    ionViewDidLoad() {
    }

    backPage() {
        this.navCtrl.pop();
    }
}

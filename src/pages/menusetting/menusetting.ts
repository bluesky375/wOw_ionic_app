import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the MenuSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-menusetting',
    templateUrl: 'menusetting.html',
})
export class MenuSettingPage {

    setting: any = {}

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private setPro: SettingsProvider) {

        this.setting.comment_post = true;
        this.setting.like_post = true;
        this.setting.report = true;
    }

    ionViewDidLoad() {
        this.setPro.getSetting().then(res => {
            if (!res['setting']) {
                this.setting.comment_post = false;
                this.setting.like_post = false;
                this.setting.report = false;
            } else {
                this.setting.comment_post = res['setting'].comment_post != '0';
                this.setting.like_post = res['setting'].like_post != '0';
                this.setting.report = res['setting'].report != '0';
            }
        });
    }

    confirm() {
        this.setPro.setSetting(
            this.setting.comment_post,
            this.setting.like_post,
            this.setting.report
        ).then(res => {
            this.navCtrl.pop();
        })
    }

}

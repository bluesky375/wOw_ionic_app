import { Component  } from '@angular/core';
import { App, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SettingsProvider } from './../../providers/settings/settings';

import { AdsPage } from '../ads/ads';
import { UserProfilePage } from '../userprofile/userprofile';
import { NoticeListPage } from '../noticelist/noticelist';
import { MenuSettingPage } from '../menusetting/menusetting';
import { LanguageSettingPage } from '../languagesetting/languagesetting';
import { RequestPage } from '../request/request';
import { WelcomePage } from '../welcome/welcome';
import { PrivacyPage } from '../privacy/privacy';
import { TermsPage } from '../terms/terms';


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html',
})
export class SettingPage {

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private alertCtrl: AlertController,
                private setPro: SettingsProvider,
                private storage: Storage,
                private app : App) {
    }

    ionViewDidLoad() {
        
    }

    GoUser() {
        this.navCtrl.push(UserProfilePage)
    }

    GoLanguageSetting() {
        this.navCtrl.push(LanguageSettingPage)
    }

    GoAdsList() {
        this.navCtrl.push(AdsPage)
    }

    GoUserNews() {
        this.navCtrl.push(NoticeListPage)
    }

    GoRequest() {
        this.navCtrl.push(RequestPage)
    }

    GoPushSetting() {
        this.navCtrl.push(MenuSettingPage)
    }

    GoPrivacyPolicy() {
        this.navCtrl.push(PrivacyPage)
    }

    GoTerms() {
        this.navCtrl.push(TermsPage)
    }

    GoWelcomeScreen() {
        this.storage.clear().then(() => {
            this.app.getRootNav().setRoot(WelcomePage);
        })
    }

    LogoutConfirmation() {
        let alert = this.alertCtrl.create({
            title: 'ログアウト',
            message: 'ログアウトしますか？',
            buttons: [
                {
                    text: 'はい',
                    role: 'cancel',
                    handler: () => {

                        this.GoWelcomeScreen();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'いいえ',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    }

    DeleteConfirmation() {
        let alert = this.alertCtrl.create({
            title: 'アカウントを削除する',
            message: 'の操作を実行すると、すべての情報が削除されます。復元することはできません。宜しいですか？',
            buttons: [
                {
                    text: '削除',
                    handler: () => {
                        this.setPro.deleteAccount().then(() => {
                            this.GoWelcomeScreen();
                        });
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    }

}

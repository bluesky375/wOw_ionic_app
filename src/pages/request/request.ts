import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-request',
    templateUrl: 'request.html',
})
export class RequestPage {

    content: string;
    email: string;
    confirm_email : string;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private alertCtrl: AlertController, 
                private setPro: SettingsProvider,
                private toastCtrl : ToastController) {
                    
    }

    ionViewDidLoad() {
    }

    sendRequest() {
        if(this.email == null || this.email == ''){
            let toast = this.toastCtrl.create({
                message: "メールアドレスを入力して下さい。",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }

        if(this.email !== this.confirm_email){
            let toast = this.toastCtrl.create({
                message: "メールアドレスが一致しておりません。",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }

        if(this.content == null || this.content == ''){
            let toast = this.toastCtrl.create({
                message: "お問い合せ内容を入力してください。",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }

        let alert = this.alertCtrl.create({
            title: '',
            subTitle: 'お問い合わせを受付けました',
            buttons: [{
                text: 'はい',
                handler: () => {
                    this.setPro.contactUs(this.content, this.email)
                        .then(() => this.navCtrl.pop());
                }
            }]
        });
        alert.present();
    }

}

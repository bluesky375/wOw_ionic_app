import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register';
import { OtpPassPage } from "../otppass/otppass";

@IonicPage()
@Component({
    selector: 'page-emailinput',
    templateUrl: 'emailinput.html',
})
export class EmailInputPage {

    public email: string;
    public keyUpEmail: string;
    load: any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private regPro: RegisterProvider, 
                public loadingCtrl: LoadingController, 
                private alertCtrl: AlertController) {

    }

    ionViewDidLoad() {
    }

    goOtpPass() {
        var patt = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
        var res = patt.test(this.email);

        if (res) {
            this.loadingShow();
            this.regPro.emailVerify(this.email).then(data => {
                this.loadingHide();
                this.navCtrl.push(OtpPassPage, { email: this.email });
            }).catch(err=>{
                this.loadingHide();
                let alert = this.alertCtrl.create({
                    subTitle: 'このメールアドレスは既に登録されています。', // このメールアドレスは既に使用されています。
                    buttons: [
                        {
                            text: 'はい',
                            handler: () => {
                               
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        else {
            let alert = this.alertCtrl.create({
                subTitle: '有効なメールアドレスを入力してください。',
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {
                           
                        }
                    }
                ]
            });
            alert.present();
        }
    }

    goBack() {
        this.navCtrl.pop();
    }

    loadingShow(){
        this.load = this.loadingCtrl.create({
            content: '暫くお待ちください。'
        });
        
        this.load.present();
    }

    loadingHide(){
        this.load.dismiss();
    }
}

import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register';
import { RegisterPage } from "../register/register";
/**
 * Generated class for the OtpPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-otppass',
    templateUrl: 'otppass.html',
})
export class OtpPassPage {

    public email: string;
    otp: string;

    load: any;
    loginType: any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private alertCtrl: AlertController,
                private regPro: RegisterProvider,
                public loadingCtrl: LoadingController,) {

    }

    ionViewDidLoad() {
        if (this.navParams.get('email')) {
            this.email = this.navParams.get('email');
        }
    }

    goRegister() {
        if(!this.otp) {
            let alert = this.alertCtrl.create({
                subTitle: '認証コードを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {
                      
                        }
                    }
                ]
            });
            alert.present();
            return;
        }

        this.loadingShow();
        this.regPro.otpPass(this.otp, this.email).then(data => {
            this.loadingHide();

            let res = data['content'];
            this.navCtrl.push(RegisterPage, {
                email: this.email,
                user_id: res.user_id
            });
        }).catch(err=>{
            this.loadingHide();
            
            let alert = this.alertCtrl.create({
                subTitle: '正しい認証コードを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {
                      
                        }
                    }
                ]
            });
            alert.present();
        })
    }

    goBack() {
        this.navCtrl.pop();
    }

    loadingShow(){
        this.load = this.loadingCtrl.create({
            content: 'しばらくお待ちください。'
        });
        
        this.load.present();
    }
    
    loadingHide(){
        this.load.dismiss();
    }
}

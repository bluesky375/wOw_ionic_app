import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { EmailNewPassPage } from '../emailnewpass/emailnewpass';
import { RegisterProvider } from '../../providers/register/register';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EmailForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-emailforgot',
    templateUrl: 'emailforgot.html',
})
export class EmailForgotPage {
    
    email: string;
    load: any;
    
    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private alertCtrl: AlertController,
                private register: RegisterProvider,
                public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
    
    }

    confirmEmail() {
        this.loadingShow();

        this.register.forgot(this.email).then((res) => {
            this.loadingHide();
            this.navCtrl.push(EmailNewPassPage, { email: this.email })
        }).catch(err => {
            this.loadingHide();
            
            let alert = this.alertCtrl.create({
                subTitle: 'このメールアドレスは登録されておりません。',
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
        });
    }

    goBack() {
        this.navCtrl.pop();
    }

    loadingShow(){
        this.load = this.loadingCtrl.create({
            content: 'お待ちください。。。'
        });
        
        this.load.present();
    }

    loadingHide(){
        this.load.dismiss();
    }
}

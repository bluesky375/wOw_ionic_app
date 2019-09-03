import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { EmailLoginPage } from '../emaillogin/emaillogin';
import { RegisterProvider } from '../../providers/register/register';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EmailNewPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-emailnewpass',
    templateUrl: 'emailnewpass.html',
})
export class EmailNewPassPage {

    email: string;
    code: string;
    password: string;
    confirmpassword: string;
    load: any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private regPro: RegisterProvider, 
                private storage: Storage, 
                public loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {

    }

    ionViewDidLoad() {
        this.email = this.navParams.get('email');
    }

    goBack() {
        this.navCtrl.pop();
    }

    updatePassword() {
        if(!this.code){
            let alert = this.alertCtrl.create({
                subTitle: 'コードを入力してください。',
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert.present();
        } else if (this.password == '' || this.password != this.confirmpassword) {
            let alert = this.alertCtrl.create({
                subTitle: 'パスワードが間違っております。',
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert.present();
        } else {
            this.loadingShow();
            this.regPro.reset(this.code, this.password).then((loginRes) => {
                this.loadingHide();
    
                /*
                this.storage.set('sign_id', loginRes['content']['sign_id']);
                this.navCtrl.push(TabsPage);
                */
    
                let alert = this.alertCtrl.create({
                    subTitle: 'パスワードの再設定が完了いたしました。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: () => {
                                this.navCtrl.push(EmailLoginPage)
                            }
                        }
                    ]
                });
                alert.present();
                return;
    
            }).catch(() => {
                this.loadingHide();
    
                this.code = undefined;
                this.password = undefined;
                
                let alert = this.alertCtrl.create({
                    subTitle: 'Get failure while set new password.',
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

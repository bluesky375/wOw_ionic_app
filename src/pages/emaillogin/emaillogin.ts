import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginProvider } from '../../providers/login/login';
import { RegisterCompletePage } from '../registercomplete/registercomplete';
import { EmailForgotPage } from '../emailforgot/emailforgot';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the EmailLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-emaillogin',
    templateUrl: 'emaillogin.html',
})
export class EmailLoginPage {

    email: string;
    password: string;
    public Regex: string;
    load: any;
    token: string = "";

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private logPro: LoginProvider, 
                private storage: Storage,
                public loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {
            
    }

    ionViewDidLoad() {
        this.storage.get('token').then(data=>{
            if(data){
                this.token = data;
            }
        });
    }

    goToForgot() {
        this.navCtrl.push(EmailForgotPage);
    }

    goBack() {
        this.navCtrl.pop();
    }

    loginEmail() {
        if(!this.email && !this.password){ 
            let alert = this.alertCtrl.create({
                subTitle: 'メールアドレスとパスワードを入力して下さい。',
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
        } else if (!this.email) {
            let alert = this.alertCtrl.create({
                subTitle: '有効なメールアドレスを入力して下さい。',
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
        } else if (!this.password) {
            let alert = this.alertCtrl.create({
                subTitle: 'パスワードを入力して下さい。',
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

        var patt = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
        var res = patt.test(this.email);
        
        if (res) {
            this.loadingShow();
            this.logPro.emailLogin(this.email, this.password, this.token).then(res => {
                this.loadingHide();
                if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "" ){
                    this.navCtrl.push(RegisterCompletePage,{'loginType':'1'});
                } else {
                    this.storage.set('loginType', 1);
                    this.storage.set('sign_id', res['content']['sign_id']).then(() => {
                        this.navCtrl.push(TabsPage);
                    });
                }
            }).catch((err) => {
                this.loadingHide();
                let alert = this.alertCtrl.create({
                    subTitle: '入力されたメールアドレスまたはパスワードがアカウントと一致しません。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: () => {
                                
                            }
                        }
                    ]
                });
                alert.present();
                
                this.password = undefined;
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

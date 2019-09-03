import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { RegisterCompletePage } from '../registercomplete/registercomplete';
import { RegisterProvider } from '../../providers/register/register';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    public password: string;
    public confirmpassword: string;
    public username: string;
    public photo: string;
    email: string;
    user_id: string;
    load: any;
    token: any;

    constructor(public navCtrl: NavController, 
                private camera: Camera, 
                public navParams: NavParams,
                private alertCtrl: AlertController, 
                public actionSheetCtrl: ActionSheetController,
                private regPro: RegisterProvider, 
                private storage: Storage,
                public loadingCtrl: LoadingController) {
                    
        this.user_id = this.navParams.get('user_id');
        this.email = this.navParams.get('email');
    }

    ionViewDidLoad() {
        this.storage.get('token').then(data=>{
            if(data){
                this.token = data;
            }
        });
    }

    goBack() {
        this.navCtrl.pop();
    }

    AlphanumericPassword(even) {
        var patt = new RegExp('^[A-Za-z0-9@. ]+$');
        var res = patt.test(this.password);
        if (res) {
        }
        else {
            if (this.password) {
                this.password = this.password.substring(0, this.password.length - 1);
                even.preventDefault()

                let alert = this.alertCtrl.create({
                    subTitle: '英数字で入力してください。',
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
            }
        }
    }

    AlphanumeriConfirm(even) {
        var patt = new RegExp('^[A-Za-z0-9@. ]+$');
        var res = patt.test(this.confirmpassword);
        if (res) {
        }
        else {
            if (this.confirmpassword) {
                this.confirmpassword = this.confirmpassword.substring(0, this.confirmpassword.length - 1);
                even.preventDefault()

                let alert = this.alertCtrl.create({
                    subTitle: '英数字で入力してください。',
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
            }
        }
    }

    goNext() {
        if(!this.username || this.username.length < 1 || this.username.length > 10){
            let alert = this.alertCtrl.create({
                subTitle: '1文字以上10文字以内で入力してください',
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
            this.goRegisterComplete()
        }
    }

    goRegisterComplete() {
        this.loadingShow();
        this.regPro.register(this.user_id, this.username, this.password, this.email, this.photo, this.token).then(data => {
            this.loadingHide();
            this.storage.set('sign_id', data['content']['sign_id']);
            this.navCtrl.push(RegisterCompletePage, {'loginType': '1'});
        }).catch(err=>{
            if(err.error && err.error.content) {
                let alert = this.alertCtrl.create({
                    // subTitle: err.error.content,
                    subTitle: "このユーザー名は既に使用されています。", // このユーザー名は既に使用されています。
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
            }

            this.loadingHide();
        });
    }

    openCamera() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'プロフィール写真を選択',
            buttons: [
                {
                    text: 'カメラを起動',
                    role: 'destructive',
                    handler: () => {
                        this.fetchPhoto(this.camera.PictureSourceType.CAMERA);
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: () => {
                        this.fetchPhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                        console.log('Archive clicked');
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

        actionSheet.present();
    }

    fetchPhoto(srcType){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: srcType,
            allowEdit: true,
            correctOrientation: true
        }
          
        this.camera.getPicture(options).then((imageData) => {
           // imageData is either a base64 encoded string or a file URI
           // If it's base64 (DATA_URL):
           let base64Image = 'data:image/jpeg;base64,' + imageData;
           this.photo = base64Image;
           console.log(base64Image);
        }, (err) => {
           // Handle error
        });
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

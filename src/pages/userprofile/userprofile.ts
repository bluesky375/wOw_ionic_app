import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { AlertController, ModalController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera';

import { RegisterProvider } from '../../providers/register/register';
import { SettingsProvider } from './../../providers/settings/settings';

import { ContinentPage } from '../continent/continent';
import { CategoryPage } from '../category/category';
import { CityPage } from '../city/city';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface location {
    id: number;         // id of prefecture or country
    name: string;    // name of prefecture or country
}

@IonicPage()
@Component({
    selector: 'page-userprofile',
    templateUrl: 'userprofile.html',
})
export class UserProfilePage {

    user: any = {};
    // cities: Array<any> = [];
    password : string = '';
    confirmpwd: string = '';

    categories: Array<any> = [];
    category_text: string;
    category: Array<any> = [];

    locations: Array<location> = [];

    load: any;
    loadingflag: boolean = false;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private camera: Camera, 
                private alertCtrl: AlertController, 
                private regPro: RegisterProvider, 
                private setPro: SettingsProvider, 
                public actionSheetCtrl: ActionSheetController, 
                public modalCtrl: ModalController, 
                public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        this.regPro.getCategory().then(data => {
            this.categories = data['category_list'];
            this.getAccount();
        });
        /*
        this.regPro.getCity().then(data => {
            this.cities = data['city_list'];
        });
        */
    }

    getAccount() {
        this.setPro.getAccount().then(res => {
            this.user = res['account'];
            if (!this.user.user_icon || this.user.user_icon == '') {
                this.user.user_icon = 'assets/imgs/userse.png';
            }
            // this.password = this.user.password;
            // this.confirmpwd = this.user.password;

            /*
            this.category.push(this.user.category_id1);
            this.category.push(this.user.category_id2);

            this.category_text = "";
            for (var c = 0; c < this.category.length; c++) {
                var num = this.category[c];
                this.category_text += " " + this.categories[num - 1].category_name;
            }
            */
            var ct_text1 = this.user.category;
            this.category = ct_text1.split(',');

            var ct_text = "";
            for (var j = 0; j < this.categories.length; j++) {
                var cat = this.categories[j];
                if (this.category.indexOf(cat.id) > -1) {
                    ct_text = ct_text + cat.category_name + " • "
                }
            }
            this.category_text = ct_text.substr(0, ct_text.length - 3);

            for (var j = 0; j < this.user.location.length; j++) {
                var location = this.user.location[j];
                var newone: location = {
                    id: location.id,
                    name: location.name
                }
                this.locations.push(newone);
            }
        });
    }

    goSelectCategory() {
        let categoryPageModal = this.modalCtrl.create(CategoryPage, {category: this.category});
        categoryPageModal.onDidDismiss(data => {
            if(data && data['category'] && data['category'].length){
                this.category = data['category'];
                this.category_text = "";
                for (var c = 0; c < this.category.length; c++) {
                    var num = this.category[c];
                    this.category_text += " " + this.categories[num - 1].category_name;
                }
            }
        });
        categoryPageModal.present();
    }

    goSelectLocation() {
        let continentModal = this.modalCtrl.create(ContinentPage, {locations: this.locations});
        continentModal.onDidDismiss(data => {
            if(data && data['locations'] && data['locations'].length){
                this.locations = data['locations'];
            }
        });
        continentModal.present();
    }

    goSelectCity() {
        let cityPageModal = this.modalCtrl.create(CityPage, {city:this.user.city});
        cityPageModal.onDidDismiss(data => {
            this.user.city = data.city;
        });
        cityPageModal.present();
        // this.navCtrl.push(CityPage);
    }

    confirm() {
        if (this.password == '' || this.password != this.confirmpwd) {
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
            var location_text = "[";
            for (var i = 0; i < this.locations.length; i++) {
                location_text += this.locations[i].id + ", ";
            }
            	
            var location = location_text.substr(0, location_text.length - 2) + "]";

            var ct_text = "[";
            for (var j = 0; j < this.category.length; j++) {
                ct_text += this.category[j] + ", ";
            }
            	
            var ct = ct_text.substr(0, ct_text.length - 2) + "]";

            let alert = this.alertCtrl.create({
                title: '',
                message: '編集内容は保存されません。宜しいですか？',
                buttons: [
                    {
                        text: 'いいえ',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'はい',
                        handler: () => {
                            this.loadingShow();
                            this.setPro.updateAccount(
                                this.user.id,
                                this.user.username,
                                this.user.email,
                                this.password,
                                this.user.user_icon,
                                ct,
                                location
                            ).then(data =>{
                                this.loadingHide();
                                this.navCtrl.pop();
                            }).catch(err => {
                                this.loadingHide();
                            });
                        }
                    }
                ]
            });
            alert.present();
        }
    }

    deletePhoto(index) {

        console.log("deletephoto: " + index);

        let confirm = this.alertCtrl.create({
            title: 'この画像を削除致しますか？',
            message: '',
            buttons: [
                {
                    text: 'いいえ',
                    handler: () => {
                        //  console.log('Disagree clicked');
                    }
                }, {
                    text: 'はい',
                    handler: () => {
                        this.user.user_icon = '';

                    }
                }
            ]
        });
        confirm.present();
    }

    openCamera() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '写真を選択',
            buttons: [
                {
                    text: 'カメラを起動する',
                    role: 'destructive',
                    handler: () => {
                        this.takePhotoC();
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: () => {
                        this.takePhotoG();
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });

        actionSheet.present();
    }

    takePhotoC() {
        const options: CameraOptions = {
            quality: 50, // picture quality
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType : this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit : true,
            targetWidth : 300,
            targetHeight : 250,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.user.user_icon = "data:image/jpeg;base64," + imageData;

        }, (err) => {
            console.log(err);
        });
    }

    takePhotoG() {
        const options: CameraOptions = {
            quality: 50, // picture quality
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit : true,
            targetWidth : 300,
            targetHeight : 250,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.user.user_icon = "data:image/jpeg;base64," + imageData;

        }, (err) => {
            console.log(err);
        });
    }

    loadingShow() {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    }

    loadingHide() {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    }
}

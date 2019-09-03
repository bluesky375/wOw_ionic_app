import { Component } from '@angular/core';
import { 
    IonicPage, 
    NavController, 
    NavParams, 
    ToastController, 
    LoadingController,
    ModalController
} from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { AdsPage } from '../ads/ads';
import { CategoryPage } from '../category/category';
import { AdSubmitViewPage } from '../adsubmitview/adsubmitview';

import { AdsProvider } from '../../providers/ads/ads';
import { RegisterProvider } from '../../providers/register/register';


/**
 * Generated class for the AdNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-adnew',
    templateUrl: 'adnew.html',
})

export class AdNewPage {

    private adDetails : any = {
        email : '',
        content : '',
        confEmail : '',
        category : '',
        days : 1,
        price : 100,
        url : ''
    };

    adId: any;    
    private imageids : any[] = [];
    public photos: any[] = [];
    private deleted : number[] = [0,0,0,0,0];

    public base64Image: string;
    
    categories: Array<any> = [];
    category: Array<any> = [];
    category_text: string = "";

    load: any;
    loadingflag: boolean = false;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private alertCtrl: AlertController, 
                public actionSheetCtrl: ActionSheetController,
                private camera: Camera, 
                private adPro: AdsProvider,
                private toastCtrl : ToastController,
                private regPro: RegisterProvider,
                public modalCtrl: ModalController, 
                public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
        let self = this;
        this.photos = [];
        this.adId = this.navParams.get('adId');

        this.loadingShow();

        this.regPro.getCategory().then(res => {
            this.categories = res['category_list']

            if (this.adId && this.adId!='') {
                this.adPro.getDetail(this.navParams.get('adId')).then(res => {
                    this.adDetails = res['advertise'];
                    this.adDetails.confEmail = this.adDetails.email;
                    res['files'].forEach(item=>{
                        self.photos.push(item.file_name);
                        self.imageids.push(item.id);
                    });
    
                    var ct_text1 = this.adDetails.category;
                    this.category = ct_text1.split(',');
    
                    var ct_text = "";
                    for (var j = 0; j < this.categories.length; j++) {
                        var cat = this.categories[j];
                        if (this.category.indexOf('' + cat.id) > -1) {
                            ct_text = ct_text + cat.category_name + " • "
                        }
                    }
                    this.category_text = ct_text.substr(0, ct_text.length - 3);
    
                    this.loadingHide();
                }).catch(err => {
                    this.loadingHide();
                    console.log(err);
                });
            } else {
                this.loadingHide();
            }            
        }).catch(err => {
            this.loadingHide();
            // console.log(err);
        });
    }

    selectCategory() {
        let categoryPageModal = this.modalCtrl.create(CategoryPage, {category: this.category});
        categoryPageModal.onDidDismiss(data => {
            this.category = [];
            this.category = data['category'];
            /*
            if(data && data['category'] && data['category'].length){
                
            }
            */
            var ct_text = "";
            for (var j = 0; j < this.categories.length; j++) {
                var cat = this.categories[j];
                if (this.category.indexOf('' + cat.id) > -1) {
                    ct_text = ct_text + cat.category_name + " • "
                }
            }
            this.category_text = ct_text.substr(0, ct_text.length - 3);
        });
        categoryPageModal.present();
    }

    submitAd() {
        this.loadingShow();
        
        var ct_text = "[";
        for (var j = 0; j < this.category.length; j++) {
            ct_text += this.category[j] + ", ";
        }
            
        var ct = ct_text.substr(0, ct_text.length - 2) + "]";

        this.adPro.create({
            email: this.adDetails.email,
            cat: ct,
            days: this.adDetails.days,
            url : this.adDetails.url,
            price: this.adDetails.price,
            content: this.adDetails.content,
            file1: this.photos[0],
            file2: this.photos[1],
            file3: this.photos[2],
            file4: this.photos[3],
            file5: this.photos[4]
        }).then(res => {
            this.loadingHide();
            this.navCtrl.push(AdSubmitViewPage);
        }).catch(err => {
            this.loadingHide();
            console.log(err);
        });
    }

    editAd() {
        var ct_text = "[";
        for (var j = 0; j < this.category.length; j++) {
            ct_text += this.category[j] + ", ";
        }
            
        var ct = ct_text.substr(0, ct_text.length - 2) + "]";

        this.loadingShow();
        this.adPro.reSubmit({
            id : this.adDetails.id,
            email: this.adDetails.email,
            cat: ct,
            days: this.adDetails.days,
            price: this.adDetails.price,
            content: this.adDetails.content,
            url : this.adDetails.url,
            file1: this.photos[0],
            file2: this.photos[1],
            file3: this.photos[2],
            file4: this.photos[3],
            file5: this.photos[4],
            file1_id : this.imageids[0],
            file2_id : this.imageids[1],
            file3_id : this.imageids[2],
            file4_id : this.imageids[3],
            file5_id : this.imageids[4],
            delete1 : this.deleted[0],
            delete2 : this.deleted[1],
            delete3 : this.deleted[2],
            delete4 : this.deleted[3],
            delete5 : this.deleted[4],
        }).then(res => {
             this.loadingHide();
            this.navCtrl.popTo(AdsPage);
        }).catch(err => {
            this.loadingHide();
            console.log(err);
        });
    }

    applyAd() {
        if(this.category.length == 0){
            let alert = this.alertCtrl.create({
                subTitle: '最大5つまで選択可能です。',
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

        if (this.adDetails.email == null || this.adDetails.email == '') {
            let alert = this.alertCtrl.create({
                subTitle: 'メールアドレスを入力して下さい。',
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

        if (this.adDetails.email !== this.adDetails.confEmail) {
            let alert = this.alertCtrl.create({
                subTitle: 'メールアドレスが一致しておりません。',
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
        
        if(this.adDetails.content == null || this.adDetails.content == ''){
            let alert = this.alertCtrl.create({
                subTitle: '送信内容を入力して下さい。',
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
        
        if (this.adDetails.days == 0 || this.adDetails.price == 0) {
            let alert = this.alertCtrl.create({
                subTitle: '掲載する日数と予算を入力して下さい。',
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
        
        if (this.adDetails.url == null || this.adDetails.url == '') {
            let alert = this.alertCtrl.create({
                subTitle: 'URLを入力して下さい。',
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
        
        // if (this.photos.length==0 || this.photos[0]=='' || this.photos[1]=='' || this.photos[2]=='' || this.photos[3]=='' || this.photos[4]=='' || this.photos[0]==undefined || this.photos[1]==undefined || this.photos[2]==undefined || this.photos[3]==undefined || this.photos[4]==undefined) {
        if (this.photos.length == 0) {
            let alert = this.alertCtrl.create({
                subTitle: '少なくとも1枚は画像を掲載して下さい。',
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

        let alert = this.alertCtrl.create({
            title: '確認',
            message: 'この内容で申請しますか？',
            buttons: [
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '申請する',
                    handler: () => {
                        if(this.adId) this.editAd();
                        else  this.submitAd();
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    }

    openCamera(value) {
        console.log(value + ":value");
        let actionSheet = this.actionSheetCtrl.create({
            title: '写真を選択',
            buttons: [
                {
                    text: 'カメラを起動する',
                    role: 'destructive',
                    handler: () => {
                        this.takePhotoC(value);
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: () => {
                        this.takePhotoG(value);
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

    takePhotoC(value) {
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
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos[value]=this.base64Image;
        }, (err) => {
            console.log(err);
        });
    }

    takePhotoG(value) {
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
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos[value]=this.base64Image;
        }, (err) => {
            console.log(err);
        });
    }

    deletePhoto(index) {
        let confirm = this.alertCtrl.create({
            title: 'この画像を削除致しますか？',
            message: '',
            buttons: [
                {
                    text: 'いいえ',
                    handler: () => {
                    }
                }, {
                    text: 'はい',
                    handler: () => {
                        this.photos[index] = '';
                        this.deleted[index] = 1;
                    }
                }
            ]
        });
        confirm.present();
    }

    loadingShow(){
        if(this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    }

    loadingHide(){
        if(this.loadingflag == true){
            this.load.dismiss();
        }
        this.loadingflag = false;
    }

}

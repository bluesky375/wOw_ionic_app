import * as exif from 'exif-js';
import EXIF from 'exif-js/exif';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, AlertController, IonicPage, NavController, Tabs, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';
import { DomSanitizer } from '@angular/platform-browser';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SettingsProvider } from "../../providers/settings/settings";
import { PostsProvider } from '../../providers/posts/posts';
import { RegisterProvider } from '../../providers/register/register';
import { CommentModalPage } from '../comment-modal/comment-modal';

/**
 * Generated class for the PostEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-postedit',
    templateUrl: 'postedit.html',
})
export class PostEditPage {

    postData: any = {};

    // User
    user: any = {};
    current_user_icon: any
    sign_id: string;

    // current location (not using)
    mylocation:any;    
    city: number;
    zip:number;
    state:string
    district:string
    country:string;
    streetAddress:string
    long: number;
    lat: number;

    // show map view
    mapShow: boolean = false;

    // location from photo (display under map)
    photoLocation: string;
    
    // private or public
    share: number;

    // social sharing
    facebookac: boolean = false
    twitterac: boolean = false
    instagramac: boolean = false

    // categories and cities from server
    categories: Array<any> = [];
    cities: Array<any> = [];

    // photo
    photo: string;
    // category
    category: number;
    // comment
    comment: string;
    
    load: any;

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    public position: string;
    public marker: any;

    zoomControl: boolean
    mapTypeControl: boolean
    scaleControl: boolean
    streetViewControl: boolean
    rotateControl: boolean
    fullscreenControl: boolean

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private alertCtrl: AlertController, 
                private postPro: PostsProvider,
                private regPro: RegisterProvider,
                private setPro: SettingsProvider,
                private socialSharing: SocialSharing,
                public loadingCtrl: LoadingController,
                public modalCtrl : ModalController) {

        this.postData = this.navParams.get('post');
    }

    ionViewDidLoad() {
        this.comment = ""
        this.photo = ""
        this.category = 0

        console.log(this.postData);
        /*
        if (this.postData.publish == 1 || this.postData.publish == 4 || this.postData.publish == 5 || this.postData.publish == 7){
            this.facebookac = true;
        }

        if (this.postData.publish == 3 || this.postData.publish == 5 || this.postData.publish == 6 || this.postData.publish == 7){
            this.instagramac = true;
        }

        if (this.postData.publish == 2 || this.postData.publish == 4 || this.postData.publish == 6 || this.postData.publish == 7){
            this.twitterac = true;
        }
        */

        this.regPro.getCategory().then(res => this.categories = res['category_list']);
        this.setPro.getAccount().then(res => {
            this.user = res['account'];
            if (!this.user.user_icon || this.user.user_icon == '') {
                this.user.user_icon = 'assets/imgs/userse.png';
            }

            this.current_user_icon = this.user.user_icon;
        });
    }

    update() {
        this.postPro.edit(this.postData).then(() => {
            let alert = this.alertCtrl.create({
                subTitle: '更新が完了致しました。',
                buttons:[{
                    text: 'はい',
                    handler : ()=>{
                        this.navCtrl.popToRoot();
                    }
                }]
            });
            alert.present();
        });
    }

    goback() {
        this.navCtrl.pop();
    }

    delete() {
        this.postPro.delete(this.postData).then(() => {
            let alert = this.alertCtrl.create({
                subTitle: '投稿を削除しました。',
                buttons: [{
                    text: 'はい',
                    role: 'ok',
                    handler: () => {
                        this.navCtrl.popToRoot();
                    }
                }]
            });
            alert.present();
        })
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            message: '投稿を削除しますか？',
            buttons: [
                {
                    text: 'いいえ',
                    role: 'cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'はい',
                    role: 'ok',
                    handler: () => {
                        this.delete();
                    }
                }
            ]
        });
        alert.present();
    }

}

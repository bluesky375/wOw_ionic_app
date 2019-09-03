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
 * Generated class for the PostNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare function unescape(s:string): string;

declare function findEXIFinJPEG(s:any);

function decode64(input) {
    let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                "abcdefghijklmnopqrstuvwxyz" +
                "0123456789" +
                "+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
  
    //  remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        // alert("There were invalid base64 characters in the input text.\n" +
        //       "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
        //       "Expect errors in decoding.");
    }

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    console.log(input);
    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
           output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
           output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);

    return unescape(output);
}

function get_exif_data(image_result){
    var d = image_result.split(",");
    // var data = image_result.replace("data:image/jpeg;base64,", "");
    var data = d[1];
    console.log(d);
    var decoded_data = decode64(data);

    var getLongAt = function(iOffset, bBigEndian){
        var iByte1 = decoded_data.charCodeAt(iOffset),
            iByte2 = decoded_data.charCodeAt(iOffset + 1),
            iByte3 = decoded_data.charCodeAt(iOffset + 2),
            iByte4 = decoded_data.charCodeAt(iOffset + 3);

        var iLong = bBigEndian ? 
            (((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4 :
            (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
        if (iLong < 0) iLong += 4294967296;
        return iLong;
    };
    
    var getSLongAt = function(iOffset, bBigEndian){
        var iULong = getLongAt(iOffset, bBigEndian);
        if (iULong > 2147483647)
            return iULong - 4294967296;
        else
            return iULong;
    };
    
    var result = findEXIFinJPEG({ 
        getByteAt: function(idx) { return decoded_data.charCodeAt(idx); },
        getLength: function() { return decoded_data.length; },
        getShortAt: function(iOffset, bBigEndian) {
                var iShort = bBigEndian ? 
                    (decoded_data.charCodeAt(iOffset) << 8) + decoded_data.charCodeAt(iOffset + 1) : 
                    (decoded_data.charCodeAt(iOffset + 1) << 8) + decoded_data.charCodeAt(iOffset)
                if (iShort < 0) iShort += 65536;
                return iShort;
            },
        getStringAt: function(a, b) { return decoded_data.substring(a, a+b); },
        getLongAt: getLongAt,
        getSLongAt: getSLongAt
    });
    console.log("result", result);
    return result;
}

declare var google;

@IonicPage()
@Component({
    selector: 'page-postnew',
    templateUrl: 'postnew.html',
})
export class PostNewPage {

    public myCallback: (name: any) => any;
    
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
                public actionSheetCtrl: ActionSheetController,
                private camera: Camera, 
                public regPro: RegisterProvider,
                private postPro: PostsProvider, 
                public storage: Storage,
                private geo: Geolocation,
                private nativeGeocoder: NativeGeocoder,
                private socialSharing: SocialSharing,
                private setPro: SettingsProvider,
                private base64: Base64,
                public loadingCtrl: LoadingController,
                private _DomSanitizationService: DomSanitizer,
                private geolocation: Geolocation,
                public modalCtrl : ModalController) {
        
    }

    ionViewDidLoad() {

        this.facebookac = false
        this.twitterac = false
        this.instagramac = false

        this.regPro.getCategory().then(data => this.categories = data['category_list']);
        this.regPro.getCity().then(data => this.cities = data['city_list']);
        this.storage.get('sign_id').then(d => this.sign_id = d);
        this.share = 0;
        this.getAccount();

        var options = {
            timeout: 50000,
            maximumAge: 0
        };
        
        this.comment = ""
        this.photo = ""
        this.category = 0
        
        this.geo.getCurrentPosition(options).then(position => {
            let coords = position['coords'];
            this.lat = coords.latitude;
            this.long = coords.longitude;

            let options: NativeGeocoderOptions = {
                useLocale: true,
                maxResults: 5
            };

            this.nativeGeocoder.reverseGeocode(this.lat, this.long, options).then((result: NativeGeocoderReverseResult[]) => {
                this.mylocation = result[0]

                // this.loadMap([{lat:35.68950,long:139.69170}]);
                if (this.mylocation) {
                    this.city = this.mylocation.locality;
                    this.zip = this.mylocation.postalCode;
                    this.state = this.mylocation.administrativeArea;
                    this.district = this.mylocation.subAministrativeArea;
                    this.country = this.mylocation.countryName;
                    this.streetAddress = this.mylocation.subLocality+","+this.mylocation.thoroughfare;    
                }
            }).catch((error: any) => {
                // console.log("error in nativeGeocoder" + error)
            });
        }).catch(error => {
            this.lat = 28.716304;
            this.long = 77.103210;
        });
    }
    
    getAccount() {
        this.loadingShow();
        this.setPro.getAccount().then(res => {
            this.user = res['account'];

            if (!this.user.user_icon || this.user.user_icon == '') {
                this.user.user_icon = 'assets/imgs/userse.png';
            }

            this.current_user_icon = this.user.user_icon;

            this.loadingHide();
        });
    }

    OpenCamera() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'プロフィール写真を選択',
            buttons: [
                {
                    text: 'カメラを起動',
                    role: 'destructive',
                    handler: () => {
                        this.fetchPhoto(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: () => {
                        this.fetchPhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
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

    fetchPhoto(srcType){
        const options: CameraOptions = {
            // quality: 100,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE,
            sourceType: srcType,
            allowEdit: true,
            correctOrientation: true
        }
          
        this.camera.getPicture(options).then((imageData) => {
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            
            let data = unescape(imageData);

            let n = data.indexOf("content://");
            // console.log(n);

            if (n > -1) {
                alert("このファイル形式は使用することが出来ません。");
                return;
            }

            this.photo = imageData;
            
            // console.log(this.photo);
            let filePath: string = imageData;
            this.base64.encodeFile(filePath).then((base64File: string) => {
                this.photo = base64File;
                let exif_data = get_exif_data(base64File);
                // for(var idx in exif_data){
                //     console.log(idx, JSON.stringify(exif_data[idx]));
                // }
                
                let lat = this.convertDegToDec(exif_data['GPSLatitude']);
                let long = this.convertDegToDec(exif_data['GPSLongitude']);
                // console.log(lat,long);
                if(lat && long){
                    this.mapShow = true;
                    let options: NativeGeocoderOptions = {
                        useLocale: true,
                        maxResults: 5
                    };
                    
                    this.nativeGeocoder.reverseGeocode(lat, long, options).then((result: NativeGeocoderReverseResult[]) => {
                        let loc = result[0];
                        let add = "";
                        if(loc.subLocality)
                            add = add + loc.subLocality;

                        if(loc.thoroughfare)
                            add = add + " " + loc.thoroughfare;

                        if(loc.locality)
                            add = add + " " + loc.locality;

                        if(loc.administrativeArea)
                            add = add + " " + loc.administrativeArea;

                        if(loc.countryName)
                            add = add + " " + loc.countryName;

                        if(loc.postalCode)
                            add = add + " " + loc.postalCode;

                        this.photoLocation = add;
                        this.loadMap([{lat: lat, long: long, address: add}]);
                    });
                } else {
                    this.mapShow = false;
                }
            }, (err) => {
                console.log("error", err);
            });
        }, (err) => {
           // Handle error
           console.log("error", err);
        });
    }

    loadMap(loactions) {

        var locations = loactions;

        let mapOptions = { // 35.68950, 139.69170  43.770542, 11.254856
            center: new google.maps.LatLng(locations[0].lat || 35.68950, locations[0].long || 139.69170),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            attributionControl: false,
        }

        // var infowindow = new google.maps.InfoWindow();
        // var content = "<div ><img src='assets/imgs/selectcat.png'></div>";

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        // var infowindow = new google.maps.InfoWindow({
        //     content: '<img src="'+this.photo+'" style="width:40px; height: 40px;"/>'
        // });

        let marker;

        for (let i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].long),
                map: this.map,
                icon: 'assets/imgs/mapblue.png'
            });
            
            // infowindow.open(this.map, marker);
            /*
            google.maps.event.addListener(marker, 'click', ((marker, i) => {
                return () => {
                    // infowindow.setContent(content);
                    var icon = {url:this.photo, scaledSize: new google.maps.Size(40, 40) };
                    marker.setIcon(icon);
                }
            })(marker, i));
            */
        }
    }
    	
    convertDegToDec(arr){
        console.log(arr);
        return arr[0]+(arr[1]/60)+(arr[2]/3600);
    };

    loaded(e) {
       		
    }

    deletePhoto() {
        let confirm = this.alertCtrl.create({
            title: 'この写真を削除しますか？',
            message: '',
            buttons: [
                {
                    text: 'いいえ',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'はい',
                    handler: () => {
                        console.log('Agree clicked');
                        this.photo = '';
                    }
                }
            ]
        });
        confirm.present();
    }

    public openModal(){ 
        var modalPage = this.modalCtrl.create(CommentModalPage, {comment: this.comment}); 
        modalPage.onDidDismiss(data => {
            if(data && data['comment'] && data['comment'].length){
                this.comment = data['comment'];
            }
        });
        modalPage.present(); 
    }

    showCommentBox = false;
    commenttext: any;
    type: any;

    showDialog() {
        this.showCommentBox = true;
        this.commenttext = this.comment;
    }

    sendClick() {
        this.comment = this.commenttext;
        this.showCommentBox = false;
    }

    cloceClick() {
        this.showCommentBox = false;
    }

    presentAlert() {
        let alert = this.alertCtrl.create({
            subTitle: 'この内容で投稿しますか？',
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
                    role: 'submit',
                    handler: () => {
                        var publish   
                        if(!this.facebookac && !this.twitterac && !this.instagramac ){
                            publish=0
                        } else if(this.facebookac && !this.twitterac && !this.instagramac ){
                            publish=1
                            this.shareViaFacebook()
                        } else if(!this.facebookac && this.twitterac && !this.instagramac ){
                            publish=2                        
                            this.shareViaTwitter()
                        } else if(!this.facebookac && !this.twitterac && this.instagramac ){
                            publish=3
                            this.shareViaInstagram()
                        } else if(this.facebookac && this.twitterac && !this.instagramac ){
                            publish=4   
                            this.shareViaTwitter()
                            this.shareViaFacebook()
                        } else if(this.facebookac && !this.twitterac && this.instagramac ){
                            publish=5
                            this.shareViaInstagram()                        
                            this.shareViaFacebook()
                        } else if(!this.facebookac && this.twitterac && this.instagramac ){
                            publish=6                        
                            this.shareViaInstagram()
                            this.shareViaTwitter()
                        } else if(this.facebookac && this.twitterac && this.instagramac ){
                            publish=7
                            this.shareViaInstagram()
                            this.shareViaTwitter()
                            this.shareViaFacebook()
                        }
                        
                        let postData = {
                            long: this.long,
                            lati: this.lat,
                            sign_id: this.sign_id,
                            city: this.city,
                            comment: this.comment,
                            file_name: this.photo,
                            publish: publish,
                            category: this.category,
                            share: this.share
                        }
                        
                        this.loadingShow();
                        this.postPro.create(postData).then(result => {
                            this.loadingHide();
                            
                            let confirm = this.alertCtrl.create({
                                subTitle: '投稿が完了致しました。',
                                buttons: [
                                    {
                                        text: '続けて投稿する',
                                        handler: () => {
                                            this.comment = ""
                                            this.photo = ""
                                            this.category = 0
                                            this.mapShow = false
                                            this.photoLocation = ""
                                            this.facebookac = false
                                            this.twitterac = false
                                            this.instagramac = false
                                        }
                                    }, {
                                        text: 'HOMEに戻る',
                                        handler: () => {                    
                                            var t: Tabs = this.navCtrl.parent;
                                            t.select(0);
                                        }
                                    }
                                ]
                            });
                            confirm.present();
                        }).catch((err) => {
                            this.loadingHide();
                            if(err.error && err.error.content)
                                console.log(err.error.content);
                        });       
                    }
                }
            ]
        });
        
        alert.present();
    }

    shareViaFacebook() {
        this.socialSharing.shareViaFacebook(this.comment, this.photo, null)
        .then((data) =>
        {
            console.log('Shared via Facebook');
        })
        .catch((err) =>
        {
            alert("Facebookと共有することが出来ませんでした。\n " + JSON.stringify(err));
        });
    }
    
    shareViaInstagram() {     
        this.socialSharing.shareViaInstagram(this.comment, this.photo)
        .then((data) =>
        {
            console.log('Shared via shareViaInstagram');
        })
        .catch((err) =>
        {
            alert("Instagramと共有することが出来ませんでした。\n " + JSON.stringify(err));
        });
    }

    shareViaTwitter() {
        this.socialSharing.shareViaTwitter(this.comment, this.photo, null).then((data) => {
            console.log('Shared via Twitter');
        }).catch((err) =>{
            alert("Twitterと共有することが出来ませんでした。\n " + JSON.stringify(err));
        });  
    }

    loadingShow() {
        this.load = this.loadingCtrl.create({
            content: 'しばらくお待ちください。'
        });
        
        this.load.present();
    }

    loadingHide() {
        this.load.dismiss();
    }

}

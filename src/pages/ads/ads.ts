import { Component } from '@angular/core';
import { 
    IonicPage, 
    LoadingController, 
    NavController, 
    NavParams
} from 'ionic-angular';

import { AdViewPage } from '../adview/adview';
import { AdNewPage } from '../adnew/adnew';

import { SettingsProvider } from '../../providers/settings/settings';
import { AdsProvider } from '../../providers/ads/ads';
import { RegisterProvider } from '../../providers/register/register';
import { getScrollData } from 'ionic-angular/umd/components/input/input';
/**
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-ads',
    templateUrl: 'ads.html',
})
export class AdsPage {

    pet: string = "kittens";
    showAd: Array<any> = [];
    allowAd: Array<any> = [];
    disAllowAd: Array<any> = [];
    current_user_icon:any;      // current user icon
    user: any = {};             // current user

    category_text: string = "";
    categories: Array<any> = [];
    category: Array<any> = [];

    load: any;
    loadingflag: boolean = false;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private adPro: AdsProvider, 
                private setPro: SettingsProvider,
                private regPro: RegisterProvider,
                public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {

        this.loadingShow();

        this.regPro.getCategory().then(res => {
            this.categories = res['category_list']

            this.loadingHide();

            this.getListData();
        }).catch(err => {
            this.loadingHide();
        });

        this.current_user_icon = 'assets/imgs/userse.png';
        this.getAccount();
    }

    getListData() {
        this.adPro.getAdsByType(1).then(res => {
            this.showAd = res['list']
            for (var j = 0; j < this.showAd.length; j++) {
                
                var ad = this.showAd[j];
                var ct_text1 = ad.category;
                var category = ct_text1.split(',');

                var ct_text = "";
                for (var i = 0; i < this.categories.length; i++) {
                    var cat = this.categories[i];
                    
                    if (category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • "
                    }
                }
                ad.category_text = ct_text.substr(0, ct_text.length - 2);
            }
        }).catch(err => {
            console.log('API error : ', JSON.stringify(err))
        });

        this.adPro.getAdsByType(2).then(res => {
            this.allowAd = res['list']
            for (var j = 0; j < this.allowAd.length; j++) {
                
                var ad = this.allowAd[j];
                var ct_text1 = ad.category;
                var category = ct_text1.split(',');

                var ct_text = "";
                for (var i = 0; i < this.categories.length; i++) {
                    var cat = this.categories[i];
                    
                    if (category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • "
                    }
                }
                ad.category_text = ct_text.substr(0, ct_text.length - 2);
            }

        }).catch(err => {
            console.log('API error : ', JSON.stringify(err))
        });

        this.adPro.getAdsByType(3).then(res => {
            this.disAllowAd = res['list']
            for (var j = 0; j < this.disAllowAd.length; j++) {
                
                var ad = this.disAllowAd[j];
                var ct_text1 = ad.category;
                var category = ct_text1.split(',');

                var ct_text = "";
                for (var i = 0; i < this.categories.length; i++) {
                    var cat = this.categories[i];
                    
                    if (category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • "
                    }
                }
                ad.category_text = ct_text.substr(0, ct_text.length - 2);
            }
        }).catch(err => {
            console.log('API error : ', JSON.stringify(err))
        });
    }

    getAccount() {
        this.setPro.getAccount().then(res => {
            this.user = res['account'];
            if (!this.user.user_icon || this.user.user_icon == '') {
                this.user.user_icon = 'assets/imgs/userse.png';
            }

            this.current_user_icon = this.user.user_icon;
        });
    }

    goAdView(adId, type) {
        this.navCtrl.push(AdViewPage, {adId: adId , type: type})
    }

    goAdNew() {
        this.navCtrl.push(AdNewPage)
    }

    loadingShow() {
        if(this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    }

    loadingHide() {
        if(this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    }
}

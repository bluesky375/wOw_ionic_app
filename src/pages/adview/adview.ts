import { Component } from '@angular/core';
import { 
    IonicPage, 
    LoadingController, 
    NavController,
    NavParams 
} from 'ionic-angular';

import { AdNewPage } from '../adnew/adnew';

import { AdsProvider } from '../../providers/ads/ads';
import { SettingsProvider } from './../../providers/settings/settings';
import { RegisterProvider } from '../../providers/register/register';

/**
 * Generated class for the AdViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-adview',
    templateUrl: 'adview.html',
})

export class AdViewPage {

    adDetail: any = {};
    comments: Array<any> = [];
    images: Array<string> = [];
    first_image : any = 'assets/imgs/userse.png';
    adId : string;
    data : any;
    type : number;

    category_text: string = "";
    categories: Array<any> = [];
    category: Array<any> = [];

    load: any;
    loadingflag: boolean = false;

    user: any = {};
    current_user_icon: any;      // current user icon

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private adPro: AdsProvider, 
                private setPro: SettingsProvider,
                private regPro: RegisterProvider,
                public loadingCtrl: LoadingController) {

        this.type =this.navParams.get('type');
        this.adId = this.navParams.get('adId');
        this.current_user_icon = 'assets/imgs/userse.png';
    }

    ionViewDidLoad() {

        this.getAccount();

        this.loadingShow();

        this.regPro.getCategory().then(res => {
            this.categories = res['category_list']
            
            this.adPro.getDetail(this.navParams.get('adId')).then(res => {
                this.adDetail = res['advertise'];
                this.comments = res['comments'];
                this.images = res['files'];
                
                if(res['files'].length>0)
                    this.first_image = res['files'][0].file_name;
    
                var ct_text1 = this.adDetail.category;
                this.category = ct_text1.split(',');
                console.log(this.category);
    
                var ct_text = "";
                for (var j = 0; j < this.categories.length; j++) {
                    var cat = this.categories[j];
                    
                    if (this.category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • "
                    }
                }
                this.category_text = ct_text.substr(0, ct_text.length - 2);
    
                this.loadingHide();
            }).catch(err => {
                this.loadingHide();
            });
            // this.loadingHide();
        }).catch(err => {
            this.loadingHide();
        });
    }

    getAccount() {
        this.setPro.getAccount().then(res => {
            this.user = res['account'];
            if (!this.user.user_icon || this.user.user_icon == '') {
                this.user.user_icon = 'assets/imgs/userse.png';
            }

            this.current_user_icon = this.user.user_icon;
        }).catch(err => {
            // this.loadingHide();
        });
    }
    
    reSubmit() {
        this.navCtrl.push(AdNewPage, {adId: this.adId});
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

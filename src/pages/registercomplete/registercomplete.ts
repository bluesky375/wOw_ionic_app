import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

import { RegisterProvider } from '../../providers/register/register';

import { ContinentPage } from '../continent/continent';
import { TabsPage } from '../tabs/tabs';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the RegisterCompletePage page.
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
    selector: 'page-registercomplete',
    templateUrl: 'registercomplete.html',
})

export class RegisterCompletePage {

    sign_id: string;
    categories: Array<any> = [];
    category: Array<any> = [];
    locations: Array<location> = [];

    load: any;
    loginType: any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private regPro: RegisterProvider, 
                private storage: Storage,
                public modalCtrl: ModalController, 
                public loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {
                    
        this.loginType = this.navParams.get('loginType') || 1;  // email: 1

        this.regPro.getCategory().then(data => 
            this.categories = data['category_list']
        );

        this.storage.get('sign_id').then((sign_id)=>{
            this.sign_id = sign_id;
        });
    }

    ionViewDidLoad() {
        
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
        });
        categoryPageModal.present();
    }

    selectCity() {
        let continentModal = this.modalCtrl.create(ContinentPage, {locations: this.locations});
        continentModal.onDidDismiss(data => {
            this.locations = [];
            this.locations = data['locations'];
        });
        continentModal.present();
    }

    register() {
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
        } else if(this.locations.length == 0){
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
        } else {
            this.loadingShow();
            
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

            this.regPro.registerComplete(ct, location, this.sign_id).then(data => {
                this.loadingHide();
                this.storage.set('loginType', this.loginType);
                this.navCtrl.push(TabsPage);
            }).catch(err=>{
                this.loadingHide();

                console.log(err);
            });
        }
    }

    goBack() {
        this.navCtrl.pop();
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

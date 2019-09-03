import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import { PostsProvider } from '../../providers/posts/posts';
import { AdsProvider } from '../../providers/ads/ads';

/**
 * Generated class for the ViolationReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-violationreport',
    templateUrl: 'violationreport.html',
})
export class ViolationReportPage {
    
    postData: any = {};
    content: string;
    sign_id:any;
    type: any;
    date: any;
    currentusername: "";
    origincontent = "";

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private alertCtrl: AlertController, 
                private setPro: SettingsProvider,
                public postPro: PostsProvider,
                public adsPro: AdsProvider) {

        this.postData = this.navParams.get('post');
        this.sign_id = this.navParams.get('sign_id');
        this.type = this.navParams.get('type');
        
        this.setPro.getAccount().then(res => {
            this.currentusername =  res['account'].username;
        });

        this.origincontent = this.postData.comment || this.postData.content;
    }

    ionViewDidLoad() {
        this.postData = this.navParams.get('post');
        var d = new Date();
        this.date = new Date(this.postData.reg_date).getDate() + '-' + (new Date(this.postData.reg_date).getMonth() + 1) + '-' + new Date(this.postData.reg_date).getFullYear()

        this.setPro.getAccount().then(res => {
            this.currentusername =  res['account'].username;
        });
    }

    goBack() {
        this.navCtrl.pop();
    }

    confirm() {
        let alert = this.alertCtrl.create({
            subTitle: 'ご報告ありがとうございました。',
            buttons: [
                {
                    text: '閉じる',
                    handler: () => {
                        this.setPro.sendReport(this.postData.user_id,this.type,this.content,this.postData.reg_date,this.postData.id).then(() => {
                            this.goBack();
                        });
                    }
                }
            ]
        });
        alert.present();
    }

}

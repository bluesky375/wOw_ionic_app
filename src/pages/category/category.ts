import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RegisterProvider } from './../../providers/register/register';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-category',
    templateUrl: 'category.html',
})

export class CategoryPage {

    checkboxValue: any = {};
    checkedNum: number = 0;
    categories: Array<any> = [];
    category = [];
    past_category = [];

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public viewCtrl: ViewController,
                private regPro: RegisterProvider,
                private alertCtrl: AlertController) {
                    
        this.regPro.getCategory().then(data => 
            this.categories = data['category_list']
        );
        
        this.category = navParams.get('category') || [];
        this.past_category = this.category.slice();
        this.checkedNum = this.category.length;
    }

    ionViewDidLoad() {
        
    }

    goBack() {
        let data = { 'category': [] };
        this.viewCtrl.dismiss(data);
    }

    dismiss() {
        let data = { 'category': this.past_category };
        this.viewCtrl.dismiss(data);
    }

    submit() {
        let data = { 'category': this.category };
        this.viewCtrl.dismiss(data);
    }

    addValue(e, id) {
        if(e._value == true && (this.checkedNum < 5)){
            this.category.push(id);
            this.checkedNum ++;
        } else if (e._value == true) {
            e._value = false;

            let alert = this.alertCtrl.create({
                subTitle: 'カテゴリは5つしか追加できません。',
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();
        } else {
            this.category.splice(this.category.indexOf(id), 1 );
            this.checkedNum --;
        }
    }
}

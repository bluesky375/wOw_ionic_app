import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailInputPage } from "../emailinput/emailinput";
import { EmailLoginPage } from '../emaillogin/emaillogin';
/**
 * Generated class for the EmailOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-emailoption',
    templateUrl: 'emailoption.html',
})
export class EmailOptionPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        
    }

    goEmailRegister(){
        this.navCtrl.push(EmailInputPage)
    }

    goBack() {
        this.navCtrl.pop();
    }

    goEmailLogin(){
        this.navCtrl.push(EmailLoginPage);
    }
}

import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
//import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { Facebook } from '@ionic-native/facebook';
//import { Instagram } from "ng2-cordova-oauth/core";
// import { Instagram } from "ng2-cordova-oauth/provider/instagram";
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { EmailOptionPage } from '../emailoption/emailoption';
import { RegisterCompletePage } from '../registercomplete/registercomplete';
import { TabsPage } from '../tabs/tabs';
import { WelcomeProvider } from "./welcome.data.service";
import { LoginProvider } from '../../providers/login/login';

//import { environment } from '../../environments/environment';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    // private oauth: OauthCordova = new OauthCordova();
    
    // private facebookProvider: Facebook = new Facebook({
    //     clientId: "242722836325463",
    //     appScope: ["public_profile,email"]
    // });
    
    // private instagramProvider: Instagram = new Instagram({
    //     clientId: "af48bebdd33740f7aa095acf4af4ae21",
    //     redirectUri: 'http://localhost',  // Let is be localhost for Mobile Apps
    //     responseType: 'token',   // Use token only 
    //     appScope: ["basic"]
    // });

    token: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private platform: Platform,
                private twitter: TwitterConnect,
                public welcomeProvider: WelcomeProvider,
                public login: LoginProvider,
                private storage: Storage,
                public alertCtrl: AlertController,                
                public loadingCtrl: LoadingController,
                private fb: Facebook,
                private googlePlus: GooglePlus) {
    }

    ionViewDidLoad() {
        this.storage.get('sign_id').then(data=>{
            if(data){
                this.navCtrl.push(TabsPage);
                // this.navCtrl.push(RegisterCompletePage, {'loginType': '1'});
            }
        });
    }

    goToNext() {
        this.navCtrl.push(EmailOptionPage);
    }

    gotoTabpage() {
        this.navCtrl.push(TabsPage)
    }

    ////////////////////////////////////////////////////////
    public doFbLogin(){
       this.storage.get('token').then(data=>{
          this.token = data;
       });
                
        const loading = this.loadingCtrl.create({
            content: 'お待ちください...'
        });
        this.presentLoading(loading); 
    
        //the permissions your facebook app needs from the user
        const permissions = ["public_profile", "email"];
    
        this.fb.login(permissions)
        .then(response => {          
          //let userId = response.authResponse.userID;       
          //Getting name and email properties
          //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions
          this.welcomeProvider.getUsersDetailsFromFacebook(response.authResponse.accessToken).subscribe(data => {
              loading.dismiss();
              this.login.socialLogin('facebook', data.id, data.name, "https://graph.facebook.com/"+data.id+"/picture?width=1024&height=1024", this.token).then(res => {
                  if(res['content']['sign_id']){
                      this.storage.set('sign_id', res['content']['sign_id']);

                      if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "" ){
                          this.navCtrl.push(RegisterCompletePage, {'loginType':'2'});
                      } else {
                          this.storage.set('loginType', 2);
                          this.gotoTabpage();
                      }
                  }
                  
              }).catch(err => console.log(err));
          })
        }, error =>{
          console.log(error);
          loading.dismiss();
          if(!this.platform.is('cordova')){
            this.presentAlert();
          }         
        });
      }
    
      
      async presentAlert() {
        let alert = this.alertCtrl.create({
            subTitle: 'ログイン中にエラーが発生しました。',
            buttons: [
                {
                    text: 'はい',
                    handler: () => {
                        
                    }
                }
            ]
        });
        alert.present();
      }
    
      async presentLoading(loading) {
        return await loading.present();
      }
      ////////////////////////////////////////////////////////////////////    

    public doGoogleLogin(){
      this.storage.get('token').then(data=>{
         this.token = data;
      });
      const loading = this.loadingCtrl.create({
            // content: 'お待ちください...'
            content: this.token
      });
      this.presentLoading(loading);
    //   setTimeout(() => {
    //     loading.dismiss();
    //   }, 15000);
      this.googlePlus.login({
        'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        // 'webClientId': '139302156705-ecmihukmkhjjjulp4kulc3c6hog33pgi.apps.googleusercontent.com', // auto generated web client id when creating the google service json file on firebase.
        'webClientId': '1092574658389-dbrdv8i5tran6o9ofs1po858632t12mt.apps.googleusercontent.com',
        'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
        .then(user => {//method "instagram" will removed later, instead of it, "google" will be written here
            this.login.socialLogin('instagram', user.userId, user.displayName, user.imageUrl, this.token)
                .then(res => {
                    loading.dismiss();
                    ////////////////////
                    // let alert = this.alertCtrl.create({
                    //     subTitle: JSON.stringify(res),
                    //     buttons: [
                    //         {
                    //             text: 'OK',
                    //             handler: () => {
                                    
                    //             }
                    //         }
                    //     ]
                    // });
                    // alert.present();
                    //////////////////////////////
                    this.storage.set('sign_id', res['content']['sign_id']);

                    if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "" ){
                        this.navCtrl.push(RegisterCompletePage, {'loginType':'3'});
                    } else {
                        this.storage.set('loginType', 3);
                        this.gotoTabpage();
                    }
                }).catch(err => {
                    loading.dismiss();
                    this.presentAlert();
            });          
        }, err => {
            let alert = this.alertCtrl.create({
                subTitle: err,
                buttons: [
                    {
                        text: 'はい',
                        handler: () => {

                        }
                    }
                ]
            });
            alert.present();
            console.log(err);
            loading.dismiss();
          
          if(!this.platform.is('cordova')){
            this.presentAlert();
          }          
        })
    }

    public twitterLogin() {
        this.storage.get('token').then(data=>{
            this.token = data;
        }); 
        const loading = this.loadingCtrl.create({
            content: 'お待ちください...'
        });
        this.presentLoading(loading); 
        this.twitter.login().then(res => {
            this.twitter.showUser().then(data=>{
                loading.dismiss();
                this.login.socialLogin('twitter', data.id_str, data.screen_name, data.profile_image_url, this.token).then(res => {
                    this.storage.set('sign_id', res['content']['sign_id']);

                    if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "" ){
                        this.navCtrl.push(RegisterCompletePage, {'loginType':'4'});
                    } else {
                        this.storage.set('loginType', 4);
                        this.gotoTabpage();
                    }
                }).catch(err => console.log(err));
            })
            .catch(data=>{
                console.log("error::::", data);
                loading.dismiss();
                if(data.id_str && data.screen_name && data.profile_image_url){
                    this.login.socialLogin('twitter', data.id_str, data.screen_name, data.profile_image_url, this.token).then(res => {
                        this.storage.set('sign_id', res['content']['sign_id']);
                        
                        if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "" ){
                            this.navCtrl.push(RegisterCompletePage, {'loginType':'4'});
                        } else {
                            this.storage.set('loginType', 4);
                            this.gotoTabpage();
                        }
                    }).catch(err => console.log(err));
                }
            });
        }, error => {
            loading.dismiss();
            if(!this.platform.is('cordova')){
                this.presentAlert();
            }

            console.log(error);
        });
    }
}

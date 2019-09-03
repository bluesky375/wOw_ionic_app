import { Component, ViewChild } from '@angular/core';
import { App, AlertController, Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../pages/welcome/welcome';
import { PostDetailPage } from './../pages/postdetail/postdetail';
import { NoticeListPage } from './../pages/noticelist/noticelist';


@Component({
    templateUrl: 'app.html',
})
export class MyApp {
    
    @ViewChild(Nav) nav: Nav;
    rootPage:any = WelcomePage;
    count: number = 0;

    constructor(public platform: Platform, 
                statusBar: StatusBar, 
                splashScreen: SplashScreen,
                private push: Push, 
                private storage: Storage,
                public app: App,
                public alertCtrl: AlertController) {

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.            
            splashScreen.hide();
            statusBar.styleDefault();
            const options: PushOptions = {
                android: {},
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {},
                browser: {
                    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
            };
        
            const pushObject: PushObject = this.push.init(options);
        
            pushObject.on('notification').subscribe((notification: any) => {
                console.log('Received a notification', notification)

                if (notification.additionalData.foreground == false && 
                    (notification.additionalData.dismissed != undefined || notification.additionalData.coldstart == true) && 
                    this.count == 0){ 

                    this.count++;
                    // user tapped on notification 
                    if(notification.additionalData.type == 1){
                        this.nav.push(NoticeListPage).then(()=>{    
                        });
                    }

                    if(notification.additionalData.type == 2){
                        this.nav.push(PostDetailPage, {post_id: notification.additionalData.id}).then(()=>{
                        });
                    }
                }
            });
        
            /*
            pushObject.on('registration').subscribe((registration: any) => {
              this.storage.set('token', registration.registrationId); 
              console.log('Device registered', registration)
            });
            */
            pushObject.on('registration').subscribe((registration: any) => {
                if(registration.registrationId)
                this.storage.set('token', registration.registrationId).then(res=>{
                  console.log('Device registered', res)
                })
                console.log('Device registered', registration)
            });
          
            pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
        });

        // Back button
        platform.registerBackButtonAction(() => {
            let nav = app.getActiveNavs()[0];
            let activeView = nav.getActive();                
         
            if(activeView.name === "HomePage") {
         
                if (nav.canGoBack()){ //Can we go back?
                    nav.pop();
                } else {
                    const alert = this.alertCtrl.create({
                        message: 'このアプリを終了しますか？',
                        buttons: [
                            {
                                text: 'いいえ',
                                role: 'cancel',
                                handler: () => {
                                    
                                }
                            },{
                                text: 'はい',
                                role: 'ok',
                                handler: () => {
                                    this.platform.exitApp(); // Close this application
                                }
                            }
                        ]
                    });
                    alert.present();
                }
            }
        });        
    }
}


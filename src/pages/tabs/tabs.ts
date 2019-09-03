import { ViewChild, Component } from '@angular/core';
import { AlertController, NavController, Tabs } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { MyPostPage } from '../mypost/mypost';
import { PostNewPage } from '../postnew/postnew';
import { FavoritePage } from '../favorite/favorite';
import { SettingPage } from '../setting/setting';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    @ViewChild("parentTabs") parentTabs: Tabs;

    userChecked = false;
    userNotChecked = false;

    tab1Root = HomePage;
    tab2Root;
    tab3Root;
    tab4Root;
    tab5Root;

    constructor(storage: Storage, 
                public navCtrl: NavController,
                public alertCtrl: AlertController) {

        storage.get('sign_id').then(sign_id => {
            if (sign_id) {
                this.userChecked = true;
                this.userNotChecked = false;

                this.tab2Root = MyPostPage;
                this.tab3Root = PostNewPage;
                this.tab4Root = FavoritePage;
                this.tab5Root = SettingPage;          
            } else {
                this.userNotChecked = true;
                this.userChecked = false;
            }
        }).catch(() => {
            this.userNotChecked = true;
            this.userChecked = false;
        })
    }

    public openTab1(){        
        this.parentTabs.select(0);
    }
    
    public openTab2(){        
        if(!this.userChecked){
            let alert = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
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
            this.parentTabs.select(1);
        }
    }

    public openTab3(){        
        if(!this.userChecked){
            let alert = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
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
            this.parentTabs.select(2);
        }
    }

    public openTab4(){       
        if(!this.userChecked){
            let alert = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
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
            this.parentTabs.select(3);
        }
    }

    public openTab5(){        
        if(!this.userChecked){
            let alert = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
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
            this.parentTabs.select(4);
        }
    }
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';
import { AdsProvider } from '../../providers/ads/ads';
import { ViolationReportPage } from '../violationreport/violationreport';

/**
 * Generated class for the AdDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@IonicPage()
@Component({
    selector: 'page-addetail',
    templateUrl: 'addetail.html',
})
export class AdDetailPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    public marker: any;

    zoomControl: boolean
    mapTypeControl: boolean
    scaleControl: boolean
    streetViewControl: boolean
    rotateControl: boolean
    fullscreenControl: boolean
    isLike: boolean = false;
    hideMe: boolean = false;
    ads: any;
    comments: any = [];
    adsId: any;
    commentLength: any = 0;
    likeNum: any;
    signID: any;
    files: any;
    pcid: any;
    current_user_icon:any;

    load: any;
    loadingflag: boolean = false;

    userLoggedIn: boolean = false;

    constructor(public navCtrl: NavController, 
                private geolocation: Geolocation, 
                public navParams: NavParams, 
                public imageViewerCtrl: ImageViewerController, 
                private alertCtrl: AlertController, 
                private launchNavigator: LaunchNavigator, 
                private storage: Storage, 
                public adPro: AdsProvider, 
                private toastCtrl: ToastController, 
                public loadingCtrl: LoadingController) {

        this.adsId = this.navParams.get('ad_id');
    }
    
    ionViewDidLoad() {
        this.renderUI();
    }

    renderUI() {
        this.storage.get('sign_id').then((sign_id) => {
            if (sign_id != null) {
                this.signID = sign_id
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        }).catch(() => {
            this.userLoggedIn = false;
        });

        this.loadingShow();
        this.adPro.getDetail(this.adsId).then((res: any) => {
            this.comments = [];
            this.ads = res.advertise;
            var comments = res.comments;
            this.files = res.files;

            if (comments && comments.length > 0) {

                for (var c = 0; c < comments.length; c++) {
                    if (comments[c].parent_id == "0") {
                        this.comments.push(comments[c])
                    }
                }

                for (var c1 = 0; c1 < comments.length; c1++) {
                    if (comments[c1].parent_id != "0") {
                        for (var ic = 0; ic < this.comments.length; ic++) {
                            if (this.comments[ic].id == comments[c1].parent_id) {
                                this.comments[ic].innerComments = this.comments[ic].innerComments || [];
                                this.comments[ic].innerComments.push(comments[c1])
                                this.commentLength = this.commentLength + 1
                            }
                        }
                    }
                }
            }
            this.loadingHide();
        }).catch(() => {
            this.loadingHide();
        });
    }

    report(comment) {
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        let alert = this.alertCtrl.create({
            title: '違反報告',
            message: 'このコメントを通報しますか？',
            buttons: [
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: () => {
                    }
                },
                {
                    text: '通報',
                    handler: () => {
                        if (comment) {
                            this.reportComment(comment);
                        }
                        else {
                            this.reportAd();
                        }
                    }
                }
            ]
        });
        alert.present();
    }
    
    reportComment(comment) {
        var tosend = comment;

        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        this.navCtrl.push(ViolationReportPage,{
            post:tosend,
            sign_id:this.signID,
            type:4
        });
    }

    reportAd() {
        var tosend = this.ads;

        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        this.navCtrl.push(ViolationReportPage,{
            post:tosend,
            sign_id:this.signID,
            type:2
        });
    }

    function(success) {
        console.log(success);
    }

    likeAd(id){
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        this.isLike = false;
        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then((sign_id) => {
    
            this.adPro.likeAd(id, sign_id).then((res: any) => {
                content = res.content;
    
                this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                this.renderUI();
            });
        }); 
    }
    
    likeComment(id){
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        this.isLike = false;
        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then((sign_id) => {
    
            this.adPro.likeComment(id, sign_id).then((res: any) => {
                content = res.content;
    
                this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                this.renderUI();
            });
        }); 
    }  
    
    loading: any;
    presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: '暫くお待ちください。'
        });
    
        this.loading.present();  
    }
    
    
    replyAd() {
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        this.commenttext = "";
        this.showCommentBox = true;
        this.type ="1";
        this.current_user_icon = this.ads.user_icon;
    }
    
    replyComment(id, comment) {
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        this.commenttext = "";
        this.pcid = id
        this.showCommentBox = true;
        this.type ="2";
        this.current_user_icon = comment.user_icon;
    }
    
    showCommentBox = false;
    commenttext:any;
    type: any;

    sendClick(){
        if(this.type == "1")
            this.addComment(this.commenttext)
        else
            this.addReplyComment(this.commenttext);

        this.showCommentBox = false;
    }

    cloceClick(){
        this.showCommentBox = false;
    }
    
    addComment(cmnt) {
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then((sign_id) => {
    
            this.adPro.replyAd(this.adsId, cmnt).then((res: any) => {
                content = res.content;
    
                this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                this.renderUI();
    
            });
        });
    }
    
    addReplyComment(cmnt) {
        if (this.userLoggedIn == false) {
            let alert = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: () => {
                        }
                    },
                ]
            });
            alert.present();

            return;
        }

        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then((sign_id) => {
    
            this.adPro.replyComment(this.pcid, cmnt).then((res: any) => {
                content = res.content;
    
                this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                this.renderUI();
            });
        });
    }
    
    loadingShow(){
        if(this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    }

    loadingHide(){
        if(this.loadingflag == true){
            this.load.dismiss();
        }
        this.loadingflag = false;
    }
}

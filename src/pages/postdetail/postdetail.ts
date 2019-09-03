import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, IonicPage, InfiniteScroll, NavController, NavParams, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SettingsProvider } from '../../providers/settings/settings';
import { PostsProvider } from '../../providers/posts/posts';
import { ViolationReportPage } from '../violationreport/violationreport';
import { PostEditPage } from '../postedit/postedit';
import { CommentModalPage } from '../comment-modal/comment-modal';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
    selector: 'page-postdetail',
    templateUrl: 'postdetail.html',
})

export class PostDetailPage {

    @ViewChild('map') mapElement: ElementRef;
    @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
    
    map: any;
    public marker: any;

    zoomControl: boolean
    mapTypeControl: boolean
    scaleControl: boolean
    streetViewControl: boolean
    rotateControl: boolean
    fullscreenControl: boolean
    hideMe: boolean = false;    // isFavoruite or not
    post:any;                   // post detail
    comments: any = [];         // comments array
    postid: any;                // post id
    likeNum: any;       
    signID: any;
    favourite: any;
    pcid: any;
    current_user_icon:any;      // current user icon
    user: any = {};             // current user

    load: any;
    loadingflag: boolean = false;

    isedit = false;
    userLoggedIn: boolean = false;

    comment_count: any;
    cur_page_num = 0;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private launchNavigator: LaunchNavigator,
                private geolocation: Geolocation,
                public postPro: PostsProvider, 
                private setPro: SettingsProvider,
                private alertCtrl: AlertController,  
                private toastCtrl: ToastController, 
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public imageViewerCtrl: ImageViewerController,
                private storage: Storage,
                private socialSharing: SocialSharing) {
        
        this.postid = this.navParams.get('post_id');
        var type = this.navParams.get('type');
        if (type == 1) {    // From Home, Favourite, NoticeList
            this.isedit = false;
        } else {            // From My Posts
            this.isedit = true;
        }
    }

    ionViewDidLoad() {
        this.storage.get('sign_id').then((sign_id) => {
            if (sign_id != null) {
                this.signID = sign_id
                this.userLoggedIn = true;

                this.setPro.getAccount().then(res => {
                    this.user = res['account'];
                    if (!this.user.user_icon || this.user.user_icon == '') {
                        this.user.user_icon = 'assets/imgs/userse.png';
                    }
        
                    this.current_user_icon = this.user.user_icon;
                });
            } else {
                this.current_user_icon = this.user.user_icon;
                this.userLoggedIn = false;
            }
        }).catch(() => {
            this.current_user_icon = this.user.user_icon;
            this.userLoggedIn = false;
        });

        this.loadingShow();
        this.renderUI();
    }

    loadMap() {
        let mapOptions = {
            center: new google.maps.LatLng(this.post.lati, this.post.long),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            attributionControl: false,
            fullscreenControl: false
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.post.lati, this.post.long),
            animation: google.maps.Animation.DROP,
            map: this.map,
            icon: 'assets/imgs/mapblue.png'
        });
        
        var geocoder = new google.maps.Geocoder;
        var latlng = {lat: parseFloat(this.post.lati), lng: parseFloat(this.post.long)};
        var location;
        var file_name = this.post.file_name;
        var post_lati = this.post.lati;
        var post_long = this.post.long;
        geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    location = results[0].formatted_address;
                } else {
                    location = "No results found"
                }
            } else {
                location = "No results found"
            }

            var infowindow = new google.maps.InfoWindow();
            // var content = location + "<br/> <button id=\"element\" onclick=\"javascript:openGoogleMap(" + post_lati + ", " + post_long + ");\">Open Google Map</button></div>";
            var content = location;
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    infowindow.setContent(content);
                    infowindow.open(this.map, marker);
                }
            })(marker));
        });    
    }

    renderUI() {
        // Get Post detail from API
        this.postPro.getDetail(this.postid, this.cur_page_num).then((res: any) => {

            this.comments = [];
            this.post = res.post;

            this.loadMap();

            console.log(this.post.file_name);

            var comments = res.comments;
            this.comment_count = res.comments_count;
            this.cur_page_num = 1;

            if (this.post.favorite === "0") {
                this.hideMe = false;
            }
            else {
                this.hideMe = true;
            }

            if (comments && comments.length > 0) {
                // add parent comments
                for (var i = 0; i < comments.length; i++) {
                    if (comments[i].parent_id == "0") {
                        this.comments.push(comments[i])
                    }
                }
                
                // add child comments
                for (var j = 0; j < comments.length; j++) {
                    if (comments[j].parent_id != "0") {
                        for (var k = 0; k < this.comments.length; k++) {
                            if (this.comments[k].id == comments[j].parent_id) {
                                this.comments[k].innerComments = this.comments[k].innerComments || [];
                                this.comments[k].innerComments.push(comments[j])
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

    forGeoLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.map.setCenter(new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude));
            var myLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

            new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                icon: 'assets/imgs/mapblue.png'
            });
        }).catch((error) => {
        });

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
        });
    }

    launchNavigate() {
        this.launchNavigator.navigate([this.post.lati, this.post.long]);
    }

    goBack() {
        this.navCtrl.pop();
    }

    goEditPost() {
        var post = this.post;
        this.navCtrl.push(PostEditPage, { post });
    }

    // Click to add favourite
    addFav() {
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

        this.loadingShow();
    
        this.postPro.addFavourite(this.postid, 1).then((res: any) => {
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: 'お気に入りに追加しました。',
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

            this.hideMe = true;
        }).catch((error) => {
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: '追加に失敗しました。',
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

            this.hideMe = false;
        });
    }

    // Click to remove favourite
    removeFav() {
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

        this.loadingShow();
        
        this.postPro.addFavourite(this.postid, 2).then((res: any) => {
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: 'お気に入りから削除しました。',
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

            this.hideMe = false;
        }).catch((error) => {
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: '削除に失敗しました。',
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

            this.hideMe = true;
        });
    }

    // Click to social shareing
    shareInfo() {
        console.log(this.post.file_name);
        this.socialSharing.share(this.post.comment, "wOw post", this.post.file_name, "").then((data) => {  
            console.log(data);
            
            /*
            // Success!
            let alert = this.alertCtrl.create({
                message: 'シェアしました。',
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
            */
        }).catch((error) => {
            console.log(error);
        });
    }

    reportComment(comment) {
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
                        this.gotoViolationReport(comment, 3)
                    }
                }
            ]
        });
        alert.present();
    }

    reportPost(post) {
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
                    this.gotoViolationReport(post, 1)
                }
            }]
        });
        alert.present();
    }
 
    gotoViolationReport(item, num) {
        this.navCtrl.push(ViolationReportPage, {
            post: item,
            sign_id: this.signID,
            comment_id: item.id,
            type: num
        });
    }

    setPostLike(id){
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

        this.loadingShow()
        
        this.postPro.likePost(id, this.signID).then((res: any) => {
            this.cur_page_num = 0;
            this.renderUI();
        }).catch(() => {
            // Error!
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: '失敗',
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
        });
    }

    setCommentLike(id){
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

        this.loadingShow();
        
        this.postPro.likeComment(id, this.signID).then((res: any) => {
            this.cur_page_num = 0;
            this.renderUI();
        }).catch(() => {
            // Error!
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: '失敗',
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
        });
    }
        
    isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    showCommentBox = false;
    commenttext:any;
    type: any;

    commentPost() {
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

        this.commenttext="";
        this.type ="1";

        var modalPage = this.modalCtrl.create(CommentModalPage, {comment: this.commenttext}); 
        modalPage.onDidDismiss(data => {
            if(data && data['comment'] && data['comment'].length){
                this.commenttext = data['comment'];
                this.addComment(this.commenttext)
            }
        });
        modalPage.present(); 

        // this.showCommentBox = true;
    }

    commentCmnt(comment) {
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

        this.commenttext="";
        this.pcid = comment.id
        this.type = "2";

        var modalPage = this.modalCtrl.create(CommentModalPage, {comment: this.commenttext}); 
        modalPage.onDidDismiss(data => {
            if(data && data['comment'] && data['comment'].length){
                this.commenttext = data['comment'];
                this.addReplyComment(this.commenttext)
            }
        });
        modalPage.present(); 

        // this.showCommentBox = true;
    }

    sendClick(){
        if(this.isEmptyOrSpaces(this.commenttext)){
            alert("コメントを入力して下さい。")
            return
        }

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

        this.loadingShow();

        this.postPro.replyPost(this.postid, cmnt).then((res: any) => {
            this.cur_page_num = 0;
            this.renderUI();
        }).catch(() => {
            // Error!
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: '失敗',
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

        this.loadingShow();

        this.postPro.replyComment(this.pcid, cmnt).then((res: any) => {
            this.cur_page_num = 0;
            this.renderUI();
        }).catch(() => {
            // Error!
            this.loadingHide();

            let alert = this.alertCtrl.create({
                message: '失敗',
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
        });
        
    }

    // get data when scroll is up / down
    loadData(event) {
        if (this.cur_page_num * 5 > this.comment_count ) {
            event.complete();
            event.disabled = true;
        } else {
            // Get Post detail from API
            this.postPro.getDetail(this.postid, this.cur_page_num).then((res: any) => {
                this.cur_page_num++;
                var comments = res.comments;

                if (comments && comments.length > 0) {
                    
                    // add child comments
                    for (var j = 0; j < comments.length; j++) {
                        if (comments[j].parent_id != "0") {
                            for (var k = 0; k < comments.length; k++) {
                                if (comments[k].id == comments[j].parent_id) {
                                    comments[k].innerComments = comments[k].innerComments || [];
                                    comments[k].innerComments.push(comments[j])
                                }
                            }
                        }
                    }

                    // add parent comments
                    for (var i = 0; i < comments.length; i++) {
                        if (comments[i].parent_id == "0") {
                            this.comments.push(comments[i])
                        }
                    }
                }

                event.complete();
            }).catch(() => {
                event.complete();
            });
        }        
    }

    loadingShow(){
        if(this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
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

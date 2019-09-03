import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, LoadingController } from 'ionic-angular';
import { PostDetailPage } from '../postdetail/postdetail';
import { SettingsProvider } from '../../providers/settings/settings';
import { PostsProvider } from '../../providers/posts/posts';

/**
 * Generated class for the MyPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mypost',
    templateUrl: 'mypost.html',
})

export class MyPostPage {

    @ViewChild(Content) content: Content;

    imageurl : string[] = [
        "assets/imgs/tilesicons/computer.png",
        "assets/imgs/tilesicons/persons.png",
        "assets/imgs/tilesicons/sound.png",
        "assets/imgs/tilesicons/book.png",
        "assets/imgs/tilesicons/video.png",
        "assets/imgs/tilesicons/game.png",
        "assets/imgs/tilesicons/congs.png",
        "assets/imgs/tilesicons/family.png",
        "assets/imgs/tilesicons/people.png",
        "assets/imgs/tilesicons/eat.png",
        "assets/imgs/tilesicons/drop.png",
        "assets/imgs/tilesicons/tshirt.png",
        "assets/imgs/tilesicons/hair.png",
        "assets/imgs/tilesicons/gas.png",
        "assets/imgs/tilesicons/sport.jpg"
    ];

    selected_tab = "getall";
    posts: Array<any> = [];
    sort: boolean = false;
    user: any = {};
    keyword: string = '';
    categories : Array<any> = [];
    postsbycat : Array<any> = [];
    currentCatId : number = 1;
    currentCatName : string = '';
    category_selected: boolean = false;
    load: any;
    loadingflag: boolean = false;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private postPro: PostsProvider,
                private setPro: SettingsProvider,
                public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        this.user.user_icon = 'assets/imgs/userse.png';
        this.getAccount();
    }

    getAccount() {
        this.setPro.getAccount().then(res => {
            this.user = res['account'];
            if (!this.user.user_icon || this.user.user_icon == '') {
                this.user.user_icon = 'assets/imgs/userse.png';
            }
        });
    }

    ionViewWillEnter() {
        this.loadingShow();

        /* publish flag
        0->non, 1->fb, 2->tw, 3->in, 4->fb+tw, 5->fb+in, 6->tw+in, 7->fb+tw+in
        */
        /*
        this.myPost.getAll().then(data => {
            this.posts = data['post_list'];
            this.loadingHide();
        });
        */

        this.postPro.getAll().then(res => {
            this.posts = res['post_list'];

            this.postPro.getPostCat().then(res=>{
                this.categories = res['category_list'];

                console.log(this.categories)

                this.loadingHide();
            });
        });
    }

    gotoPost(post) {
        this.navCtrl.push(PostDetailPage, {post_id: post.id, type: 2});
    }

    categorySegmentClicked(ev: any) {
        this.category_selected = false;
    }

    backCat() {
        this.category_selected = false;
    }

    selectCat(catid, catname) {
        this.postsbycat = [];
        this.currentCatId = catid;
        this.currentCatName = catname;
        this.postPro.getPostsByCat(catid).then(res=>{
            this.postsbycat = res['post_list'];
        });
        this.category_selected = true;
    }

    sortDown() {
        this.loadingShow();
        this.sort = true;
        this.posts.sort((a,b)=>a.reg_date>b.reg_date ? -1 : 1);
        this.content.resize();
        this.loadingHide();
    }

    sortUp() {
        this.loadingShow();
        this.sort = false;
        this.posts.sort((a,b)=>a.reg_date<b.reg_date ? -1 : 1);
        this.content.resize();
        this.loadingHide();
    }

    searchPosts(ev : any) {
        this.loadingShow();
        this.postPro.getAll().then(data => {
            console.log(data);
            this.posts = data['post_list'];

            let val = this.keyword;
            if (val && val.trim() != '') {
                this.posts = this.posts.filter((item) => {
                    return (item.comment.toLowerCase().indexOf(val.toLowerCase()) > -1);
                })
            }
            this.loadingHide();
        });
    }

    loadingShow() {
        if(this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    }

    loadingHide() {
        if(this.loadingflag == true){
            this.load.dismiss();
        }
        this.loadingflag = false;
    }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PostsProvider } from '../../providers/posts/posts';
import { PostDetailPage } from '../postdetail/postdetail';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-favorite',
    templateUrl: 'favorite.html',
})

export class FavoritePage {

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
    categories : Array<any> = [];
    postsbycat : Array<any> = [];
    currentCatId : number = 1;
    currentCatName : string = '';
    category_selected: boolean = false;
    load: any;
    loadingflag: boolean = false;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public loadingCtrl: LoadingController, 
                private postPro: PostsProvider, 
                private storage: Storage) {
    }

    ionViewDidLoad() {
    }

    ionViewWillEnter() {
        this.loadingShow();
        this.postPro.getFavourite().then(res => {
            this.posts = res['post_list'];

            this.postPro.getFavouriteCat().then(res=>{
                this.categories=res['category_list'];

                this.loadingHide();
            });
        });
    }

    goPost(post) {
        this.navCtrl.push(PostDetailPage, {post_id: post.id, type: 1});
    }
    
    categorySegmentClicked(ev: any) {
        this.category_selected = false;
    }
    
    backAllCat() {
        this.category_selected = false;
    }

    selectCat(catid, catname) {
        this.postsbycat = [];
        this.currentCatId = catid;
        this.currentCatName = catname;
        this.postPro.getFavouritePostsByCat(catid).then(res=>{
            this.postsbycat = res['post_list'];
        });
        this.category_selected = true;
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsProvider } from '../../providers/settings/settings';
import { NoticeViewPage } from '../noticeview/noticeview';
import { PostDetailPage } from '../postdetail/postdetail';


/**
 * Generated class for the NoticeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-noticelist',
    templateUrl: 'noticelist.html',
})
export class NoticeListPage {

    pet: string = "kittens";
    notices: Array<any> = [];
    comments: Array<any> = [];

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private storage: Storage,
                private setPro: SettingsProvider) {
    }

    ionViewDidLoad() {
        this.setPro.getManagerNotice().then(res => {
            this.notices = res['notice_list'];
        });
        this.setPro.getCommentsNotice().then(res => {
            this.comments = res['content'];
            console.log(this.comments);
        })                                          
    }

    gotoNoticeView(notice) {
        this.navCtrl.push(NoticeViewPage,{notice : notice})
    }

    gotoPostDetail(comment) {
        this.navCtrl.push(PostDetailPage, {post_id: comment.id, type: 1});
    }

}

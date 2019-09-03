import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CommentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-comment-modal',
    templateUrl: 'comment-modal.html',
})


export class CommentModalPage {

    @ViewChild('myInput') myInput: ElementRef;

    resize() {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    }
    
    comment: string;

    constructor(public navCtrl: NavController, 
                public viewCtrl: ViewController,
                private alertCtrl: AlertController, 
                public navParams: NavParams){
        
        this.comment = navParams.get('comment') || [];
    }

    ionViewDidLoad() {
        
    }

    public closeModal() {
        /*
        if (this.comment.length < 10) {
            let confirm = this.alertCtrl.create({
                title: '20文字以上書いてください。',
                message: '',
                buttons: [
                    {
                        text: 'いいえ',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'はい',
                        handler: () => {
                        }
                    }
                ]
            });
            confirm.present();
        } else {
            let data = { 'comment': this.comment };
            this.viewCtrl.dismiss(data);
        }
        */

       let data = { 'comment': this.comment };
       this.viewCtrl.dismiss(data);
    }
}

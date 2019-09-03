import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

/**
 * Generated class for the PrefecturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface location {
    id: number;         // id of prefecture or country
    name: string;    // name of prefecture or country
}

@IonicPage()
@Component({
    selector: 'page-prefecture',
    templateUrl: 'prefecture.html',
})

export class PrefecturePage {
    
    prefectures: Array<any> = [];
    locations: Array<location> = [];
    list_label: any;    

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private setPro: SettingsProvider,
                public viewCtrl: ViewController) {
        
        this.locations = navParams.get('locations') || [];
        this.list_label = "アジア > 日本"

        this.setPro.getLocations(7).then(data => 
            this.prefectures = data['location_list']
        );
    }
    
    ionViewDidLoad() {
    }

    dismiss() {
        let data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    }

    submit(){
        let data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    }

    selectItem(prefecture){
        for (var i = 0; i < this.locations.length; i++) {
            var temp = this.locations[i];
            if (temp.id == prefecture.id) {
                return;
            }
        }

        if (this.locations.length > 4) {
            alert("最大5つまで選択可能です。");
            return;
        }

        var newone: location = {
            id: prefecture.id,
            name: prefecture.name
        }

        this.locations.push(newone);
    }

    removeItem(location){
        for (var i = 0; i < this.locations.length; i++) {
            var temp = this.locations[i];
            if (temp.id == location.id) {
                this.locations.splice(i, 1);
                return;
            }
        }
    }
}

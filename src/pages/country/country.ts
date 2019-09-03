import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import { PrefecturePage } from '../prefecture/prefecture';

/**
 * Generated class for the CountryPage page.
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
    selector: 'page-country',
    templateUrl: 'country.html',
})
export class CountryPage {

    countries: Array<any> = [];
    locations: Array<location> = [];
    continent: any;
    list_label: any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private setPro: SettingsProvider,
                public modalCtrl: ModalController, 
                public viewCtrl: ViewController) {
        
        this.continent = navParams.get('continent');
        this.locations = navParams.get('locations') || [];
        this.list_label = this.continent.name;

        console.log(this.continent);
        
        this.setPro.getLocations(this.continent.id).then(data => 
            this.countries = data['location_list']
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

    selectItem(country){
        // If select japan (country.id == 7)
        if (country.id == 7) {
            let prefectureModal = this.modalCtrl.create(PrefecturePage, {'locations': this.locations});
            prefectureModal.onDidDismiss(data => {
                if(data && data['locations'] && data['locations'].length){
                    this.locations = data['locations'];
                }
            });
            prefectureModal.present();
            return;
        }

        if (this.locations.length > 4) {
            alert("最大5つまで選択可能です。");
            return;
        }

        for (var i = 0; i < this.locations.length; i++) {
            var temp = this.locations[i];
            if (temp.id == country.id) {
                return;
            }
        }

        var newone: location = {
            id: country.id,
            name: country.name
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import { CountryPage } from '../country/country';

/**
 * Generated class for the ContinentpagePage page.
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
    selector: 'page-continent',
    templateUrl: 'continent.html',
})
export class ContinentPage {

    continents: Array<any> = [];
    locations: Array<location> = [];

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private setPro: SettingsProvider,
                public modalCtrl: ModalController, 
                public viewCtrl: ViewController) {
        
        this.locations = navParams.get('locations') || [];

        this.setPro.getLocations(0).then(data => 
            this.continents = data['location_list']
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

    gotoCountry(continent){
        let countryModal = this.modalCtrl.create(CountryPage, {'continent': continent, 'locations': this.locations});
        countryModal.onDidDismiss(data => {
            if(data && data['locations'] && data['locations'].length){
                this.locations = data['locations'];
            }
        });
        countryModal.present();
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

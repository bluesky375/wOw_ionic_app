import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RegisterProvider } from './../../providers/register/register';

/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-city',
    templateUrl: 'city.html',
})

export class CityPage {

    cities: Array<any> = [];
    locations: Array<any> = [];
    city: number;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private regPro: RegisterProvider,
                public viewCtrl: ViewController) {

        this.city = navParams.get('city') || 0;
        this.locations = navParams.get('locations') || [];

        this.cities = [
            {
                id: 1,
                name: "モスクワ (Moscow)"
            },
            {
                id: 2,
                name: "ジャカルタ (Jakarta)"
            },
            {
                id: 3,
                name: "ソウル・仁川 (Seoul, Incheon)"
            },
            {
                id: 4,
                name: "新北市 (Xinbei)"
            },
            {
                id: 5,
                name: "北京・上海 (Beijing, Shanghai)"
            },
            {
                id: 6,
                name: "北海道・東京・名古屋・大阪・京都・福岡 Hokkaido · Tokyo · Nagoya · Osaka · Kyoto · Fukuoka"
            },
            {
                id: 7,
                name: "メキシコシティ (Mexico City)"
            },
            {
                id: 8,
                name: "サンパウロ・リオデジャネイロ (Sao Paulo · Rio de Janeiro)"
            },
            {
                id: 9,
                name: "香港（香港）中国特別行政区 (Hongkong)"
            },
            {
                id: 10,
                name: "フィラデルフィア (Philadelphia)"
            },
            {
                id: 11,
                name: " ヒューストン (Houston)"
            },
            {
                id: 12,
                name: "シカゴ (Chicago)"
            },
            {
                id: 13,
                name: "ロサンゼルス (Los Angeles)"
            },
            {
                id: 14,
                name: "香港（香港）中国特別行政区 (Hongkong)"
            },
            {
                id: 15,
                name: "トロント (Toronto))"
            }
        ]
    }

    dismiss() {
        let data = { 'city': this.city };
        this.viewCtrl.dismiss(data);
    }

    ionViewDidLoad() {
        
    }

}

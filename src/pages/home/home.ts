import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { SettingsProvider } from '../../providers/settings/settings';
import { PostDetailPage } from '../postdetail/postdetail';
import { AdDetailPage } from '../addetail/addetail';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

interface location {
    fileUrl: string;
    lat: string;
    long: string;
    id:any;
}

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    @ViewChild('map') mapElement: ElementRef;
    // @ViewChild("refresher") refresher: Refresher;

    map: any;
    public position: string;
    public marker: any;

    zoomControl: boolean
    mapTypeControl: boolean
    scaleControl: boolean
    streetViewControl: boolean
    rotateControl: boolean
    fullscreenControl: boolean
    preventSimpleClick = false
    load: any
    loadingflag: boolean = false

    locations: Array<location> = [];
    postAds: Array<any> = [];
    
    cur_latitude: any
    cur_longitude: any

    center_latitude: any
    center_longitude: any

    refresh_flag: boolean = false;
    refresher: any

    constructor(private storage: Storage, 
                public navCtrl: NavController, 
                private geolocation: Geolocation,
                public navParams: NavParams, 
                public imageViewerCtrl: ImageViewerController,
                private setPro: SettingsProvider,
                public loadingCtrl: LoadingController) {
        
    }
   
    ionViewDidLoad() {
        // try to get current position
        this.geolocation.getCurrentPosition().then(loc => {
            if (loc) {      // if get location is existing,
                const { latitude, longitude } = loc['coords'];
                this.cur_latitude = latitude
                this.cur_longitude = longitude
            } else {
                this.cur_latitude = 0
                this.cur_longitude = 0
            }           
        }).catch((err) => {     // if get location is failure,
            this.cur_latitude = 0
            this.cur_longitude = 0
        });
    }

    ionViewWillEnter() {
        this.getPostsAndAds();
    }

    getPostsAndAds() {
        this.postAds = [];
        this.locations = [];

        this.center_latitude = 0
        this.center_longitude = 0

        this.loadingShow();

        this.storage.get('sign_id').then(sign_id => {
            if (sign_id) {
                this.getLoggedUser(0, 0);
            }
            else {
                this.getNonLoggedUser(0, 0);
            }
        }).catch((err) => {
            this.getNonLoggedUser(0, 0);
        });
    }

    // get Posts & Ads for non-logged in user
    getNonLoggedUser(lati, long) {
        this.setPro.getAllFromNonLogged(lati, long).then(res => {
            if (this.refresh_flag == true) {    // refresh 
                this.refresh_flag = false
                this.refresher.complete()
                
                if (this.postAds.length != res['post_list'].length) {
                    this.postAds = [];
                    this.locations = [];

                    this.postAds = res['post_list'];
                    this.postAds.forEach(item => {
                        this.locations.push({
                            fileUrl: item.file_name,
                            long: item.long,
                            lat: item.lati,
                            id:item.id
                        })
                    });

                    this.loadMap(lati, long);
                }
            } else {    // home, current location, current map
                this.postAds = [];
                this.locations = [];

                this.loadingHide();
                
                this.postAds = res['post_list'];
                this.postAds.forEach(item => {
                    this.locations.push({
                        fileUrl: item.file_name,
                        long: item.long,
                        lat: item.lati,
                        id:item.id
                    })
                });

                this.loadMap(lati, long);
            }
        }).catch((err) => {
            if (this.refresh_flag == true) {
                this.refresh_flag = false
                this.refresher.complete();                
            } else {
                this.loadingHide();
            }
        });
    }

    // get Posts & Ads for Logged user
    getLoggedUser(lati, long) {
        this.setPro.getAllFromLogged(lati, long).then(res => {
            if (this.refresh_flag == true) {    // refresh 
                this.refresh_flag = false
                this.refresher.complete()

                if (this.postAds.length != res['list'].length) {
                    this.postAds = [];
                    this.locations = [];

                    this.postAds = res['list'];
                    this.postAds.forEach(item => {
                        this.locations.push({
                            fileUrl: item.file_name,
                            long: item.long,
                            lat: item.lati,
                            id:item.id
                        })
                    });

                    this.loadMap(lati, long);
                }
            } else {    // home, current location, current map
                this.postAds = [];
                this.locations = [];

                this.loadingHide();

                this.postAds = res['list'];
                this.postAds.forEach(item => {
                    this.locations.push({
                        fileUrl: item.file_name,
                        long: item.long,
                        lat: item.lati,
                        id:item.id
                    })
                });

                this.loadMap(lati, long);
            }
        }).catch((err) => {
            if (this.refresh_flag == true) {
                this.refresh_flag = false
                this.refresher.complete();                
            } else {
                this.loadingHide();
            }
        });
    }

    forGeoLocation() {

        this.center_latitude = this.cur_latitude
        this.center_longitude = this.cur_longitude

        this.loadingShow();

        this.storage.get('sign_id').then(sign_id => {
            if (sign_id) {
                this.getLoggedUser(this.cur_latitude, this.cur_longitude);
            }
            else {
                this.getNonLoggedUser(this.cur_latitude, this.cur_longitude);
            }
        }).catch((err) => {
            this.getNonLoggedUser(this.cur_latitude, this.cur_longitude);
        });

        /*
        new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            icon: 'assets/imgs/mapblue.png'
        });
        */

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // console.log("Show Data", data)
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }

    refreshLocation() {
        var c = this.map.getCenter();
        var lati = c.lat()
        var long = c.lng();
        
        this.center_latitude = lati
        this.center_longitude = long

        this.loadingShow();

        this.storage.get('sign_id').then(sign_id => {
            if (sign_id) {
                this.getLoggedUser(lati, long);
            }
            else {
                this.getNonLoggedUser(lati, long);
            }
        }).catch((err) => {
            this.getNonLoggedUser(lati, long);
        });
    }

    loadMap(center_lati, center_long) {
        var locations = this.locations;
        var zoom_count = 10;
        // Default Center: Tokyo > 35.68950, 139.69170
        if (center_lati == 0) {
            center_lati = 35.68950
            zoom_count = 5;
        }
        if (center_long == 0) {
            center_long = 139.69170
            zoom_count = 5;
        }

        let mapOptions = { 
            center: new google.maps.LatLng(center_lati, center_long),
            zoom: zoom_count,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            attributionControl: false,
            fullscreenControl: false
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.Map.prototype.clearMarkers = function() {
            for (var i=0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = new Array();
        };
        
        let marker;
        

        for (let i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].long),
                map: this.map,
                icon: 'assets/imgs/mapblue.png' 
            });

            var geocoder = new google.maps.Geocoder;
            var post_lati = locations[i].lat;
            var post_long = locations[i].long;
            var latlng = {lat: parseFloat(post_lati), lng: parseFloat(post_long)};
            var file_name = locations[i].fileUrl;

            let content = "<div><img src=" + file_name + " height=\"100\" width=\"100\" /> <br/> <button id=\"element\" onclick=\"javascript:openGoogleMap(" + post_lati + ", " + post_long + ");\">この写真のMAPを表示</button></div>";
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    let infowindow = new google.maps.InfoWindow();
                    infowindow.setContent(content);
                    infowindow.open(this.map, marker);
                }
            })(marker));

            /*
            geocoder.geocode({'location': latlng}, function(results, status) {
                let location;
                if (status === 'OK') {
                    if (results[0]) {
                        location = results[0].formatted_address;
                    } else {
                        location = "No results found"
                    }
                } else {
                    // get failure
                    location = "No results found"
                }

                let content = "<div><img src=" + file_name + " height=\"100\" width=\"100\" /> <br/>" + location + "<br/> <button id=\"element\" onclick=\"javascript:openGoogleMap(" + post_lati + ", " + post_long + ");\">Open Google Map</button></div>";
                google.maps.event.addListener(marker, 'click', (function (marker) {
                    return function () {
                        let infowindow = new google.maps.InfoWindow();
                        infowindow.setContent(content);
                        infowindow.open(this.map, marker);
                    }
                })(marker));
            });
            */

            /*
            google.maps.event.addListener(marker, 'click', ((marker, i) => {
                return () => {     
                    if (!marker.firstClick) {
                        marker.firstClick = true;
                        var icon = {url:locations[i].fileUrl, scaledSize: new google.maps.Size(50, 50), };
                        marker.setIcon(icon);
                    } else {
                        marker.firstClick = false;
                        marker.setIcon('assets/imgs/mapblue.png');
                    }
                }
            })(marker, i));
            */
        }
    }

    function(success) {
        console.log(success);
    }

    // Go to Post detail page
    gotoPostDetail(id) {
        if(!this.preventSimpleClick) {
            this.preventSimpleClick = true;
            this.navCtrl.push(PostDetailPage, {post_id: id, type: 1});
            setTimeout(() => {
                this.preventSimpleClick = false;    
            }, 1000);
        }
    }

    // Go to Ad detail page
    gotoAdDetail(id) {
        if(!this.preventSimpleClick) {
            this.preventSimpleClick = true;
            this.navCtrl.push(AdDetailPage, {ad_id: id});
            setTimeout(() => {
                this.preventSimpleClick = false;    
            }, 1000);
        }
    }

    // refresh function
    doRefresh(refresher) {
        this.refresh_flag = true;
        this.refresher = refresher;
        
        this.storage.get('sign_id').then(sign_id => {
            if (sign_id) {
                this.getLoggedUser(this.center_latitude, this.center_longitude);
            }
            else {
                this.getNonLoggedUser(this.center_latitude, this.center_longitude);
            }
        }).catch((err) => {
            this.getNonLoggedUser(this.center_latitude, this.center_longitude);
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

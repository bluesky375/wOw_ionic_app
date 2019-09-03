webpackJsonp([35],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_twitter_connect__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emailoption_emailoption__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registercomplete_registercomplete__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_data_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';

//import { Instagram } from "ng2-cordova-oauth/core";
// import { Instagram } from "ng2-cordova-oauth/provider/instagram";








//import { environment } from '../../environments/environment';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, platform, twitter, welcomeProvider, login, storage, alertCtrl, loadingCtrl, fb, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.twitter = twitter;
        this.welcomeProvider = welcomeProvider;
        this.login = login;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('sign_id').then(function (data) {
            if (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
                // this.navCtrl.push(RegisterCompletePage, {'loginType': '1'});
            }
        });
    };
    WelcomePage.prototype.goToNext = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__emailoption_emailoption__["a" /* EmailOptionPage */]);
    };
    WelcomePage.prototype.gotoTabpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
    };
    ////////////////////////////////////////////////////////
    WelcomePage.prototype.doFbLogin = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
        });
        var loading = this.loadingCtrl.create({
            content: 'お待ちください...'
        });
        this.presentLoading(loading);
        //the permissions your facebook app needs from the user
        var permissions = ["public_profile", "email"];
        this.fb.login(permissions)
            .then(function (response) {
            //let userId = response.authResponse.userID;       
            //Getting name and email properties
            //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions
            _this.welcomeProvider.getUsersDetailsFromFacebook(response.authResponse.accessToken).subscribe(function (data) {
                loading.dismiss();
                _this.login.socialLogin('facebook', data.id, data.name, "https://graph.facebook.com/" + data.id + "/picture?width=1024&height=1024", _this.token).then(function (res) {
                    if (res['content']['sign_id']) {
                        _this.storage.set('sign_id', res['content']['sign_id']);
                        if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__registercomplete_registercomplete__["a" /* RegisterCompletePage */], { 'loginType': '2' });
                        }
                        else {
                            _this.storage.set('loginType', 2);
                            _this.gotoTabpage();
                        }
                    }
                }).catch(function (err) { return console.log(err); });
            });
        }, function (error) {
            console.log(error);
            loading.dismiss();
            if (!_this.platform.is('cordova')) {
                _this.presentAlert();
            }
        });
    };
    WelcomePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    subTitle: 'ログイン中にエラーが発生しました。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    WelcomePage.prototype.presentLoading = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ////////////////////////////////////////////////////////////////////    
    WelcomePage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
        });
        var loading = this.loadingCtrl.create({
            // content: 'お待ちください...'
            content: this.token
        });
        this.presentLoading(loading);
        //   setTimeout(() => {
        //     loading.dismiss();
        //   }, 15000);
        this.googlePlus.login({
            'scopes': '',
            // 'webClientId': '139302156705-ecmihukmkhjjjulp4kulc3c6hog33pgi.apps.googleusercontent.com', // auto generated web client id when creating the google service json file on firebase.
            'webClientId': '1092574658389-dbrdv8i5tran6o9ofs1po858632t12mt.apps.googleusercontent.com',
            'offline': true,
        })
            .then(function (user) {
            _this.login.socialLogin('instagram', user.userId, user.displayName, user.imageUrl, _this.token)
                .then(function (res) {
                loading.dismiss();
                ////////////////////
                var alert = _this.alertCtrl.create({
                    subTitle: JSON.stringify(res),
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                            }
                        }
                    ]
                });
                alert.present();
                //////////////////////////////
                _this.storage.set('sign_id', res['content']['sign_id']);
                if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__registercomplete_registercomplete__["a" /* RegisterCompletePage */], { 'loginType': '3' });
                }
                else {
                    _this.storage.set('loginType', 3);
                    _this.gotoTabpage();
                }
            }).catch(function (err) {
                loading.dismiss();
                _this.presentAlert();
            });
        }, function (err) {
            var alert = _this.alertCtrl.create({
                subTitle: err,
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert.present();
            console.log(err);
            loading.dismiss();
            if (!_this.platform.is('cordova')) {
                _this.presentAlert();
            }
        });
    };
    WelcomePage.prototype.twitterLogin = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            _this.token = data;
        });
        var loading = this.loadingCtrl.create({
            content: 'お待ちください...'
        });
        this.presentLoading(loading);
        this.twitter.login().then(function (res) {
            _this.twitter.showUser().then(function (data) {
                loading.dismiss();
                _this.login.socialLogin('twitter', data.id_str, data.screen_name, data.profile_image_url, _this.token).then(function (res) {
                    _this.storage.set('sign_id', res['content']['sign_id']);
                    if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "") {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__registercomplete_registercomplete__["a" /* RegisterCompletePage */], { 'loginType': '4' });
                    }
                    else {
                        _this.storage.set('loginType', 4);
                        _this.gotoTabpage();
                    }
                }).catch(function (err) { return console.log(err); });
            })
                .catch(function (data) {
                console.log("error::::", data);
                loading.dismiss();
                if (data.id_str && data.screen_name && data.profile_image_url) {
                    _this.login.socialLogin('twitter', data.id_str, data.screen_name, data.profile_image_url, _this.token).then(function (res) {
                        _this.storage.set('sign_id', res['content']['sign_id']);
                        if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__registercomplete_registercomplete__["a" /* RegisterCompletePage */], { 'loginType': '4' });
                        }
                        else {
                            _this.storage.set('loginType', 4);
                            _this.gotoTabpage();
                        }
                    }).catch(function (err) { return console.log(err); });
                }
            });
        }, function (error) {
            loading.dismiss();
            if (!_this.platform.is('cordova')) {
                _this.presentAlert();
            }
            console.log(error);
        });
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\welcome\welcome.html"*/'﻿<ion-header>\n\n</ion-header>\n\n<ion-content class="app_color" center text-center>\n    <ion-grid style="height: 94%;justify-content: center;">\n        <ion-row>\n            <ion-col>\n                <div class="text-center logo_height"></div>\n                <h4 class="text-center txt-color-home fnt-size-18 marg-0"><b>ログイン方法を選んでください</b></h4>\n           </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <!-- <div class="text-center pad-10" (click)="twitterLogin()" style="margin-left: 40px;"> -->\n                <div class="text-center pad-10" style="margin-left: 40px;" (click)="twitterLogin()"> \n                    <img src="assets/imgs/twitter_logo.png" class="hiwid" />\n                    <p class="text-center marg-0 text-white fs-18">Twitter</p>\n                </div>\n            </ion-col>\n            <ion-col>\n                <!-- <div class="text-center pad-10" (click)="facebook()" style="margin-right: 40px;"> -->\n                <div class="text-center pad-10" style="margin-right: 40px;" (click)="doFbLogin()">\n                    <img src="assets/imgs/facebook_logo.png" class="hiwid" />\n                    <p class="text-center marg-0 text-white fs-18">Facebook</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <!-- <div class="text-center pad-10" (click)="instagram()" style="margin-left: 40px;"> -->\n                <div class="text-center pad-10" style="margin-left: 40px;" (click)="doGoogleLogin()">\n                    <img src="assets/imgs/google_logo.png" class="hiwid" />\n                    <p class="text-center marg-0 text-white fs-18">Google</p>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div class="text-center pad-10" (click)="goToNext()" style="margin-right: 40px;">\n                    <img src="assets/imgs/mail_logo.png" class="hiwid" style="margin-top: 7px;margin-bottom: 7px;" />\n                    <p class="text-center marg-0 text-white fs-18">Mail address</p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <h5 class="text-center text-blue fixed-bottom" (click)="gotoTabpage()">閲覧のみの方はこちら</h5>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_9__welcome_data_service__["a" /* WelcomeProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* apiPath */] + 'home';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    // Homepage - get posts & ads for logged in user
    SettingsProvider.prototype.getAllFromLogged = function (lati, long) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&long=" + long + "&lati=" + lati;
            return _this.http.post(_this.api + "/get_posts_ads", body, { headers: headers }).toPromise();
        });
    };
    // Homepage - get posts & ads for non-logged in user
    SettingsProvider.prototype.getAllFromNonLogged = function (lati, long) {
        var headers = this.headers;
        var body = "long=" + long + "&lati=" + lati;
        return this.http.post(this.api + "/get_posts_non", body, { headers: headers }).toPromise();
    };
    SettingsProvider.prototype.getAccount = function () {
        var _this = this;
        return this.storage.get('sign_id').then(function (id) {
            return _this.http.get(_this.api + "/get_account?sign_id=" + id).toPromise();
        });
    };
    SettingsProvider.prototype.updateAccount = function (userId, userName, email, password, userIcon, category, location) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = '';
            if (password != "") {
                body = "sign_id=" + id + "&user_id=" + userId + "&username=" + userName + "&email=" + email + "&password=" + password + "&user_icon=" + userIcon + "&category=" + category + "&location=" + location;
            }
            else {
                body = "sign_id=" + id + "&user_id=" + userId + "&username=" + userName + "&email=" + email + "&user_icon=" + userIcon + "&category=" + category + "&location=" + location;
            }
            return _this.http.post(_this.api + "/update_account", body, { headers: headers }).toPromise();
        });
    };
    SettingsProvider.prototype.deleteAccount = function () {
        var _this = this;
        return this.storage.get('sign_id').then(function (id) {
            return _this.http.get(_this.api + "/delete_account?sign_id=" + id).toPromise();
        });
    };
    SettingsProvider.prototype.contactUs = function (content, email) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&email=" + email + "&content=" + content;
            return _this.http.post(_this.api + "/send_request", body, { headers: headers }).toPromise();
        });
    };
    SettingsProvider.prototype.getSetting = function () {
        var _this = this;
        return this.storage.get('sign_id').then(function (id) {
            return _this.http.get(_this.api + "/get_setting?sign_id=" + id).toPromise();
        });
    };
    SettingsProvider.prototype.setSetting = function (comment, like, report) {
        var _this = this;
        var headers = this.headers;
        comment = comment ? "1" : "0";
        like = like ? "1" : "0";
        report = report ? "1" : "0";
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&comment_post=" + comment + "&like_post=" + like + "&report=" + report;
            return _this.http.post(_this.api + "/set_setting", body, { headers: headers }).toPromise();
        });
    };
    SettingsProvider.prototype.getManagerNotice = function () {
        return this.http.get(this.api + "/get_notice").toPromise();
    };
    SettingsProvider.prototype.getCommentsNotice = function () {
        var _this = this;
        return this.storage.get('sign_id').then(function (id) {
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* apiPath */] + "post/get_user_comments?sign_id=" + id).toPromise();
        });
    };
    SettingsProvider.prototype.sendReport = function (post_user, type, content, post_date, comment_id) {
        var _this = this;
        // type: 1 -> post, type: 2 -> ads, type: 3 -> post comment, type: 4 -> ad comment,
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "sign_id=" + sign_id + "&post_user=" + post_user + "&type=" + type + "&content=" + content + "&post_date=" + post_date + "&comment_id=" + comment_id;
            return _this.http.post(_this.api + "/send_report", body, { headers: headers }).toPromise();
        });
    };
    SettingsProvider.prototype.getLocations = function (location_id) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "sign_id=" + sign_id + "&location_id=" + location_id;
            return _this.http.post(_this.api + "/get_location_list", body, { headers: headers }).toPromise();
        });
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adnew_adnew__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ads_ads__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdViewPage = /** @class */ (function () {
    function AdViewPage(navCtrl, navParams, adPro, setPro, regPro, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adPro = adPro;
        this.setPro = setPro;
        this.regPro = regPro;
        this.loadingCtrl = loadingCtrl;
        this.adDetail = {};
        this.comments = [];
        this.images = [];
        this.first_image = 'assets/imgs/userse.png';
        this.category_text = "";
        this.categories = [];
        this.category = [];
        this.loadingflag = false;
        this.user = {};
        this.type = this.navParams.get('type');
        this.adId = this.navParams.get('adId');
        this.current_user_icon = 'assets/imgs/userse.png';
    }
    AdViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getAccount();
        this.loadingShow();
        this.regPro.getCategory().then(function (res) {
            _this.categories = res['category_list'];
            _this.adPro.getDetail(_this.navParams.get('adId')).then(function (res) {
                _this.adDetail = res['advertise'];
                _this.comments = res['comments'];
                _this.images = res['files'];
                if (res['files'].length > 0)
                    _this.first_image = res['files'][0].file_name;
                var ct_text1 = _this.adDetail.category;
                _this.category = ct_text1.split(',');
                console.log(_this.category);
                var ct_text = "";
                for (var j = 0; j < _this.categories.length; j++) {
                    var cat = _this.categories[j];
                    if (_this.category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • ";
                    }
                }
                _this.category_text = ct_text.substr(0, ct_text.length - 2);
                _this.loadingHide();
            }).catch(function (err) {
                _this.loadingHide();
            });
            // this.loadingHide();
        }).catch(function (err) {
            _this.loadingHide();
        });
    };
    AdViewPage.prototype.getAccount = function () {
        var _this = this;
        this.setPro.getAccount().then(function (res) {
            _this.user = res['account'];
            if (!_this.user.user_icon || _this.user.user_icon == '') {
                _this.user.user_icon = 'assets/imgs/userse.png';
            }
            _this.current_user_icon = _this.user.user_icon;
        }).catch(function (err) {
            // this.loadingHide();
        });
    };
    AdViewPage.prototype.reSubmit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adnew_adnew__["a" /* AdNewPage */], { adId: this.adId });
    };
    AdViewPage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    AdViewPage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    AdViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adview',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\adview\adview.html"*/'<!--\n   Ad detail view page.\n-->\n\n<ion-header>\n    <ion-navbar class="">\n        <ion-title class="">\n            <img [src]="current_user_icon" style="width: 40px;" class="img-avtar" />&nbsp;\n            広告一覧\n        </ion-title>\n        \n        <ion-buttons right>\n            <button ion-button class="text-trans-initial btn-blue">\n                <span class="text-white">広告申請</span>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <p class="bg-blues pad-5-10 text-white mar-auto fs-16">掲載中の広告</p>\n        <div padding>\n            <ion-row>\n                <ion-col col-4>\n                    <img [src]="first_image" class="wid-100" />\n                </ion-col>\n                <ion-col col-8>\n                    <p class="mar-auto fs-12">広告タイトル </p>\n                    <p class=" fs-12">カテゴリ &nbsp;\n                        <!-- <span>{{adDetail.category_id1}} / {{adDetail.category_id2}} </span>-->\n                        <span> {{ category_text }}</span>\n                    </p>\n                    <p class=" fs-12">掲載日数 &nbsp;\n                        <span>{{adDetail.days}}日間</span>\n                    </p>\n                    <p class=" fs-12">掲載日 &nbsp;\n                        <span>{{adDetail.reg_date}}</span>\n                    </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p class="fs-12">\n                        {{adDetail.content}}\n                    </p>\n                </ion-col>\n            </ion-row>\n            <ion-row style="padding: 0px 5px;">\n                <ion-col col-3 *ngFor="let image of images| slice:1">\n                    <img [src]="image.file_name" class="tiles-image"/>\n                </ion-col>\n            </ion-row>\n            <br>\n            <br>\n            <ion-row class="row" *ngIf="type==3">\n                <ion-col class="col" text-center="">\n                    <button class="btn-blueq " (click)="reSubmit()">\n                        <!-- Re-apply as a new ad -->新規広告として再申請する</button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\adview\adview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ads_ads__["a" /* AdsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], AdViewPage);
    return AdViewPage;
}());

//# sourceMappingURL=adview.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdSubmitViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_setting__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_request__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdSubmitViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdSubmitViewPage = /** @class */ (function () {
    function AdSubmitViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdSubmitViewPage.prototype.ionViewDidLoad = function () {
    };
    AdSubmitViewPage.prototype.backToMenu = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__setting_setting__["a" /* SettingPage */]);
    };
    AdSubmitViewPage.prototype.goRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__request_request__["a" /* RequestPage */]);
    };
    AdSubmitViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adsubmitview',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\adsubmitview\adsubmitview.html"*/'<!--\n  Generated template for the AdSubmitViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<!-- Submit Ad application -->\n  	<ion-navbar>\n    	<ion-title>広告配信申請</ion-title>\n  	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div>\n		<p text-center class="fs-16" ><!-- I applied for ad placement. -->広告掲載を申請しました。</p>\n	</div>\n	\n	<br><br>\n	<br><br>\n	\n	<div>\n		<p class=" fs-16 mar-auto">申請内容確認後48時間以内に 入力頂きましたメールアドレス宛に 返信のメールを送信致します。 <br><br>48時間を経過してもメールが届かない場合は お問い合わせください。</p>\n	</div>\n\n	<div class="text-center marg-top">\n		<button class="btn width-80 bg-white fs-16 blue-btn-bor" (click)="goRequest()"><!-- Contact Us -->お問い合わせ</button>\n	</div>\n\n	<div class=" margi-10 text-center">\n		<button class="btn width-80 btn-blue-autho fs-16" (click)="backToMenu()"><!-- back to menu -->メニューに戻る</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\adsubmitview\adsubmitview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], AdSubmitViewPage);
    return AdSubmitViewPage;
}());

//# sourceMappingURL=adsubmitview.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continent_continent__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__city_city__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, camera, alertCtrl, regPro, setPro, actionSheetCtrl, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.regPro = regPro;
        this.setPro = setPro;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        // cities: Array<any> = [];
        this.password = '';
        this.confirmpwd = '';
        this.categories = [];
        this.category = [];
        this.locations = [];
        this.loadingflag = false;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.regPro.getCategory().then(function (data) {
            _this.categories = data['category_list'];
            _this.getAccount();
        });
        /*
        this.regPro.getCity().then(data => {
            this.cities = data['city_list'];
        });
        */
    };
    UserProfilePage.prototype.getAccount = function () {
        var _this = this;
        this.setPro.getAccount().then(function (res) {
            _this.user = res['account'];
            if (!_this.user.user_icon || _this.user.user_icon == '') {
                _this.user.user_icon = 'assets/imgs/userse.png';
            }
            // this.password = this.user.password;
            // this.confirmpwd = this.user.password;
            /*
            this.category.push(this.user.category_id1);
            this.category.push(this.user.category_id2);

            this.category_text = "";
            for (var c = 0; c < this.category.length; c++) {
                var num = this.category[c];
                this.category_text += " " + this.categories[num - 1].category_name;
            }
            */
            var ct_text1 = _this.user.category;
            _this.category = ct_text1.split(',');
            var ct_text = "";
            for (var j = 0; j < _this.categories.length; j++) {
                var cat = _this.categories[j];
                if (_this.category.indexOf(cat.id) > -1) {
                    ct_text = ct_text + cat.category_name + " • ";
                }
            }
            _this.category_text = ct_text.substr(0, ct_text.length - 3);
            for (var j = 0; j < _this.user.location.length; j++) {
                var location = _this.user.location[j];
                var newone = {
                    id: location.id,
                    name: location.name
                };
                _this.locations.push(newone);
            }
        });
    };
    UserProfilePage.prototype.goSelectCategory = function () {
        var _this = this;
        var categoryPageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */], { category: this.category });
        categoryPageModal.onDidDismiss(function (data) {
            if (data && data['category'] && data['category'].length) {
                _this.category = data['category'];
                _this.category_text = "";
                for (var c = 0; c < _this.category.length; c++) {
                    var num = _this.category[c];
                    _this.category_text += " " + _this.categories[num - 1].category_name;
                }
            }
        });
        categoryPageModal.present();
    };
    UserProfilePage.prototype.goSelectLocation = function () {
        var _this = this;
        var continentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__continent_continent__["a" /* ContinentPage */], { locations: this.locations });
        continentModal.onDidDismiss(function (data) {
            if (data && data['locations'] && data['locations'].length) {
                _this.locations = data['locations'];
            }
        });
        continentModal.present();
    };
    UserProfilePage.prototype.goSelectCity = function () {
        var _this = this;
        var cityPageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__city_city__["a" /* CityPage */], { city: this.user.city });
        cityPageModal.onDidDismiss(function (data) {
            _this.user.city = data.city;
        });
        cityPageModal.present();
        // this.navCtrl.push(CityPage);
    };
    UserProfilePage.prototype.confirm = function () {
        var _this = this;
        if (this.password == '' || this.password != this.confirmpwd) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'パスワードが間違っております。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var location_text = "[";
            for (var i = 0; i < this.locations.length; i++) {
                location_text += this.locations[i].id + ", ";
            }
            var location = location_text.substr(0, location_text.length - 2) + "]";
            var ct_text = "[";
            for (var j = 0; j < this.category.length; j++) {
                ct_text += this.category[j] + ", ";
            }
            var ct = ct_text.substr(0, ct_text.length - 2) + "]";
            var alert_2 = this.alertCtrl.create({
                title: '',
                message: '編集内容は保存されません。宜しいですか？',
                buttons: [
                    {
                        text: 'いいえ',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'はい',
                        handler: function () {
                            _this.loadingShow();
                            _this.setPro.updateAccount(_this.user.id, _this.user.username, _this.user.email, _this.password, _this.user.user_icon, ct, location).then(function (data) {
                                _this.loadingHide();
                                _this.navCtrl.pop();
                            }).catch(function (err) {
                                _this.loadingHide();
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    UserProfilePage.prototype.deletePhoto = function (index) {
        var _this = this;
        console.log("deletephoto: " + index);
        var confirm = this.alertCtrl.create({
            title: 'この画像を削除致しますか？',
            message: '',
            buttons: [
                {
                    text: 'いいえ',
                    handler: function () {
                        //  console.log('Disagree clicked');
                    }
                }, {
                    text: 'はい',
                    handler: function () {
                        _this.user.user_icon = '';
                    }
                }
            ]
        });
        confirm.present();
    };
    UserProfilePage.prototype.openCamera = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '写真を選択',
            buttons: [
                {
                    text: 'カメラを起動する',
                    role: 'destructive',
                    handler: function () {
                        _this.takePhotoC();
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: function () {
                        _this.takePhotoG();
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UserProfilePage.prototype.takePhotoC = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 250,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.user.user_icon = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.takePhotoG = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 250,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.user.user_icon = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    UserProfilePage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userprofile',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\userprofile\userprofile.html"*/'<ion-header>\n    <ion-navbar color="">\n        <!-- \n        <ion-buttons left>\n            <button ion-button icon-only class="text-trans-initial " (click)="goback()">\n                <span class="color-blue">Cancel</span>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        -->\n        <ion-title class="fs-12">\n            <!-- Account information -->アカウント情報</ion-title>\n        <ion-buttons right>\n            <button ion-button class="text-trans-initial color-blue" (click)="confirm()">\n                <span class="color-blue">\n                    <!-- Done -->完了</span>\n                <!-- <ion-icon name="notifications"></ion-icon> -->\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="text-center bor-bot-1">\n        <img *ngIf="user.user_icon" [src]="user.user_icon" height="80" class="border" />\n\n        <img *ngIf="!user.user_icon" src="assets/imgs/default_avatar.png" height="80"  class="tiles-image" (click)="openCamera()" />\n\n        <ion-icon name="ios-close-circle"  (click)="deletePhoto()" style="position: absolute;"></ion-icon>\n\n        <p class="no-border text-blue fs-16">プロフィール写真を変更</p>\n    </div>\n    <div class="center-div">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <p class="fs-w8-5">ユーザー名</p>\n                    <ion-input [(ngModel)]="user.username" placeholder="ユーザーネーム１２３" clearInput class="bor-bot-1"></ion-input>\n                </ion-col>\n            </ion-row>\n            \n            <br />\n\n            <ion-row>\n                <ion-col>\n                    <p class="marg-2 fs-w8-5">メールアドレス</p>\n                    <ion-input [(ngModel)]="user.email" placeholder="Email" class="bor-bot-1"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p class="marg-2 fs-w8-5">パスワード</p>\n                    <ion-input [(ngModel)]="password" type="password" placeholder="aaabbbccc" clearInput class="bor-bot-1"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p class="marg-2 fs-w8-5">パスワード（確認用）</p>\n                    <ion-input [(ngModel)]="confirmpwd" type="password" placeholder="aaabbbccc" clearInput class="bor-bot-1"></ion-input>\n                </ion-col>\n            </ion-row>\n\n            <br />\n\n            <ion-row>\n                <ion-col (click)="goSelectCategory()">\n                    <ion-label class="marg-2 fs-w8-5">カテゴリー</ion-label>\n                    <!--\n                    <ion-select class="item item-block item-ios select-cat" [(ngModel)]="user.category" placeholder="中文維基百基百科" multiple="true" disabled=true>\n                        <ion-option class="width-100per" *ngFor="let item of categories" [disabled]="item.del_flag == 1" [value]="item.id">{{item.category_name}}</ion-option>\n                    </ion-select>\n                    -->\n                    <div style="border-radius: 6px;width: 100%;background: #fff !important; max-width: 100% !important;opacity: 1 !important;padding: 8px !important;display: block; min-height: 35px;">\n                        {{ category_text }}\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col (click)="goSelectLocation()">\n                    <ion-label class="marg-2 fs-w8-5">都市</ion-label>\n                    <!--\n                    <ion-select class="item item-block item-ios select-cat" palceholder="City" [(ngModel)]="user.city" disabled=true>\n                        <ion-option *ngFor="let c of cities" [value]="c.id">{{c.city_name}}</ion-option>\n                    </ion-select>\n                    -->\n\n                    <div style="border-radius: 6px;width: 100%;background: #fff !important; max-width: 100% !important;opacity: 1 !important;padding: 8px !important;display: block; min-height: 35px;">\n                        <label *ngFor="let loc of locations">\n                            {{ loc.name }} &nbsp;\n                        </label>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <br>\n            <br>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\userprofile\userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prefecture_prefecture__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryPage = /** @class */ (function () {
    function CountryPage(navCtrl, navParams, setPro, modalCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setPro = setPro;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.countries = [];
        this.locations = [];
        this.continent = navParams.get('continent');
        this.locations = navParams.get('locations') || [];
        this.list_label = this.continent.name;
        console.log(this.continent);
        this.setPro.getLocations(this.continent.id).then(function (data) {
            return _this.countries = data['location_list'];
        });
    }
    CountryPage.prototype.ionViewDidLoad = function () {
    };
    CountryPage.prototype.dismiss = function () {
        var data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    };
    CountryPage.prototype.submit = function () {
        var data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    };
    CountryPage.prototype.selectItem = function (country) {
        var _this = this;
        // If select japan (country.id == 7)
        if (country.id == 7) {
            var prefectureModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__prefecture_prefecture__["a" /* PrefecturePage */], { 'locations': this.locations });
            prefectureModal.onDidDismiss(function (data) {
                if (data && data['locations'] && data['locations'].length) {
                    _this.locations = data['locations'];
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
        var newone = {
            id: country.id,
            name: country.name
        };
        this.locations.push(newone);
    };
    CountryPage.prototype.removeItem = function (location) {
        for (var i = 0; i < this.locations.length; i++) {
            var temp = this.locations[i];
            if (temp.id == location.id) {
                this.locations.splice(i, 1);
                return;
            }
        }
    };
    CountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-country',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\country\country.html"*/'<ion-header>\n\n    <ion-navbar>\n        <!--\n        <button ion-button clear icon-only (click)="dismiss()" style="height: 2.0rem; z-index: 100;">\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n        -->\n        \n        <ion-title>地域選択</ion-title>\n    </ion-navbar>\n\n</ion-header>\n  \n<ion-content>\n\n    <ion-label class="no-border text-blue" text-wrap style="font-size: 1.7rem !important; margin-left: 30px; margin-bottom: 20px;">\n        興味がある地域を選択してください。<br>\n        最大5つまで選択可能です。\n    </ion-label>\n\n\n    <!-- Selected locations -->\n    <ion-list no-lines>\n        <ion-item ion-item *ngFor="let l of locations" class="selected-continent">\n            <button no-padding class="item-selected-continent" ion-button outline round style="font-size: 1.7rem !important;">\n                {{ l.name }}\n                <ion-icon icon-right class="selected-continent-icon" name="md-close" (click)="removeItem(l)"></ion-icon>\n            </button> \n        </ion-item>\n    </ion-list>\n    \n\n    <!-- Countries in selected continent -->\n    <ion-list class="last-item-border">\n        <ion-list-header class="no-border text-blue fs-16 continent-list" no-margin text-wrap>\n            {{ list_label }}\n        </ion-list-header>\n        \n        <button no-padding class="item-continent" ion-item *ngFor="let c of countries" (click)="selectItem(c)">\n            {{ c.name }}\n            <ion-icon item-right class="item-right-icon" name="ios-arrow-forward-outline" *ngIf="c.id == 7"> </ion-icon>\n        </button> \n    </ion-list>    \n    \n\n    <!-- Cancel button -->\n    <div class="flex-center" padding-bottom>\n        <div class="text-center">\n            <button class="btn bg-gre width-80 fs-16" (click)="dismiss()" >キャンセル</button>\n        </div>\n    </div>\n\n    <!-- OK button -->\n    <div class="flex-center" padding-bottom>\n        <div class="text-center">\n           <button class="btn btn-blue-autho width-80 fs-16" (click)="submit()" >決定</button>\n        </div>\n   </div>\n    \n</ion-content>\n  '/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\country\country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], CountryPage);
    return CountryPage;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrefecturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrefecturePage = /** @class */ (function () {
    function PrefecturePage(navCtrl, navParams, setPro, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setPro = setPro;
        this.viewCtrl = viewCtrl;
        this.prefectures = [];
        this.locations = [];
        this.locations = navParams.get('locations') || [];
        this.list_label = "アジア > 日本";
        this.setPro.getLocations(7).then(function (data) {
            return _this.prefectures = data['location_list'];
        });
    }
    PrefecturePage.prototype.ionViewDidLoad = function () {
    };
    PrefecturePage.prototype.dismiss = function () {
        var data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    };
    PrefecturePage.prototype.submit = function () {
        var data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    };
    PrefecturePage.prototype.selectItem = function (prefecture) {
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
        var newone = {
            id: prefecture.id,
            name: prefecture.name
        };
        this.locations.push(newone);
    };
    PrefecturePage.prototype.removeItem = function (location) {
        for (var i = 0; i < this.locations.length; i++) {
            var temp = this.locations[i];
            if (temp.id == location.id) {
                this.locations.splice(i, 1);
                return;
            }
        }
    };
    PrefecturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prefecture',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\prefecture\prefecture.html"*/'<ion-header>\n\n    <ion-navbar>\n        <!--\n        <button ion-button clear icon-only (click)="dismiss()" style="height: 2.0rem; z-index: 100;">\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n        -->\n        <ion-title>地域選択</ion-title>\n    </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n    \n    <ion-label class="no-border text-blue" text-wrap style="font-size: 1.7rem !important; margin-left: 30px; margin-bottom: 20px;">\n        興味がある地域を選択してください。<br>\n        最大5つまで選択可能です。\n    </ion-label>\n\n    <!-- selected locations -->\n    <ion-list no-lines>\n        <ion-item ion-item *ngFor="let l of locations" class="selected-continent">\n            <button no-padding class="item-selected-continent" ion-button outline round style="font-size: 1.7rem !important;">\n                {{ l.name }}\n                <ion-icon icon-right class="selected-continent-icon" name="md-close" (click)="removeItem(l)"></ion-icon>\n            </button> \n        </ion-item>\n    </ion-list>\n    \n    <!-- prefectures -->\n    <ion-list class="last-item-border">\n        <ion-list-header class="no-border text-blue fs-16 continent-list" no-margin text-wrap>\n            {{ list_label }}\n        </ion-list-header>\n        <button no-padding class="item-continent" ion-item *ngFor="let p of prefectures" (click)="selectItem(p)">\n            {{ p.name }}\n            <!-- <ion-icon item-right class="item-right-icon" name="ios-arrow-forward-outline"></ion-icon> -->\n        </button> \n    </ion-list>\n\n    <!-- Cancel button -->\n    <div class="flex-center" padding-bottom>\n        <div class="text-center">\n            <button class="btn bg-gre width-80 fs-16" (click)="dismiss()" >戻る</button>\n        </div>\n    </div>\n    \n    <!-- OK button -->\n    <div class="flex-center" padding-bottom>\n        <div class="text-center">\n            <button class="btn btn-blue-autho width-80 fs-16" (click)="submit()" >決定</button>\n        </div>\n    </div>\n</ion-content>\n  '/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\prefecture\prefecture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], PrefecturePage);
    return PrefecturePage;
}());

//# sourceMappingURL=prefecture.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CityPage = /** @class */ (function () {
    function CityPage(navCtrl, navParams, regPro, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regPro = regPro;
        this.viewCtrl = viewCtrl;
        this.cities = [];
        this.locations = [];
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
        ];
    }
    CityPage.prototype.dismiss = function () {
        var data = { 'city': this.city };
        this.viewCtrl.dismiss(data);
    };
    CityPage.prototype.ionViewDidLoad = function () {
    };
    CityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-city',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\city\city.html"*/'<ion-header>\n\n  	<ion-toolbar>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="dismiss()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title><!-- Select City -->地域選択</ion-title>\n	</ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-list radio-group class="no-border" [(ngModel)]="city">\n		<ion-list-header class="no-border text-blue fs-16">\n		<!-- Please select one area you want to know information -->\n		情報を知りたい地域を1つ選択してください\n		</ion-list-header>\n\n		<div class="text-align" *ngFor="let c of cities">\n			<span padding>{{c.name}}</span>\n			<ion-radio [checked]="c.id==city" [value]="c.id"></ion-radio>\n		</div>\n	</ion-list>\n	   \n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\city\city.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], CityPage);
    return CityPage;
}());

//# sourceMappingURL=city.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NoticeViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticeViewPage = /** @class */ (function () {
    function NoticeViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notice = this.navParams.get('notice');
    }
    NoticeViewPage.prototype.ionViewDidLoad = function () {
    };
    NoticeViewPage.prototype.backPage = function () {
        this.navCtrl.pop();
    };
    NoticeViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticeview',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\noticeview\noticeview.html"*/'<!--\n  Generated template for the NoticeViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  	<ion-navbar>\n    	<ion-title>アプリからのお知らせ</ion-title>\n  	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-row>\n		<ion-col col-2 class="flex-center">\n			<ion-avatar item-start class="">\n				<img src="assets/imgs/userse.png" class="img-avtar mar-auto" />\n			</ion-avatar>\n		</ion-col>\n		\n		<ion-col col-10>\n			<p class="fs-12">{{notice.username}}\n				<ion-note class="fs-14 pad-right float-right text-black">{{notice.reg_date}}\n				</ion-note>\n			</p> \n		</ion-col>\n	</ion-row>\n	<div class="pad-30-0">\n		<p class="fs-14 mar-auto text-justify">\n		{{notice.content}}\n	</div>\n\n	<br><br>\n	\n	<ion-row class="row">\n		<ion-col class="col" text-center="">\n			<button class="btn-blueq fs-16" (click)="backPage()">戻る</button>\n		</ion-col>\n	</ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\noticeview\noticeview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], NoticeViewPage);
    return NoticeViewPage;
}());

//# sourceMappingURL=noticeview.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_posts_posts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PostEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostEditPage = /** @class */ (function () {
    function PostEditPage(navCtrl, navParams, alertCtrl, postPro, regPro, setPro, socialSharing, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.postPro = postPro;
        this.regPro = regPro;
        this.setPro = setPro;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.postData = {};
        // User
        this.user = {};
        // show map view
        this.mapShow = false;
        // social sharing
        this.facebookac = false;
        this.twitterac = false;
        this.instagramac = false;
        // categories and cities from server
        this.categories = [];
        this.cities = [];
        this.postData = this.navParams.get('post');
    }
    PostEditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.comment = "";
        this.photo = "";
        this.category = 0;
        console.log(this.postData);
        /*
        if (this.postData.publish == 1 || this.postData.publish == 4 || this.postData.publish == 5 || this.postData.publish == 7){
            this.facebookac = true;
        }

        if (this.postData.publish == 3 || this.postData.publish == 5 || this.postData.publish == 6 || this.postData.publish == 7){
            this.instagramac = true;
        }

        if (this.postData.publish == 2 || this.postData.publish == 4 || this.postData.publish == 6 || this.postData.publish == 7){
            this.twitterac = true;
        }
        */
        this.regPro.getCategory().then(function (res) { return _this.categories = res['category_list']; });
        this.setPro.getAccount().then(function (res) {
            _this.user = res['account'];
            if (!_this.user.user_icon || _this.user.user_icon == '') {
                _this.user.user_icon = 'assets/imgs/userse.png';
            }
            _this.current_user_icon = _this.user.user_icon;
        });
    };
    PostEditPage.prototype.update = function () {
        var _this = this;
        this.postPro.edit(this.postData).then(function () {
            var alert = _this.alertCtrl.create({
                subTitle: '更新が完了致しました。',
                buttons: [{
                        text: 'はい',
                        handler: function () {
                            _this.navCtrl.popToRoot();
                        }
                    }]
            });
            alert.present();
        });
    };
    PostEditPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    PostEditPage.prototype.delete = function () {
        var _this = this;
        this.postPro.delete(this.postData).then(function () {
            var alert = _this.alertCtrl.create({
                subTitle: '投稿を削除しました。',
                buttons: [{
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                            _this.navCtrl.popToRoot();
                        }
                    }]
            });
            alert.present();
        });
    };
    PostEditPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: '投稿を削除しますか？',
            buttons: [
                {
                    text: 'いいえ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'はい',
                    role: 'ok',
                    handler: function () {
                        _this.delete();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PostEditPage.prototype, "mapElement", void 0);
    PostEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postedit',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\postedit\postedit.html"*/'<!--\n  Generated template for the PostEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="">\n        <!-- Post Edit -->\n        <ion-title class="fs-12">投稿編集</ion-title>\n        <ion-buttons right>\n            <button ion-button outline class="text-trans-initial color-blue" (click)="update()">\n                <span class="color-blue">更新</span>\n                <!-- <ion-icon name="notifications"></ion-icon> -->\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-row padding>\n        <ion-col col-4 style="position: relative;">\n            <img [src]="postData.file_name" class="wid-100" name="files" id="files"/>\n            <!-- <img [src]="_DomSanitizationService.bypassSecurityTrustUrl(photo ? photo : \'assets/imgs/camera.png\')" (click)="OpenCamera()" class="wid-100" name="files" id="files" (load)="loaded($event)"/> -->\n            <!-- <ion-icon name="ios-close-circle" (click)="deletePhoto()" style="position: absolute;right: 14px;top: 14px;"></ion-icon> -->\n        </ion-col>\n        <ion-col col-8>\n            \n            <ion-textarea [(ngModel)]="postData.comment" placeholder="コメント" [readonly]="true" class="wid-100 hi-100 no-border">\n            </ion-textarea>\n            \n            <!--\n            <p class="mar-auto fs-12" *ngIf="comment == \'\'" (click)="openModal()" style="color:grey">コメント</p>\n            <p class="mar-auto fs-12" *ngIf="comment !== \'\'" (click)="openModal()">{{ comment }}</p>\n            -->\n        </ion-col>\n    </ion-row>\n\n    <!--\n    <ion-grid *ngIf="mapShow">\n        位置\n    </ion-grid>\n\n    <ion-grid no-padding *ngIf="mapShow" >\n        <div #map id="map" style="height:200px"></div>\n        <div #content id="content"></div>\n    </ion-grid>\n    \n    <ion-grid *ngIf="mapShow">\n        {{photoLocation ? photoLocation : \'\'}}\n    </ion-grid>\n    -->\n\n    <!-- Category Selection -->\n    <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6>カテゴリー選択</h6>\n        <ion-row class="selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select class="select-label wid-100" [(ngModel)]="postData.category" okText="はい" cancelText="いいえ">\n                    <ion-option *ngFor="let cat of categories" [value]="cat.id" [disabled]="cat.del_flag">{{ cat.category_name }}</ion-option>\n                </ion-select>\n            </ion-col>\n            \n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <!--\n    <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6> // 都市 </h6>\n        <ion-row class=" selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select class="select-label wid-100 " palceholder="City" [(ngModel)]="city">\n                    <ion-option *ngFor="let c of cities" [value]="c.id">{{c.city_name}}</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    -->\n\n    <!-- Sharing scope -->\n    <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6>公開範囲</h6>\n        <ion-row class=" selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select [(ngModel)]="postData.share" class="select-label wid-100" okText="はい" cancelText="いいえ">\n                    <ion-option value="0">公開</ion-option>\n                    <ion-option value="1" [selected]="true">非公開</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    <br>\n\n    \n    <!-- Facebook -->\n    <!--\n    <ion-row>\n        <ion-col col-5 class="flex-center">\n            <img src="assets/imgs/facebook_logo.png" height="25" />\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <h6 class="fs-14">{{user?.username}}</h6>\n        </ion-col>\n        <ion-col col-3 class="flex-center">\n            <ion-toggle [(ngModel)]="facebookac" ></ion-toggle>\n        </ion-col>\n    </ion-row>\n    -->\n\n    <!-- Twitter -->\n    <!--\n    <ion-row>\n        <ion-col col-5 class="flex-center">\n            <img src="assets/imgs/twitter_logo.png" height="25" />\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <h6 class="fs-14">{{user?.username}}</h6>\n        </ion-col>\n        <ion-col col-3 class="flex-center">\n            <ion-toggle [(ngModel)]="twitterac" ></ion-toggle>\n        </ion-col>\n    </ion-row>\n    -->\n\n    <!-- Instagram -->\n    <!--\n    <ion-row>\n        <ion-col col-5 class="flex-center">\n            <img src="assets/imgs/instagram_logo.png" height="25" />\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <h6 class="fs-14">{{user?.username}}</h6>\n        </ion-col>\n        <ion-col col-3 class="flex-center">\n            <ion-toggle [(ngModel)]="instagramac" ></ion-toggle>\n        </ion-col>\n    </ion-row>\n    -->\n</ion-content>\n\n<ion-footer>\n    <!-- delete -->\n    <ion-toolbar>\n        <ion-title class="text-red" (click)="presentConfirm()">削除する</ion-title>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\postedit\postedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], PostEditPage);
    return PostEditPage;
}());

//# sourceMappingURL=postedit.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MenuSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuSettingPage = /** @class */ (function () {
    function MenuSettingPage(navCtrl, navParams, setPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setPro = setPro;
        this.setting = {};
        this.setting.comment_post = true;
        this.setting.like_post = true;
        this.setting.report = true;
    }
    MenuSettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setPro.getSetting().then(function (res) {
            if (!res['setting']) {
                _this.setting.comment_post = false;
                _this.setting.like_post = false;
                _this.setting.report = false;
            }
            else {
                _this.setting.comment_post = res['setting'].comment_post != '0';
                _this.setting.like_post = res['setting'].like_post != '0';
                _this.setting.report = res['setting'].report != '0';
            }
        });
    };
    MenuSettingPage.prototype.confirm = function () {
        var _this = this;
        this.setPro.setSetting(this.setting.comment_post, this.setting.like_post, this.setting.report).then(function (res) {
            _this.navCtrl.pop();
        });
    };
    MenuSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menusetting',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\menusetting\menusetting.html"*/'<!--\n  Generated template for the MenuSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title class="f-12">\n            <!-- Push notification settings -->プッシュ通知設定</ion-title>\n        <ion-buttons right>\n            <button ion-button class="text-trans-initial color-blue" (click)="confirm()">\n                <span class="color-blue">\n                    <!-- Done -->完了</span>\n                <!-- <ion-icon name="notifications"></ion-icon> -->\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="label-bor">\n        <p class="bg-blues pad-5-10 text-white mar-auto">\n            <!-- About Post -->投稿について</p>\n        <ion-item class="no-border">\n            <ion-label class="no-border">\n                <!-- Comment on Post -->投稿へのコメント</ion-label>\n            <ion-toggle [(ngModel)]="setting.comment_post"></ion-toggle>\n        </ion-item>\n        <p class="fs-12 mar-auto pad-left-6">\n            <!-- Receive notification when comment / reply to your post -->自分の投稿にコメント/返信された時に通知を受け取ります。</p>\n    </div>\n\n    <div class="label-bor">\n        <ion-item class="no-border">\n            <ion-label class="no-border">\n                <!-- Like to Post -->投稿へのいいね</ion-label>\n            <ion-toggle [(ngModel)]="setting.like_post"></ion-toggle>\n        </ion-item>\n        \n        <p class="fs-12 mar-auto pad-left-6">自分の投稿にいいねされた時に通知を受け取ります。</p>\n    </div>\n    <br>\n    <br>\n\n    <div class="label-bor">\n        <p class="bg-blues pad-5-10 text-white mar-auto">\n            <!-- Report from manager -->運営からのお知らせについて</p>\n        <ion-item class="no-border">\n            <ion-label class="no-border">\n                <!-- Information from manager -->運営からのお知らせ</ion-label>\n            <ion-toggle [(ngModel)]="setting.report"></ion-toggle>\n        </ion-item>\n        <p class="fs-12 mar-auto pad-left-6">運営から新しいお知らせがある時に通知されます。</p>\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\menusetting\menusetting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MenuSettingPage);
    return MenuSettingPage;
}());

//# sourceMappingURL=menusetting.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LanguageSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LanguageSettingPage = /** @class */ (function () {
    function LanguageSettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LanguageSettingPage.prototype.ionViewDidLoad = function () {
    };
    LanguageSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-languagesetting',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\languagesetting\languagesetting.html"*/'<!--\n  Generated template for the LanguageSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="">\n        <!-- \n        <ion-buttons left>\n            <button ion-button icon-only class="text-trans-initial " (click)="goback()">\n                <span class="color-blue">Cancel</span>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons> \n        -->\n        <ion-title class="fs-12"><!-- Select Language -->言語選択</ion-title>\n\n        <ion-buttons right>\n            <button ion-button  class="text-trans-initial color-blue">\n                <span class="color-blue">保存</span>\n                <!-- <ion-icon name="notifications"></ion-icon> -->\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	  <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6><!-- Language -->言語選択</h6>\n        <ion-row class=" selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select class="select-label wid-100 ">\n                    <!-- <ion-option value="Cm" [selected]="true">Please select</ion-option> -->\n                    <ion-option value="Fs" [selected]="true">日本語(Japanese)</ion-option>\n                    <ion-option value="Ft" >英语(English)</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n	  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\languagesetting\languagesetting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], LanguageSettingPage);
    return LanguageSettingPage;
}());

//# sourceMappingURL=languagesetting.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailinput_emailinput__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emaillogin_emaillogin__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EmailOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailOptionPage = /** @class */ (function () {
    function EmailOptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmailOptionPage.prototype.ionViewDidLoad = function () {
    };
    EmailOptionPage.prototype.goEmailRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__emailinput_emailinput__["a" /* EmailInputPage */]);
    };
    EmailOptionPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EmailOptionPage.prototype.goEmailLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__emaillogin_emaillogin__["a" /* EmailLoginPage */]);
    };
    EmailOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emailoption',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\emailoption\emailoption.html"*/'<!--\n  Generated template for the EmailOptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class="app_color">\n    <div class="flex-center hi-100">\n        <div class="marg-top">\n            <div class="">\n                <h4 class="text-center">メールアドレスを使用してログイン</h4>\n            </div>\n\n            <!-- \n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">Mail address</p>\n                <input type="text" class="inp-box" />\n            </div> \n            -->\n            \n            <div class="marg-top text-center">\n                <button class="btn width-80 btn-blue-autho fs-16" (click)="goEmailLogin()" >アカウントをお持ちの方</button>\n            </div>\n\n            <div class="text-center margi-10">\n                <button class="btn width-80 bg-white fs-16" (click)="goEmailRegister()">アカウント新規作成</button>\n            </div>\n\n            <div class="marg-top text-center ">\n                <button class="btn width-80 bg-gre fs-16"  (click)="goBack()">キャンセル</button>\n            </div>\n     \n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\emailoption\emailoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], EmailOptionPage);
    return EmailOptionPage;
}());

//# sourceMappingURL=emailoption.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otppass_otppass__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailInputPage = /** @class */ (function () {
    function EmailInputPage(navCtrl, navParams, regPro, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regPro = regPro;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    EmailInputPage.prototype.ionViewDidLoad = function () {
    };
    EmailInputPage.prototype.goOtpPass = function () {
        var _this = this;
        var patt = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
        var res = patt.test(this.email);
        if (res) {
            this.loadingShow();
            this.regPro.emailVerify(this.email).then(function (data) {
                _this.loadingHide();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__otppass_otppass__["a" /* OtpPassPage */], { email: _this.email });
            }).catch(function (err) {
                _this.loadingHide();
                var alert = _this.alertCtrl.create({
                    subTitle: 'このメールアドレスは既に登録されています。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                subTitle: '有効なメールアドレスを入力してください。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    EmailInputPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EmailInputPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: '暫くお待ちください。'
        });
        this.load.present();
    };
    EmailInputPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    EmailInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emailinput',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\emailinput\emailinput.html"*/'﻿\n<!--\n  Generated template for the EmailInputPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class="app_color">\n    <div class="flex-center hi-100">\n        <div class="marg-top">\n            <div class="">\n                <h4 class="text-center">メールアドレス認証</h4>\n                <p text-center>メールアドレスに認証コードをお送りします。</p>\n            </div>\n            \n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">メールアドレス</p>\n                <input type="email" class="inp-box"  [(ngModel)]="email"/>\n                <!-- <input type="text" class="form-control" placeholder="Name" name="Name" [(ngModel)]="email" required pattern="[a-z0-9A-Z]+@[a-z0-9]+\.[a-z]{2,3}$"> -->\n            </div>\n\n            <div class="marg-top text-center">\n                <button class="btn width-80 btn-blue-autho fs-16" (click)="goOtpPass()">認証コード送信</button>\n            </div>\n            \n            <div class="text-center margi-10">\n                <button class="btn width-80 bg-gre fs-16" (click)="goBack()">キャンセル</button>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\emailinput\emailinput.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EmailInputPage);
    return EmailInputPage;
}());

//# sourceMappingURL=emailinput.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OtpPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPassPage = /** @class */ (function () {
    function OtpPassPage(navCtrl, navParams, alertCtrl, regPro, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.regPro = regPro;
        this.loadingCtrl = loadingCtrl;
    }
    OtpPassPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('email')) {
            this.email = this.navParams.get('email');
        }
    };
    OtpPassPage.prototype.goRegister = function () {
        var _this = this;
        if (!this.otp) {
            var alert_1 = this.alertCtrl.create({
                subTitle: '認証コードを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        this.loadingShow();
        this.regPro.otpPass(this.otp, this.email).then(function (data) {
            _this.loadingHide();
            var res = data['content'];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], {
                email: _this.email,
                user_id: res.user_id
            });
        }).catch(function (err) {
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                subTitle: '正しい認証コードを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    OtpPassPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    OtpPassPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'しばらくお待ちください。'
        });
        this.load.present();
    };
    OtpPassPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    OtpPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otppass',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\otppass\otppass.html"*/'﻿<!--\n  Generated template for the OtpPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n<ion-content class="app_color">\n    <div class="flex-center hi-100">\n        <div class="marg-top">\n            <div class="center-div">\n                <p>メールアドレスに認証コードをお送りしました。 届いた認証コードを入力してください。</p>\n                <p>\n                    <strong>{{email}}</strong>\n                </p>\n            </div>\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">認証コード</p>\n                <input [(ngModel)]="otp" type="text" class="inp-box" />\n            </div>\n\n            <div class="text-center marg-top">\n                <ion-grid class="marg-top">\n                    <ion-row>\n                        <ion-col col-6>\n                            <button class="btn width-100per bg-gre fs-w8-5" (click)="goBack()">キャンセル</button>\n                        </ion-col>\n                        <ion-col col-6>\n                            <button class="btn width-100per btn-blue-autho" (click)="goRegister()">認証する</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\otppass\otppass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], OtpPassPage);
    return OtpPassPage;
}());

//# sourceMappingURL=otppass.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registercomplete_registercomplete__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, camera, navParams, alertCtrl, actionSheetCtrl, regPro, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.regPro = regPro;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.user_id = this.navParams.get('user_id');
        this.email = this.navParams.get('email');
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            if (data) {
                _this.token = data;
            }
        });
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.AlphanumericPassword = function (even) {
        var patt = new RegExp('^[A-Za-z0-9@. ]+$');
        var res = patt.test(this.password);
        if (res) {
        }
        else {
            if (this.password) {
                this.password = this.password.substring(0, this.password.length - 1);
                even.preventDefault();
                var alert_1 = this.alertCtrl.create({
                    subTitle: '英数字で入力してください。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                                console.log('Buy clicked');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }
    };
    RegisterPage.prototype.AlphanumeriConfirm = function (even) {
        var patt = new RegExp('^[A-Za-z0-9@. ]+$');
        var res = patt.test(this.confirmpassword);
        if (res) {
        }
        else {
            if (this.confirmpassword) {
                this.confirmpassword = this.confirmpassword.substring(0, this.confirmpassword.length - 1);
                even.preventDefault();
                var alert_2 = this.alertCtrl.create({
                    subTitle: '英数字で入力してください。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                                console.log('Buy clicked');
                            }
                        }
                    ]
                });
                alert_2.present();
            }
        }
    };
    RegisterPage.prototype.goNext = function () {
        if (!this.username || this.username.length < 1 || this.username.length > 10) {
            var alert_3 = this.alertCtrl.create({
                subTitle: '1文字以上10文字以内で入力してください',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert_3.present();
        }
        else if (this.password == '' || this.password != this.confirmpassword) {
            var alert_4 = this.alertCtrl.create({
                subTitle: 'パスワードが間違っております。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert_4.present();
        }
        else {
            this.goRegisterComplete();
        }
    };
    RegisterPage.prototype.goRegisterComplete = function () {
        var _this = this;
        this.loadingShow();
        this.regPro.register(this.user_id, this.username, this.password, this.email, this.photo, this.token).then(function (data) {
            _this.loadingHide();
            _this.storage.set('sign_id', data['content']['sign_id']);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registercomplete_registercomplete__["a" /* RegisterCompletePage */], { 'loginType': '1' });
        }).catch(function (err) {
            if (err.error && err.error.content) {
                var alert_5 = _this.alertCtrl.create({
                    // subTitle: err.error.content,
                    subTitle: "このユーザー名は既に使用されています。",
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                                console.log('Buy clicked');
                            }
                        }
                    ]
                });
                alert_5.present();
            }
            _this.loadingHide();
        });
    };
    RegisterPage.prototype.openCamera = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'プロフィール写真を選択',
            buttons: [
                {
                    text: 'カメラを起動',
                    role: 'destructive',
                    handler: function () {
                        _this.fetchPhoto(_this.camera.PictureSourceType.CAMERA);
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: function () {
                        _this.fetchPhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage.prototype.fetchPhoto = function (srcType) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: srcType,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photo = base64Image;
            console.log(base64Image);
        }, function (err) {
            // Handle error
        });
    };
    RegisterPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'しばらくお待ちください。'
        });
        this.load.present();
    };
    RegisterPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\register\register.html"*/'﻿<ion-header>\n</ion-header>\n<ion-content padding class="app_color">\n    <p text-center>\n        <b>ユーザー情報入力</b>\n    </p>\n    <div class="text-center marg-top">\n        <img [src]="photo ? photo : \'assets/imgs/userse.png\'" width="80" height="80" (click)="openCamera()" class="profile"/>\n    </div>\n    <div class="center-div">\n        <ion-grid>\n            <!-- email -->\n            <ion-row>\n                <ion-col>\n                    <p class="fs-w8-5">メールアドレス</p>\n                    <p class="marg-10">\n                        <strong>{{email}}</strong>\n                    </p>\n                </ion-col>\n            </ion-row>\n\n            <!-- user name -->\n            <ion-row>\n                <ion-col>\n                    <p class="marg-2 fs-w8-5">ユーザー名</p>\n                    <input type="text" [(ngModel)]="username" class="inp-box" />\n                </ion-col>\n            </ion-row>\n\n            <!-- password -->\n            <ion-row>\n                <ion-col>\n                    <p class="marg-2 fs-w8-5">パスワード</p>\n                    <input type="password" class="inp-box" (keyup)="AlphanumericPassword($event)" [(ngModel)]="password" minlength="6" maxlength="12"\n                    />\n                </ion-col>\n            </ion-row>\n\n            <!-- confirm password -->\n            <ion-row>\n                <ion-col>\n                    <p class="marg-2 fs-w8-5">パスワード（確認用）</p>\n                    <input type="password" class="inp-box" (keyup)="AlphanumeriConfirm($event)" [(ngModel)]="confirmpassword" minlength="6" maxlength="12"\n                    />\n                </ion-col>\n            </ion-row>\n            \n            <br>\n            <br>\n\n            \n            <ion-row>\n                <ion-col col-6>\n                    <button class="btn width-100per bg-gre" (click)="goBack()">キャンセル</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button class="btn width-100per btn-blue-autho" (click)="goNext()">次へ</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__postdetail_postdetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addetail_addetail__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl, geolocation, navParams, imageViewerCtrl, setPro, loadingCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.setPro = setPro;
        this.loadingCtrl = loadingCtrl;
        this.preventSimpleClick = false;
        this.loadingflag = false;
        this.locations = [];
        this.postAds = [];
        this.refresh_flag = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // try to get current position
        this.geolocation.getCurrentPosition().then(function (loc) {
            if (loc) {
                var _a = loc['coords'], latitude = _a.latitude, longitude = _a.longitude;
                _this.cur_latitude = latitude;
                _this.cur_longitude = longitude;
            }
            else {
                _this.cur_latitude = 0;
                _this.cur_longitude = 0;
            }
        }).catch(function (err) {
            _this.cur_latitude = 0;
            _this.cur_longitude = 0;
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getPostsAndAds();
    };
    HomePage.prototype.getPostsAndAds = function () {
        var _this = this;
        this.postAds = [];
        this.locations = [];
        this.center_latitude = 0;
        this.center_longitude = 0;
        this.loadingShow();
        this.storage.get('sign_id').then(function (sign_id) {
            if (sign_id) {
                _this.getLoggedUser(0, 0);
            }
            else {
                _this.getNonLoggedUser(0, 0);
            }
        }).catch(function (err) {
            _this.getNonLoggedUser(0, 0);
        });
    };
    // get Posts & Ads for non-logged in user
    HomePage.prototype.getNonLoggedUser = function (lati, long) {
        var _this = this;
        this.setPro.getAllFromNonLogged(lati, long).then(function (res) {
            if (_this.refresh_flag == true) {
                _this.refresh_flag = false;
                _this.refresher.complete();
                if (_this.postAds.length != res['post_list'].length) {
                    _this.postAds = [];
                    _this.locations = [];
                    _this.postAds = res['post_list'];
                    _this.postAds.forEach(function (item) {
                        _this.locations.push({
                            fileUrl: item.file_name,
                            long: item.long,
                            lat: item.lati,
                            id: item.id
                        });
                    });
                    _this.loadMap(lati, long);
                }
            }
            else {
                _this.postAds = [];
                _this.locations = [];
                _this.loadingHide();
                _this.postAds = res['post_list'];
                _this.postAds.forEach(function (item) {
                    _this.locations.push({
                        fileUrl: item.file_name,
                        long: item.long,
                        lat: item.lati,
                        id: item.id
                    });
                });
                _this.loadMap(lati, long);
            }
        }).catch(function (err) {
            if (_this.refresh_flag == true) {
                _this.refresh_flag = false;
                _this.refresher.complete();
            }
            else {
                _this.loadingHide();
            }
        });
    };
    // get Posts & Ads for Logged user
    HomePage.prototype.getLoggedUser = function (lati, long) {
        var _this = this;
        this.setPro.getAllFromLogged(lati, long).then(function (res) {
            if (_this.refresh_flag == true) {
                _this.refresh_flag = false;
                _this.refresher.complete();
                if (_this.postAds.length != res['list'].length) {
                    _this.postAds = [];
                    _this.locations = [];
                    _this.postAds = res['list'];
                    _this.postAds.forEach(function (item) {
                        _this.locations.push({
                            fileUrl: item.file_name,
                            long: item.long,
                            lat: item.lati,
                            id: item.id
                        });
                    });
                    _this.loadMap(lati, long);
                }
            }
            else {
                _this.postAds = [];
                _this.locations = [];
                _this.loadingHide();
                _this.postAds = res['list'];
                _this.postAds.forEach(function (item) {
                    _this.locations.push({
                        fileUrl: item.file_name,
                        long: item.long,
                        lat: item.lati,
                        id: item.id
                    });
                });
                _this.loadMap(lati, long);
            }
        }).catch(function (err) {
            if (_this.refresh_flag == true) {
                _this.refresh_flag = false;
                _this.refresher.complete();
            }
            else {
                _this.loadingHide();
            }
        });
    };
    HomePage.prototype.forGeoLocation = function () {
        var _this = this;
        this.center_latitude = this.cur_latitude;
        this.center_longitude = this.cur_longitude;
        this.loadingShow();
        this.storage.get('sign_id').then(function (sign_id) {
            if (sign_id) {
                _this.getLoggedUser(_this.cur_latitude, _this.cur_longitude);
            }
            else {
                _this.getNonLoggedUser(_this.cur_latitude, _this.cur_longitude);
            }
        }).catch(function (err) {
            _this.getNonLoggedUser(_this.cur_latitude, _this.cur_longitude);
        });
        /*
        new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            icon: 'assets/imgs/mapblue.png'
        });
        */
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // console.log("Show Data", data)
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    };
    HomePage.prototype.refreshLocation = function () {
        var _this = this;
        var c = this.map.getCenter();
        var lati = c.lat();
        var long = c.lng();
        this.center_latitude = lati;
        this.center_longitude = long;
        this.loadingShow();
        this.storage.get('sign_id').then(function (sign_id) {
            if (sign_id) {
                _this.getLoggedUser(lati, long);
            }
            else {
                _this.getNonLoggedUser(lati, long);
            }
        }).catch(function (err) {
            _this.getNonLoggedUser(lati, long);
        });
    };
    HomePage.prototype.loadMap = function (center_lati, center_long) {
        var locations = this.locations;
        var zoom_count = 10;
        // Default Center: Tokyo > 35.68950, 139.69170
        if (center_lati == 0) {
            center_lati = 35.68950;
            zoom_count = 5;
        }
        if (center_long == 0) {
            center_long = 139.69170;
            zoom_count = 5;
        }
        var mapOptions = {
            center: new google.maps.LatLng(center_lati, center_long),
            zoom: zoom_count,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            attributionControl: false,
            fullscreenControl: false
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.Map.prototype.clearMarkers = function () {
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = new Array();
        };
        var marker;
        var _loop_1 = function (i) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].long),
                map: this_1.map,
                icon: 'assets/imgs/mapblue.png'
            });
            geocoder = new google.maps.Geocoder;
            post_lati = locations[i].lat;
            post_long = locations[i].long;
            latlng = { lat: parseFloat(post_lati), lng: parseFloat(post_long) };
            file_name = locations[i].fileUrl;
            var content = "<div><img src=" + file_name + " height=\"100\" width=\"100\" /> <br/> <button id=\"element\" onclick=\"javascript:openGoogleMap(" + post_lati + ", " + post_long + ");\">この写真のMAPを表示</button></div>";
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent(content);
                    infowindow.open(this.map, marker);
                };
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
        };
        var this_1 = this, geocoder, post_lati, post_long, latlng, file_name;
        for (var i = 0; i < locations.length; i++) {
            _loop_1(i);
        }
    };
    HomePage.prototype.function = function (success) {
        console.log(success);
    };
    // Go to Post detail page
    HomePage.prototype.gotoPostDetail = function (id) {
        var _this = this;
        if (!this.preventSimpleClick) {
            this.preventSimpleClick = true;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__postdetail_postdetail__["a" /* PostDetailPage */], { post_id: id, type: 1 });
            setTimeout(function () {
                _this.preventSimpleClick = false;
            }, 1000);
        }
    };
    // Go to Ad detail page
    HomePage.prototype.gotoAdDetail = function (id) {
        var _this = this;
        if (!this.preventSimpleClick) {
            this.preventSimpleClick = true;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addetail_addetail__["a" /* AdDetailPage */], { ad_id: id });
            setTimeout(function () {
                _this.preventSimpleClick = false;
            }, 1000);
        }
    };
    // refresh function
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.refresh_flag = true;
        this.refresher = refresher;
        this.storage.get('sign_id').then(function (sign_id) {
            if (sign_id) {
                _this.getLoggedUser(_this.center_latitude, _this.center_longitude);
            }
            else {
                _this.getNonLoggedUser(_this.center_latitude, _this.center_longitude);
            }
        }).catch(function (err) {
            _this.getNonLoggedUser(_this.center_latitude, _this.center_longitude);
        });
    };
    HomePage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    HomePage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\home\home.html"*/'<!--\n  Home page\n  - 1st tab\n  - show all posts and ads on maps and grid.\n-->\n<ion-header scroll-hide [scrollContent]="pageContent">\n<!-- <ion-header> -->\n    <!--\n        <img src="https://avatars.io/instagram/pathmoretravelled" />\n        <h2>Josh</h2>\n        \n\n        <img src="assets/imgs/gps.png" class="gps-posi" (click)="forGeoLocation()" />\n        <img src="assets/imgs/refresh.png" class="refresh" (click)="refreshLocation()" />\n        <div #map id="map"></div>\n    -->\n\n    <img src="assets/imgs/gps.png" class="gps-posi" (click)="forGeoLocation()" />\n    <img src="assets/imgs/refresh.png" class="refresh" (click)="refreshLocation()" />\n    <div #map id="map"></div>\n\n    <!--\n    <shrinking-segment-header [scrollArea]="pageContent">\n        \n    </shrinking-segment-header>\n    -->\n\n    <!--\n    <ion-row>\n        <ion-col class="no-padding">\n            <img src="assets/imgs/gps.png" class="gps-posi" (click)="forGeoLocation()" />\n            <img src="assets/imgs/refresh.png" class="refresh" (click)="refreshLocation()" />\n            <div #map id="map"></div>\n        </ion-col>\n    </ion-row>\n    -->\n</ion-header>\n\n<ion-content #pageContent fullscreen>\n    \n    <ion-refresher #refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-row *ngIf="postAds.length == 0" style="height: 60%;align-items: center;">\n        <ion-col text-center>\n            データがありません。\n        </ion-col>\n    </ion-row>\n\n    <ion-grid *ngIf="postAds.length > 0">\n        <ion-row>\n            <ion-col col-6 *ngFor="let item of postAds">\n                <!-- Post Item -->\n                <ion-card *ngIf="item.type == 1" no-padding no-margin flat-card (tap)="gotoPostDetail(item.id)" style="width: 100% !important;">\n                    <ion-item class="no-padding">\n                        <ion-avatar item-start style="margin:6px 6px 6px 0px;">\n                            <img [src]="item.user_icon" />\n                        </ion-avatar>\n                        <h2 class="low-text">{{item.user_name}}</h2>\n                        <p class=" fs-10 ">\n                            {{item.reg_date}}\n                        </p>\n                    </ion-item>\n                    <img [src]="item.file_name" height="165" style="object-fit: cover;object-position: center;"/>\n                    <ion-card-content style="font-size: 1.2rem;padding: 8px 0px;">\n                        <p class="mar-top-text" style="max-height: 45px;text-overflow: ellipsis;font-size: 1.2rem;">{{item.comment}}</p>\n                    </ion-card-content>\n                </ion-card>\n\n                <!-- Ad Item -->\n                <ion-card *ngIf="item.type == 2" no-padding no-margin flat-card (tap)="gotoAdDetail(item.id)" style="width: 100% !important;">\n                    <ion-item class="no-padding">\n                        <ion-avatar item-start style="margin:6px 6px 6px 0px;">\n                            <img [src]="item.user_icon" />\n                        </ion-avatar>\n                        <h2 class="low-text">{{item.user_name}}</h2>\n                        <p class=" fs-10 ">\n                            {{item.reg_date}}\n                        </p>\n                    </ion-item>\n                    <img [src]="item.file_name" height="165" style="object-fit: cover;object-position: center;"/>\n                    <ion-card-content style="font-size: 1.2rem;padding: 8px 0px;">\n                        <p class="mar-top-text" style="max-height: 45px;text-overflow: ellipsis;font-size: 1.2rem;">{{item.comment}}</p>\n                    </ion-card-content>\n                </ion-card>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ads_ads__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__violationreport_violationreport__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdDetailPage = /** @class */ (function () {
    function AdDetailPage(navCtrl, geolocation, navParams, imageViewerCtrl, alertCtrl, launchNavigator, storage, adPro, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.storage = storage;
        this.adPro = adPro;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isLike = false;
        this.hideMe = false;
        this.comments = [];
        this.commentLength = 0;
        this.loadingflag = false;
        this.userLoggedIn = false;
        this.showCommentBox = false;
        this.adsId = this.navParams.get('ad_id');
    }
    AdDetailPage.prototype.ionViewDidLoad = function () {
        this.renderUI();
    };
    AdDetailPage.prototype.renderUI = function () {
        var _this = this;
        this.storage.get('sign_id').then(function (sign_id) {
            if (sign_id != null) {
                _this.signID = sign_id;
                _this.userLoggedIn = true;
            }
            else {
                _this.userLoggedIn = false;
            }
        }).catch(function () {
            _this.userLoggedIn = false;
        });
        this.loadingShow();
        this.adPro.getDetail(this.adsId).then(function (res) {
            _this.comments = [];
            _this.ads = res.advertise;
            var comments = res.comments;
            _this.files = res.files;
            if (comments && comments.length > 0) {
                for (var c = 0; c < comments.length; c++) {
                    if (comments[c].parent_id == "0") {
                        _this.comments.push(comments[c]);
                    }
                }
                for (var c1 = 0; c1 < comments.length; c1++) {
                    if (comments[c1].parent_id != "0") {
                        for (var ic = 0; ic < _this.comments.length; ic++) {
                            if (_this.comments[ic].id == comments[c1].parent_id) {
                                _this.comments[ic].innerComments = _this.comments[ic].innerComments || [];
                                _this.comments[ic].innerComments.push(comments[c1]);
                                _this.commentLength = _this.commentLength + 1;
                            }
                        }
                    }
                }
            }
            _this.loadingHide();
        }).catch(function () {
            _this.loadingHide();
        });
    };
    AdDetailPage.prototype.report = function (comment) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_1 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_1.present();
            return;
        }
        var alert = this.alertCtrl.create({
            title: '違反報告',
            message: 'このコメントを通報しますか？',
            buttons: [
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: '通報',
                    handler: function () {
                        if (comment) {
                            _this.reportComment(comment);
                        }
                        else {
                            _this.reportAd();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AdDetailPage.prototype.reportComment = function (comment) {
        var tosend = comment;
        if (this.userLoggedIn == false) {
            var alert_2 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_2.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__violationreport_violationreport__["a" /* ViolationReportPage */], {
            post: tosend,
            sign_id: this.signID,
            type: 4
        });
    };
    AdDetailPage.prototype.reportAd = function () {
        var tosend = this.ads;
        if (this.userLoggedIn == false) {
            var alert_3 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_3.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__violationreport_violationreport__["a" /* ViolationReportPage */], {
            post: tosend,
            sign_id: this.signID,
            type: 2
        });
    };
    AdDetailPage.prototype.function = function (success) {
        console.log(success);
    };
    AdDetailPage.prototype.likeAd = function (id) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_4 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_4.present();
            return;
        }
        this.isLike = false;
        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then(function (sign_id) {
            _this.adPro.likeAd(id, sign_id).then(function (res) {
                content = res.content;
                _this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                _this.renderUI();
            });
        });
    };
    AdDetailPage.prototype.likeComment = function (id) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_5 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_5.present();
            return;
        }
        this.isLike = false;
        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then(function (sign_id) {
            _this.adPro.likeComment(id, sign_id).then(function (res) {
                content = res.content;
                _this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                _this.renderUI();
            });
        });
    };
    AdDetailPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: '暫くお待ちください。'
        });
        this.loading.present();
    };
    AdDetailPage.prototype.replyAd = function () {
        if (this.userLoggedIn == false) {
            var alert_6 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_6.present();
            return;
        }
        this.commenttext = "";
        this.showCommentBox = true;
        this.type = "1";
        this.current_user_icon = this.ads.user_icon;
    };
    AdDetailPage.prototype.replyComment = function (id, comment) {
        if (this.userLoggedIn == false) {
            var alert_7 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_7.present();
            return;
        }
        this.commenttext = "";
        this.pcid = id;
        this.showCommentBox = true;
        this.type = "2";
        this.current_user_icon = comment.user_icon;
    };
    AdDetailPage.prototype.sendClick = function () {
        if (this.type == "1")
            this.addComment(this.commenttext);
        else
            this.addReplyComment(this.commenttext);
        this.showCommentBox = false;
    };
    AdDetailPage.prototype.cloceClick = function () {
        this.showCommentBox = false;
    };
    AdDetailPage.prototype.addComment = function (cmnt) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_8 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_8.present();
            return;
        }
        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then(function (sign_id) {
            _this.adPro.replyAd(_this.adsId, cmnt).then(function (res) {
                content = res.content;
                _this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                _this.renderUI();
            });
        });
    };
    AdDetailPage.prototype.addReplyComment = function (cmnt) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_9 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_9.present();
            return;
        }
        var content;
        this.presentLoadingDefault();
        this.storage.get('sign_id').then(function (sign_id) {
            _this.adPro.replyComment(_this.pcid, cmnt).then(function (res) {
                content = res.content;
                _this.loading.dismiss();
                /*
                let toast = this.toastCtrl.create({
                    message: content,
                    duration: 2000
                });
                toast.present();
                */
                _this.renderUI();
            });
        });
    };
    AdDetailPage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    AdDetailPage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AdDetailPage.prototype, "mapElement", void 0);
    AdDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addetail',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\addetail\addetail.html"*/'<!--\n\n  Generated template for the AdDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-slides pager class="hi-50">\n\n        <ion-slide style="padding: 0px 30px;" *ngFor="let file of files;">\n\n            <img [src]="file.file_name" height="160" imageViewer class="wid-100" />\n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n    <div class="bor-bot">\n\n        <ion-row class="wid-100">\n\n            <ion-col col-2>\n\n                <ion-avatar item-start style="margin-left: 12px;">\n\n                    <img *ngIf ="ads" [src]="ads.user_icon" class="img-avtar mar-auto" />\n\n                </ion-avatar>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <p class="fs-16" style="margin-bottom: 6px; margin-top:6px;">\n\n                    <!-- User name --> \n\n                    <span *ngIf="ads">{{ads.username}}</span>\n\n                    <!-- Date and Time --> \n\n                    <ion-note class="fs-14 pad-right float-right text-black" *ngIf="ads" style="margin-top:3px;">\n\n                        {{ads.reg_date | date :\'yyyy/MM/dd\'}}&nbsp;&nbsp;\n\n                        <span class="fs-14" *ngIf="ads">{{ads.reg_date | date :\'hh:mm\'}}</span>\n\n                    </ion-note>\n\n                </p>\n\n\n\n                <!-- Content --> \n\n                <p class="fs-12 mar-auto" *ngIf="ads">\n\n                    {{ads.content}}\n\n                </p>\n\n                <ion-row  style="width: 100%;">\n\n\n\n                    <ion-col col-3 class="no-padding">\n\n\n\n                        <!-- like --> \n\n                        <button  ion-button icon-start clear small class="no-padding text-blue" (click)="likeAd(ads.id)">\n\n                            <img *ngIf="ads && ads.like_status == \'1\'" src="assets/imgs/heart.png" class="icons-small">\n\n                            <img *ngIf="ads && ads.like_status == \'0\'" src="assets/imgs/heart-white-hi.png" class="icons-small">&nbsp;&nbsp;\n\n                            <p class="fs-12 text-blue text-trans-initial">\n\n                                いいね\n\n                                <span *ngIf="ads">{{ads.num_like}}</span>\n\n                            </p>\n\n                        </button>\n\n                        \n\n                    </ion-col>\n\n\n\n                    <ion-col col-3 class="no-padding" style="text-align:right;">\n\n                        <!-- reply --> \n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="replyAd()">\n\n                            <img src="assets/imgs/send.png" class="icons-small">&nbsp;&nbsp;\n\n                            <p class="fs-12 text-blue text-trans-initial">\n\n                                返信\n\n                                <span *ngIf="ads">{{ads.num_comment}}</span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n                    \n\n                    <ion-col col-3 class="no-padding" style="text-align:right;">\n\n                        <!-- share --> \n\n                        <button ion-button icon-start clear small class="no-padding text-blue">\n\n                            <img src="assets/imgs/share.png" class="icons-small">&nbsp;&nbsp;\n\n                            <p class="fs-12 text-blue text-trans-initial">シェア</p>\n\n                        </button>\n\n                    </ion-col>\n\n                    \n\n                    <ion-col col-3 class="no-padding flex-center " style="display:block; text-align:right;">\n\n                        <!-- report --> \n\n                        <ion-note>\n\n                            <ion-icon name="ios-close" class="fs-24 fs-w8-8" style="margin:5px 10px 0px 0px;" (click)="report(null)"></ion-icon>\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    \n\n    <!-- Parent comments -->\n\n    <div *ngFor="let cmt of comments;" class="bor-bot" >\n\n        <ion-row class="wid-100"> \n\n            <ion-col col-2>\n\n                <!-- comment user avatar-->\n\n                <ion-avatar item-start style="margin-left: 12px;">\n\n                    <img *ngIf ="cmt" [src]="cmt.file_name" class="img-avtar mar-auto" />\n\n                </ion-avatar>\n\n            </ion-col>\n\n\n\n            <ion-col col-10>\n\n                <p class="fs-16" style="margin-bottom: 6px; margin-top:6px;">\n\n                    <!-- user name --> \n\n                    <span *ngIf ="cmt">{{cmt.user_name}}</span>\n\n                    <!-- date and Time --> \n\n                    <ion-note class="fs-14 pad-right float-right text-black" *ngIf ="cmt" style="margin-top:3px;">\n\n                        {{cmt.reg_date | date :\'yyyy/MM/dd\'}}&nbsp;&nbsp;\n\n                        <span class="fs-14" *ngIf ="cmt">{{cmt.reg_date | date :\'hh:mm\'}}</span>\n\n                    </ion-note>\n\n                </p>\n\n                <!-- content --> \n\n                <p class="fs-12 mar-auto" *ngIf ="cmt">\n\n                    {{cmt.content}}\n\n                </p>\n\n    \n\n                <ion-row style="width: 100%;">\n\n                    <ion-col col-3 class="no-padding">\n\n                        <!-- like --> \n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="likeComment(cmt.id)">\n\n                            <img *ngIf="cmt && cmt.like_status == \'1\'" src="assets/imgs/heart.png" class="icons-small">\n\n                            <img *ngIf="cmt && cmt.like_status == \'0\'" src="assets/imgs/heart-white-hi.png" class="icons-small">&nbsp;&nbsp;\n\n                            <p class="fs-12 text-blue text-trans-initial">\n\n                                いいね \n\n                                <span *ngIf="cmt">{{cmt.num_like}}</span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n\n\n                    <ion-col col-3 class="no-padding">\n\n                        <!-- reply --> \n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="replyComment(cmt.id,cmt)">\n\n                            <img src="assets/imgs/send.png" class="icons-small">&nbsp;&nbsp;\n\n                            <p class="fs-12 text-blue text-trans-initial" >\n\n                                返信\n\n                                <span *ngIf="cmt">{{cmt.num_reply}} </span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n                    \n\n                    <ion-col col-3 class="no-padding">\n\n                    </ion-col>\n\n\n\n                    <ion-col col-3 class="no-padding flex-center ">\n\n                        <!-- report -->\n\n                        <ion-note>\n\n                            <ion-icon name="ios-close" class="fs-24 fs-w8-8" (click)="report(cmt)"></ion-icon>\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n  \n\n   \n\n        <!-- Child comments -->\n\n        <div padding *ngIf ="cmt && cmt.innerComments && cmt.innerComments.length > 0">\n\n            <ion-row *ngFor="let icmt of cmt.innerComments;"> \n\n                <ion-col col-2>\n\n                    <!-- comment user avatar -->\n\n                    <ion-avatar item-start class="mar-06">\n\n                        <img *ngIf="icmt" [src]="icmt.file_name" class="img-avtar mar-auto" />\n\n                    </ion-avatar>\n\n                </ion-col>\n\n\n\n                <ion-col col-10>\n\n                    \n\n                    <p class="fs-16" style="margin-bottom: 6px;">\n\n                        <!-- comment user name -->\n\n                        <span *ngIf ="icmt">{{icmt.user_name}}</span>\n\n                        <!-- date and time -->\n\n                        <ion-note class="fs-14 pad-right float-right text-black">{{icmt.reg_date | date :\'yyyy/MM/dd\'}}&nbsp;&nbsp;\n\n                            <span class="fs-14" *ngIf ="icmt">{{icmt.reg_date | date :\'hh:mm\'}}</span>\n\n                        </ion-note>\n\n                    </p>\n\n\n\n                    <!-- content --> \n\n                    <p class="fs-12 mar-auto">\n\n                        {{icmt.content}}\n\n                    </p>\n\n\n\n                    <ion-row style="width: 100%;">\n\n                        <ion-col col-4 class="no-padding">\n\n                            <!-- like --> \n\n                            <button  ion-button icon-start clear small class="no-padding text-blue" (click)="likeComment(icmt.id)">\n\n                                <img *ngIf="icmt && icmt.like_status == \'1\'" src="assets/imgs/heart.png" class="icons-small">\n\n                                <img *ngIf="icmt && icmt.like_status == \'0\'" src="assets/imgs/heart-white-hi.png" class="icons-small">&nbsp;&nbsp;\n\n                                <p class="fs-12 text-blue text-trans-initial">\n\n                                    いいね\n\n                                    <span>{{icmt.num_like}}</span>\n\n                                </p>\n\n                            </button>\n\n                        </ion-col>\n\n\n\n                        <ion-col col-4 class="no-padding">\n\n                            <!-- reply --> \n\n                            <button ion-button icon-start clear small class="no-padding text-blue" (click)="replyComment(icmt.id,icmt)">\n\n                                <img src="assets/imgs/send.png" class="icons-small">&nbsp;&nbsp;\n\n                                <p class="fs-12 text-blue text-trans-initial" >\n\n                                    返信\n\n                                    <span *ngIf="icmt">{{icmt.num_reply}}</span>\n\n                                </p>\n\n                            </button>\n\n                        </ion-col>\n\n                    \n\n                        <ion-col col-4 class="no-padding flex-center ">\n\n                            <!-- report -->\n\n                            <ion-note>\n\n                                <ion-icon name="ios-close" class="fs-24 fs-w8-8" (click)="report(icmt)"></ion-icon>\n\n                            </ion-note>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n  \n\n    <br />\n\n    <br />\n\n  \n\n    <!-- comment dialog -->\n\n    <ion-grid style="background-color: #9ba0b8 !important;position:fixed;bottom: 56px;left:0;" *ngIf="showCommentBox">\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <img style="width:50px;height: 50px;" *ngIf ="current_user_icon" [src]="current_user_icon" class="img-avtar mar-auto" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-textarea placeholder="Enter a description" style="background: white;border-radius: 6px;padding: 20px;" [(ngModel)]="commenttext" ></ion-textarea>\n\n            </ion-col>\n\n            <ion-col col-2 style="text-align: center;">\n\n                <ion-icon name="close-circle"  style="font-size: 36px;color: #3a51b2 !important;margin-top: 10px;" (click)="cloceClick()"></ion-icon>\n\n                <ion-icon name="send"  style="font-size: 40px; color: #3a51b2 !important;margin-top: 10px;" (click)="sendClick()"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\addetail\addetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ads_ads__["a" /* AdsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], AdDetailPage);
    return AdDetailPage;
}());

//# sourceMappingURL=addetail.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postdetail_postdetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_posts_posts__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPostPage = /** @class */ (function () {
    function MyPostPage(navCtrl, navParams, postPro, setPro, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postPro = postPro;
        this.setPro = setPro;
        this.loadingCtrl = loadingCtrl;
        this.imageurl = [
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
        this.selected_tab = "getall";
        this.posts = [];
        this.sort = false;
        this.user = {};
        this.keyword = '';
        this.categories = [];
        this.postsbycat = [];
        this.currentCatId = 1;
        this.currentCatName = '';
        this.category_selected = false;
        this.loadingflag = false;
    }
    MyPostPage.prototype.ionViewDidLoad = function () {
        this.user.user_icon = 'assets/imgs/userse.png';
        this.getAccount();
    };
    MyPostPage.prototype.getAccount = function () {
        var _this = this;
        this.setPro.getAccount().then(function (res) {
            _this.user = res['account'];
            if (!_this.user.user_icon || _this.user.user_icon == '') {
                _this.user.user_icon = 'assets/imgs/userse.png';
            }
        });
    };
    MyPostPage.prototype.ionViewWillEnter = function () {
        var _this = this;
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
        this.postPro.getAll().then(function (res) {
            _this.posts = res['post_list'];
            _this.postPro.getPostCat().then(function (res) {
                _this.categories = res['category_list'];
                console.log(_this.categories);
                _this.loadingHide();
            });
        });
    };
    MyPostPage.prototype.gotoPost = function (post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__postdetail_postdetail__["a" /* PostDetailPage */], { post_id: post.id, type: 2 });
    };
    MyPostPage.prototype.categorySegmentClicked = function (ev) {
        this.category_selected = false;
    };
    MyPostPage.prototype.backCat = function () {
        this.category_selected = false;
    };
    MyPostPage.prototype.selectCat = function (catid, catname) {
        var _this = this;
        this.postsbycat = [];
        this.currentCatId = catid;
        this.currentCatName = catname;
        this.postPro.getPostsByCat(catid).then(function (res) {
            _this.postsbycat = res['post_list'];
        });
        this.category_selected = true;
    };
    MyPostPage.prototype.sortDown = function () {
        this.loadingShow();
        this.sort = true;
        this.posts.sort(function (a, b) { return a.reg_date > b.reg_date ? -1 : 1; });
        this.content.resize();
        this.loadingHide();
    };
    MyPostPage.prototype.sortUp = function () {
        this.loadingShow();
        this.sort = false;
        this.posts.sort(function (a, b) { return a.reg_date < b.reg_date ? -1 : 1; });
        this.content.resize();
        this.loadingHide();
    };
    MyPostPage.prototype.searchPosts = function (ev) {
        var _this = this;
        this.loadingShow();
        this.postPro.getAll().then(function (data) {
            console.log(data);
            _this.posts = data['post_list'];
            var val = _this.keyword;
            if (val && val.trim() != '') {
                _this.posts = _this.posts.filter(function (item) {
                    return (item.comment.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            _this.loadingHide();
        });
    };
    MyPostPage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    MyPostPage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], MyPostPage.prototype, "content", void 0);
    MyPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypost',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\mypost\mypost.html"*/'<!--\n    MyPostPage\n-->\n<ion-header>\n    <ion-navbar>\n        <!--  \n            <ion-searchbar placeholder="検索" (ionInput)="search($event)"> </ion-searchbar>\n        -->\n        <ion-searchbar [(ngModel)]="keyword" (search)="searchPosts($event)" placeholder="検索"> </ion-searchbar>\n    </ion-navbar>\n\n    <ion-row>\n        <ion-col col-8>\n            <ion-item class="no-padding no-border">\n                <ion-avatar item-start class="mar-06">\n                    <img [src]="user.user_icon" />\n                </ion-avatar>\n                <h3>\n                    <b>投稿した写真一覧</b>\n                </h3>\n            </ion-item>\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <button class=" btn-set text-white wid-100 bg-bluee no-border" *ngIf="!sort" (click)="sortDown()">\n                投稿日 &nbsp;\n                <ion-icon name="ios-arrow-down-outline" ></ion-icon>\n            </button>\n\n            <button class=" btn-set text-white wid-100 bg-bluee no-border" *ngIf="sort" (click)="sortUp()">\n                投稿日 &nbsp;\n                <ion-icon name="ios-arrow-up-outline" ></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n\n    <div>\n        <ion-segment [(ngModel)]="selected_tab" class="bg-none">\n            <!-- Saved photos -->\n            <ion-segment-button value="getall" (ionSelect)="categorySegmentClicked($event)">\n                <span class="text-trans-initial fs-16">保存した写真</span>\n            </ion-segment-button>\n\n            <!-- By category -->\n            <ion-segment-button value="getbycat" (ionSelect)="categorySegmentClicked($event)">\n                <span class="text-trans-initial fs-16">カテゴリー別</span>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n    \n    <div [ngSwitch]="selected_tab" style="padding-top:12px;">\n\n        <!-- Show all posts -->\n        <ion-list *ngSwitchCase="\'getall\'">\n            <ion-row style="padding: 4px;">\n                <ion-col col-4 *ngFor="let post of posts" style="padding:4px !important;">\n                    <img [src]="post.raw_file_name" onError="this.src=\'assets/imgs/post_placeholder.jpg\';" class="fav-image" (click)="gotoPost(post)" />\n                    <div class="icon-list">\n                        <img src="assets/imgs/lock.png" *ngIf="post.share == 1" class="icon-lock">\n                        <img src="assets/imgs/facebook_logo.png" *ngIf="post.publish == 1 || post.publish == 4 || post.publish == 5 || post.publish == 7" class="icon-social">\n                        <img src="assets/imgs/instagram_logo.png" *ngIf="post.publish == 3 || post.publish == 5 || post.publish == 6 || post.publish == 7" class="icon-social">\n                        <img src="assets/imgs/twitter_logo.png" *ngIf="post.publish == 2 || post.publish == 4 || post.publish == 6 || post.publish == 7" class="icon-social">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'getbycat\'">\n            <!-- Show all categories -->\n            <div *ngIf="!category_selected">\n                <ion-row style="padding: 4px;">\n                    <ion-col col-4 class="flex-center" *ngFor="let cat of categories; let i = index" style="padding:4px !important;">\n                        <img *ngIf="cat.del_flag==0" [src]="imageurl[cat.id-1]" class="image-ti" (click)="selectCat(cat.id, cat.category_name)" />\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <!-- Show posts by category -->\n            <div *ngIf="category_selected">\n                <ion-row style="padding: 4px;">\n                    <ion-col col-4 class="flex-center" style="padding:4px !important;">\n                        <img [src]="imageurl[currentCatId-1]" class="image-ti" (click)="backCat()" />\n                    </ion-col>\n                    <ion-col col-8>\n                        <h5 class="mar-auto lh-100">{{currentCatName}}</h5>\n                    </ion-col>\n                </ion-row>\n                <ion-row  style="padding: 4px;">\n                    <ion-col col-4 *ngFor="let post of postsbycat;" style="padding:4px !important;">\n                        <img [src]="post.raw_file_name" onError="this.src=\'assets/imgs/post_placeholder.jpg\';" class="fav-image" (click)="gotoPost(post)" />\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-list>\n\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\mypost\mypost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], MyPostPage);
    return MyPostPage;
}());

//# sourceMappingURL=mypost.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_posts_posts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comment_modal_comment_modal__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













function decode64(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    //  remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        // alert("There were invalid base64 characters in the input text.\n" +
        //       "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
        //       "Expect errors in decoding.");
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    console.log(input);
    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return unescape(output);
}
function get_exif_data(image_result) {
    var d = image_result.split(",");
    // var data = image_result.replace("data:image/jpeg;base64,", "");
    var data = d[1];
    console.log(d);
    var decoded_data = decode64(data);
    var getLongAt = function (iOffset, bBigEndian) {
        var iByte1 = decoded_data.charCodeAt(iOffset), iByte2 = decoded_data.charCodeAt(iOffset + 1), iByte3 = decoded_data.charCodeAt(iOffset + 2), iByte4 = decoded_data.charCodeAt(iOffset + 3);
        var iLong = bBigEndian ?
            (((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4 :
            (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
        if (iLong < 0)
            iLong += 4294967296;
        return iLong;
    };
    var getSLongAt = function (iOffset, bBigEndian) {
        var iULong = getLongAt(iOffset, bBigEndian);
        if (iULong > 2147483647)
            return iULong - 4294967296;
        else
            return iULong;
    };
    var result = findEXIFinJPEG({
        getByteAt: function (idx) { return decoded_data.charCodeAt(idx); },
        getLength: function () { return decoded_data.length; },
        getShortAt: function (iOffset, bBigEndian) {
            var iShort = bBigEndian ?
                (decoded_data.charCodeAt(iOffset) << 8) + decoded_data.charCodeAt(iOffset + 1) :
                (decoded_data.charCodeAt(iOffset + 1) << 8) + decoded_data.charCodeAt(iOffset);
            if (iShort < 0)
                iShort += 65536;
            return iShort;
        },
        getStringAt: function (a, b) { return decoded_data.substring(a, a + b); },
        getLongAt: getLongAt,
        getSLongAt: getSLongAt
    });
    console.log("result", result);
    return result;
}
var PostNewPage = /** @class */ (function () {
    function PostNewPage(navCtrl, navParams, alertCtrl, actionSheetCtrl, camera, regPro, postPro, storage, geo, nativeGeocoder, socialSharing, setPro, base64, loadingCtrl, _DomSanitizationService, geolocation, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.regPro = regPro;
        this.postPro = postPro;
        this.storage = storage;
        this.geo = geo;
        this.nativeGeocoder = nativeGeocoder;
        this.socialSharing = socialSharing;
        this.setPro = setPro;
        this.base64 = base64;
        this.loadingCtrl = loadingCtrl;
        this._DomSanitizationService = _DomSanitizationService;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        // User
        this.user = {};
        // show map view
        this.mapShow = false;
        // social sharing
        this.facebookac = false;
        this.twitterac = false;
        this.instagramac = false;
        // categories and cities from server
        this.categories = [];
        this.cities = [];
        this.showCommentBox = false;
    }
    PostNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.facebookac = false;
        this.twitterac = false;
        this.instagramac = false;
        this.regPro.getCategory().then(function (data) { return _this.categories = data['category_list']; });
        this.regPro.getCity().then(function (data) { return _this.cities = data['city_list']; });
        this.storage.get('sign_id').then(function (d) { return _this.sign_id = d; });
        this.share = 0;
        this.getAccount();
        var options = {
            timeout: 50000,
            maximumAge: 0
        };
        this.comment = "";
        this.photo = "";
        this.category = 0;
        this.geo.getCurrentPosition(options).then(function (position) {
            var coords = position['coords'];
            _this.lat = coords.latitude;
            _this.long = coords.longitude;
            var options = {
                useLocale: true,
                maxResults: 5
            };
            _this.nativeGeocoder.reverseGeocode(_this.lat, _this.long, options).then(function (result) {
                _this.mylocation = result[0];
                // this.loadMap([{lat:35.68950,long:139.69170}]);
                if (_this.mylocation) {
                    _this.city = _this.mylocation.locality;
                    _this.zip = _this.mylocation.postalCode;
                    _this.state = _this.mylocation.administrativeArea;
                    _this.district = _this.mylocation.subAministrativeArea;
                    _this.country = _this.mylocation.countryName;
                    _this.streetAddress = _this.mylocation.subLocality + "," + _this.mylocation.thoroughfare;
                }
            }).catch(function (error) {
                // console.log("error in nativeGeocoder" + error)
            });
        }).catch(function (error) {
            _this.lat = 28.716304;
            _this.long = 77.103210;
        });
    };
    PostNewPage.prototype.getAccount = function () {
        var _this = this;
        this.loadingShow();
        this.setPro.getAccount().then(function (res) {
            _this.user = res['account'];
            if (!_this.user.user_icon || _this.user.user_icon == '') {
                _this.user.user_icon = 'assets/imgs/userse.png';
            }
            _this.current_user_icon = _this.user.user_icon;
            _this.loadingHide();
        });
    };
    PostNewPage.prototype.OpenCamera = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'プロフィール写真を選択',
            buttons: [
                {
                    text: 'カメラを起動',
                    role: 'destructive',
                    handler: function () {
                        _this.fetchPhoto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: function () {
                        _this.fetchPhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PostNewPage.prototype.fetchPhoto = function (srcType) {
        var _this = this;
        var options = {
            // quality: 100,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE,
            sourceType: srcType,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            var data = unescape(imageData);
            var n = data.indexOf("content://");
            // console.log(n);
            if (n > -1) {
                alert("このファイル形式は使用することが出来ません。");
                return;
            }
            _this.photo = imageData;
            // console.log(this.photo);
            var filePath = imageData;
            _this.base64.encodeFile(filePath).then(function (base64File) {
                _this.photo = base64File;
                var exif_data = get_exif_data(base64File);
                // for(var idx in exif_data){
                //     console.log(idx, JSON.stringify(exif_data[idx]));
                // }
                var lat = _this.convertDegToDec(exif_data['GPSLatitude']);
                var long = _this.convertDegToDec(exif_data['GPSLongitude']);
                // console.log(lat,long);
                if (lat && long) {
                    _this.mapShow = true;
                    var options_1 = {
                        useLocale: true,
                        maxResults: 5
                    };
                    _this.nativeGeocoder.reverseGeocode(lat, long, options_1).then(function (result) {
                        var loc = result[0];
                        var add = "";
                        if (loc.subLocality)
                            add = add + loc.subLocality;
                        if (loc.thoroughfare)
                            add = add + " " + loc.thoroughfare;
                        if (loc.locality)
                            add = add + " " + loc.locality;
                        if (loc.administrativeArea)
                            add = add + " " + loc.administrativeArea;
                        if (loc.countryName)
                            add = add + " " + loc.countryName;
                        if (loc.postalCode)
                            add = add + " " + loc.postalCode;
                        _this.photoLocation = add;
                        _this.loadMap([{ lat: lat, long: long, address: add }]);
                    });
                }
                else {
                    _this.mapShow = false;
                }
            }, function (err) {
                console.log("error", err);
            });
        }, function (err) {
            // Handle error
            console.log("error", err);
        });
    };
    PostNewPage.prototype.loadMap = function (loactions) {
        var locations = loactions;
        var mapOptions = {
            center: new google.maps.LatLng(locations[0].lat || 35.68950, locations[0].long || 139.69170),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            attributionControl: false,
        };
        // var infowindow = new google.maps.InfoWindow();
        // var content = "<div ><img src='assets/imgs/selectcat.png'></div>";
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // var infowindow = new google.maps.InfoWindow({
        //     content: '<img src="'+this.photo+'" style="width:40px; height: 40px;"/>'
        // });
        var marker;
        for (var i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].long),
                map: this.map,
                icon: 'assets/imgs/mapblue.png'
            });
            // infowindow.open(this.map, marker);
            /*
            google.maps.event.addListener(marker, 'click', ((marker, i) => {
                return () => {
                    // infowindow.setContent(content);
                    var icon = {url:this.photo, scaledSize: new google.maps.Size(40, 40) };
                    marker.setIcon(icon);
                }
            })(marker, i));
            */
        }
    };
    PostNewPage.prototype.convertDegToDec = function (arr) {
        console.log(arr);
        return arr[0] + (arr[1] / 60) + (arr[2] / 3600);
    };
    ;
    PostNewPage.prototype.loaded = function (e) {
    };
    PostNewPage.prototype.deletePhoto = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'この写真を削除しますか？',
            message: '',
            buttons: [
                {
                    text: 'いいえ',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'はい',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.photo = '';
                    }
                }
            ]
        });
        confirm.present();
    };
    PostNewPage.prototype.openModal = function () {
        var _this = this;
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__comment_modal_comment_modal__["a" /* CommentModalPage */], { comment: this.comment });
        modalPage.onDidDismiss(function (data) {
            if (data && data['comment'] && data['comment'].length) {
                _this.comment = data['comment'];
            }
        });
        modalPage.present();
    };
    PostNewPage.prototype.showDialog = function () {
        this.showCommentBox = true;
        this.commenttext = this.comment;
    };
    PostNewPage.prototype.sendClick = function () {
        this.comment = this.commenttext;
        this.showCommentBox = false;
    };
    PostNewPage.prototype.cloceClick = function () {
        this.showCommentBox = false;
    };
    PostNewPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'この内容で投稿しますか？',
            buttons: [
                {
                    text: 'いいえ',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'はい',
                    role: 'submit',
                    handler: function () {
                        var publish;
                        if (!_this.facebookac && !_this.twitterac && !_this.instagramac) {
                            publish = 0;
                        }
                        else if (_this.facebookac && !_this.twitterac && !_this.instagramac) {
                            publish = 1;
                            _this.shareViaFacebook();
                        }
                        else if (!_this.facebookac && _this.twitterac && !_this.instagramac) {
                            publish = 2;
                            _this.shareViaTwitter();
                        }
                        else if (!_this.facebookac && !_this.twitterac && _this.instagramac) {
                            publish = 3;
                            _this.shareViaInstagram();
                        }
                        else if (_this.facebookac && _this.twitterac && !_this.instagramac) {
                            publish = 4;
                            _this.shareViaTwitter();
                            _this.shareViaFacebook();
                        }
                        else if (_this.facebookac && !_this.twitterac && _this.instagramac) {
                            publish = 5;
                            _this.shareViaInstagram();
                            _this.shareViaFacebook();
                        }
                        else if (!_this.facebookac && _this.twitterac && _this.instagramac) {
                            publish = 6;
                            _this.shareViaInstagram();
                            _this.shareViaTwitter();
                        }
                        else if (_this.facebookac && _this.twitterac && _this.instagramac) {
                            publish = 7;
                            _this.shareViaInstagram();
                            _this.shareViaTwitter();
                            _this.shareViaFacebook();
                        }
                        var postData = {
                            long: _this.long,
                            lati: _this.lat,
                            sign_id: _this.sign_id,
                            city: _this.city,
                            comment: _this.comment,
                            file_name: _this.photo,
                            publish: publish,
                            category: _this.category,
                            share: _this.share
                        };
                        _this.loadingShow();
                        _this.postPro.create(postData).then(function (result) {
                            _this.loadingHide();
                            var confirm = _this.alertCtrl.create({
                                subTitle: '投稿が完了致しました。',
                                buttons: [
                                    {
                                        text: '続けて投稿する',
                                        handler: function () {
                                            _this.comment = "";
                                            _this.photo = "";
                                            _this.category = 0;
                                            _this.mapShow = false;
                                            _this.photoLocation = "";
                                            _this.facebookac = false;
                                            _this.twitterac = false;
                                            _this.instagramac = false;
                                        }
                                    }, {
                                        text: 'HOMEに戻る',
                                        handler: function () {
                                            var t = _this.navCtrl.parent;
                                            t.select(0);
                                        }
                                    }
                                ]
                            });
                            confirm.present();
                        }).catch(function (err) {
                            _this.loadingHide();
                            if (err.error && err.error.content)
                                console.log(err.error.content);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PostNewPage.prototype.shareViaFacebook = function () {
        this.socialSharing.shareViaFacebook(this.comment, this.photo, null)
            .then(function (data) {
            console.log('Shared via Facebook');
        })
            .catch(function (err) {
            alert("Facebookと共有することが出来ませんでした。\n " + JSON.stringify(err));
        });
    };
    PostNewPage.prototype.shareViaInstagram = function () {
        this.socialSharing.shareViaInstagram(this.comment, this.photo)
            .then(function (data) {
            console.log('Shared via shareViaInstagram');
        })
            .catch(function (err) {
            alert("Instagramと共有することが出来ませんでした。\n " + JSON.stringify(err));
        });
    };
    PostNewPage.prototype.shareViaTwitter = function () {
        this.socialSharing.shareViaTwitter(this.comment, this.photo, null).then(function (data) {
            console.log('Shared via Twitter');
        }).catch(function (err) {
            alert("Twitterと共有することが出来ませんでした。\n " + JSON.stringify(err));
        });
    };
    PostNewPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'しばらくお待ちください。'
        });
        this.load.present();
    };
    PostNewPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], PostNewPage.prototype, "mapElement", void 0);
    PostNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-postnew',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\postnew\postnew.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            新規投稿\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row padding>\n        <ion-col col-4 style="position: relative;">\n            <img [src]="_DomSanitizationService.bypassSecurityTrustUrl(photo ? photo : \'assets/imgs/camera.png\')" (click)="OpenCamera()" class="wid-100" name="files" id="files" (load)="loaded($event)"/>\n            <ion-icon name="ios-close-circle" (click)="deletePhoto()" style="position: absolute;right: 14px;top: 14px;"></ion-icon>\n        </ion-col>\n        <ion-col col-8>\n            <!--\n            <ion-textarea [(ngModel)]="comment" placeholder="コメント" [readonly]="true" (click)="openModal()" class="wid-100 hi-100 no-border">\n            </ion-textarea>\n            -->\n            \n            <p class="mar-auto fs-12" *ngIf="comment == \'\'" (click)="openModal()" style="color:grey">コメント</p>\n            <p class="mar-auto fs-12" *ngIf="comment !== \'\'" (click)="openModal()">{{ comment }}</p>\n        </ion-col>\n    </ion-row>\n\n    <ion-grid *ngIf="mapShow">\n        位置\n    </ion-grid>\n\n    <ion-grid no-padding *ngIf="mapShow" >\n        <div #map id="map" style="height:200px"></div>\n        <div #content id="content"></div>\n    </ion-grid>\n\n    <ion-grid *ngIf="mapShow">\n        {{photoLocation ? photoLocation : \'\'}}\n    </ion-grid>\n    \n    <!-- Category Selection -->\n    <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6>カテゴリー選択</h6>\n        <ion-row class="selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select class="select-label wid-100" [(ngModel)]="category" okText="はい" cancelText="いいえ">\n                    <ion-option *ngFor="let cat of categories" [value]="cat.id" [disabled]="cat.del_flag">{{cat.category_name}}</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <!--\n    <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6> // 都市 </h6>\n        <ion-row class=" selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select class="select-label wid-100 " palceholder="City" [(ngModel)]="city">\n                    <ion-option *ngFor="let c of cities" [value]="c.id">{{c.city_name}}</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    -->\n\n    <!-- Sharing scope -->\n    <ion-list class="mar-auto bor-top bor-bot" padding>\n        <h6>公開範囲</h6>\n        <ion-row class=" selct-border">\n            <ion-col col-10 class="flex-center no-padding">\n                <ion-select [(ngModel)]="share" class="select-label wid-100" okText="はい" cancelText="いいえ">\n                    <ion-option value="0" >公開</ion-option>\n                    <ion-option value="1" [selected]="true">非公開</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2 class="flex-center">\n                <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    <br>\n\n    <!-- Facebook -->\n    <ion-row>\n        <ion-col col-5 class="flex-center">\n            <img src="assets/imgs/facebook_logo.png" height="25" />\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <h6 class="fs-14">{{user?.username}}</h6>\n        </ion-col>\n        <ion-col col-3 class="flex-center">\n            <ion-toggle [(ngModel)]="facebookac" ></ion-toggle>\n        </ion-col>\n    </ion-row>\n\n    <!-- Twitter -->\n    <ion-row>\n        <ion-col col-5 class="flex-center">\n            <img src="assets/imgs/twitter_logo.png" height="25" />\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <h6 class="fs-14">{{user?.username}}</h6>\n        </ion-col>\n        <ion-col col-3 class="flex-center">\n            <ion-toggle [(ngModel)]="twitterac" ></ion-toggle>\n        </ion-col>\n    </ion-row>\n\n    <!-- Instagram -->\n    <ion-row>\n        <ion-col col-5 class="flex-center">\n            <img src="assets/imgs/instagram_logo.png" height="25" />\n        </ion-col>\n        <ion-col col-4 class="flex-center">\n            <h6 class="fs-14">{{user?.username}}</h6>\n        </ion-col>\n        <ion-col col-3 class="flex-center">\n            <ion-toggle [(ngModel)]="instagramac" ></ion-toggle>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col class="col" text-center>\n            <button [disabled]="!category || !comment || !photo" outline clear class="btn-blueq"\n                padding (click)="presentAlert()" style="padding: 18px 30px !important;font-size: 14px;">\n                投稿する\n            </button>\n        </ion-col>\n    </ion-row>\n\n    <br>\n    <br>\n    \n    <!-- comment dialog -->\n    <ion-grid class="comment_dialog" *ngIf="showCommentBox">\n        <ion-row>\n            <ion-col col-2>\n                <img style="width:42px;height:42px;" [src]="current_user_icon" class="img-avtar mar-auto" />\n            </ion-col>\n\n            <ion-col col-8>\n                <ion-textarea placeholder="Enter a description" style="background: white;border-radius: 6px;height: 100%;padding: 6px;" [(ngModel)]="commenttext" >\n                </ion-textarea>\n            </ion-col>\n\n            <ion-col col-2 style="text-align: center;">\n                <ion-icon name="close-circle" style="font-size: 36px;color: #3a51b2 !important;margin-top: 10px;" (click)="cloceClick()"></ion-icon>\n                <ion-icon name="send" style="font-size: 40px;color: #3a51b2 !important;margin-top: 10px;" (click)="sendClick()"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\postnew\postnew.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ModalController */]])
    ], PostNewPage);
    return PostNewPage;
}());

//# sourceMappingURL=postnew.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postdetail_postdetail__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritePage = /** @class */ (function () {
    function FavoritePage(navCtrl, navParams, loadingCtrl, postPro, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.postPro = postPro;
        this.storage = storage;
        this.imageurl = [
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
        this.selected_tab = "getall";
        this.posts = [];
        this.categories = [];
        this.postsbycat = [];
        this.currentCatId = 1;
        this.currentCatName = '';
        this.category_selected = false;
        this.loadingflag = false;
    }
    FavoritePage.prototype.ionViewDidLoad = function () {
    };
    FavoritePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingShow();
        this.postPro.getFavourite().then(function (res) {
            _this.posts = res['post_list'];
            _this.postPro.getFavouriteCat().then(function (res) {
                _this.categories = res['category_list'];
                _this.loadingHide();
            });
        });
    };
    FavoritePage.prototype.goPost = function (post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__postdetail_postdetail__["a" /* PostDetailPage */], { post_id: post.id, type: 1 });
    };
    FavoritePage.prototype.categorySegmentClicked = function (ev) {
        this.category_selected = false;
    };
    FavoritePage.prototype.backAllCat = function () {
        this.category_selected = false;
    };
    FavoritePage.prototype.selectCat = function (catid, catname) {
        var _this = this;
        this.postsbycat = [];
        this.currentCatId = catid;
        this.currentCatName = catname;
        this.postPro.getFavouritePostsByCat(catid).then(function (res) {
            _this.postsbycat = res['post_list'];
        });
        this.category_selected = true;
    };
    FavoritePage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    FavoritePage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    FavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\favorite\favorite.html"*/'<!--\n  Generated template for the FavoritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <!-- Favorite -->\n        <!--\n        <button ion-button clear icon-only *ngIf="category_selected" (click)="backAllCat()" style="z-index: 100">\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n        -->\n        <ion-title>お気に入り</ion-title>\n    </ion-navbar>\n\n    <div>\n        <ion-segment [(ngModel)]="selected_tab" class="bg-none">\n            <!-- Saved photos -->\n            <ion-segment-button value="getall" (ionSelect)="categorySegmentClicked($event)">\n                <span class="text-trans-initial fs-16">保存した写真</span>\n            </ion-segment-button>\n\n            <!-- By category -->\n            <ion-segment-button value="getbycat" (ionSelect)="categorySegmentClicked($event)">\n                <span class="text-trans-initial fs-16">カテゴリ別</span>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n\n    <div [ngSwitch]="selected_tab" style="padding-top:12px;">\n        <!-- Show all posts -->\n        <ion-list *ngSwitchCase="\'getall\'">\n            <ion-row style="padding: 4px;">\n                <ion-col col-4 *ngFor="let post of posts" style="padding:4px !important;">\n                    <img [src]="post.raw_file_name" onError="this.src=\'assets/imgs/post_placeholder.jpg\';" class="fav-image" (click)="goPost(post)" />\n                </ion-col>\n            </ion-row>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'getbycat\'">\n            <!-- Show all categories -->\n            <div *ngIf="!category_selected">\n                <ion-row style="padding: 4px;">\n                    <ion-col col-4 class="flex-center" *ngFor="let cat of categories; let i = index" style="padding:4px !important;">\n                        <img *ngIf="cat.del_flag==0" [src]="imageurl[cat.id-1]" class="image-ti" (click)="selectCat(cat.id, cat.category_name)" />\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <!-- Show posts by category -->\n            <div *ngIf="category_selected">\n                <ion-row style="padding: 4px;">\n                    <ion-col col-4 class="flex-center" style="padding:4px !important;">\n                        <img [src]="imageurl[currentCatId-1]" class="image-ti" (click)="backAllCat()" />\n                    </ion-col>\n                    <ion-col col-8>\n                        <h5 class="mar-auto lh-100">{{currentCatName}}</h5>\n                    </ion-col>\n                </ion-row>\n                <ion-row  style="padding: 4px;">\n                    <ion-col col-4 *ngFor="let post of postsbycat;" style="padding:4px !important;">\n                        <img [src]="post.raw_file_name" onError="this.src=\'assets/imgs/post_placeholder.jpg\';" class="fav-image" (click)="goPost(post)" />\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\favorite\favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], FavoritePage);
    return FavoritePage;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailnewpass_emailnewpass__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EmailForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailForgotPage = /** @class */ (function () {
    function EmailForgotPage(navCtrl, navParams, alertCtrl, register, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.register = register;
        this.loadingCtrl = loadingCtrl;
    }
    EmailForgotPage.prototype.ionViewDidLoad = function () {
    };
    EmailForgotPage.prototype.confirmEmail = function () {
        var _this = this;
        this.loadingShow();
        this.register.forgot(this.email).then(function (res) {
            _this.loadingHide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__emailnewpass_emailnewpass__["a" /* EmailNewPassPage */], { email: _this.email });
        }).catch(function (err) {
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                subTitle: 'このメールアドレスは登録されておりません。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert.present();
            return;
        });
    };
    EmailForgotPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EmailForgotPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'お待ちください。。。'
        });
        this.load.present();
    };
    EmailForgotPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    EmailForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emailforgot',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\emailforgot\emailforgot.html"*/'<!--\n  Generated template for the EmailForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class="app_color">\n    <div class="flex-center hi-100">\n        <div class="marg-top">\n            <div class="">\n                <h4 class="text-center">パスワードの再発行</h4>\n            </div>\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">メールアドレスを入力して下さい</p>\n                <input [(ngModel)]="email" type="text" class="inp-box" />\n            </div>\n            <div class="marg-top text-center">\n                <button class="btn width-80 btn-blue-autho fs-16" (click)="confirmEmail()">認証コードを発行</button>\n            </div>\n            <div class="text-center margi-10">\n                <button class="btn width-80 bg-gre fs-16" (click)="goBack()">キャンセル</button>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\emailforgot\emailforgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], EmailForgotPage);
    return EmailForgotPage;
}());

//# sourceMappingURL=emailforgot.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailNewPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emaillogin_emaillogin__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EmailNewPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailNewPassPage = /** @class */ (function () {
    function EmailNewPassPage(navCtrl, navParams, regPro, storage, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regPro = regPro;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    EmailNewPassPage.prototype.ionViewDidLoad = function () {
        this.email = this.navParams.get('email');
    };
    EmailNewPassPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EmailNewPassPage.prototype.updatePassword = function () {
        var _this = this;
        if (!this.code) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'コードを入力してください。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else if (this.password == '' || this.password != this.confirmpassword) {
            var alert_2 = this.alertCtrl.create({
                subTitle: 'パスワードが間違っております。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert_2.present();
        }
        else {
            this.loadingShow();
            this.regPro.reset(this.code, this.password).then(function (loginRes) {
                _this.loadingHide();
                /*
                this.storage.set('sign_id', loginRes['content']['sign_id']);
                this.navCtrl.push(TabsPage);
                */
                var alert = _this.alertCtrl.create({
                    subTitle: 'パスワードの再設定が完了いたしました。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__emaillogin_emaillogin__["a" /* EmailLoginPage */]);
                            }
                        }
                    ]
                });
                alert.present();
                return;
            }).catch(function () {
                _this.loadingHide();
                _this.code = undefined;
                _this.password = undefined;
                var alert = _this.alertCtrl.create({
                    subTitle: 'Get failure while set new password.',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                            }
                        }
                    ]
                });
                alert.present();
                return;
            });
        }
    };
    EmailNewPassPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'お待ちください。。。'
        });
        this.load.present();
    };
    EmailNewPassPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    EmailNewPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emailnewpass',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\emailnewpass\emailnewpass.html"*/'<!--\n  Generated template for the EmailNewPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n<ion-content class="app_color">\n    <div class="flex-center hi-100">\n        <div class="marg-top">\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">メールアドレス</p>\n                <p style="padding-left: 15px">\n                    <strong>{{email}}</strong>\n                </p>\n                <p class="marg-2 fs-w8-5 fs-16">メールアドレスに認証コードをお送りしました。届いた認証コードを入力し、新しいパスワードを設定して下さい。</p>\n            </div>\n\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">認証コード</p>\n                <input type="text" [(ngModel)]="code" class="inp-box" />\n            </div>\n\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">新しいパスワード</p>\n                <input type="password" [(ngModel)]="password" class="inp-box" />\n            </div>\n\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">もう一度パスワードを入力して下さい。</p>\n                <input type="password" [(ngModel)]="confirmpassword" class="inp-box" />\n            </div>\n\n            <div class="text-center marg-top">\n                <ion-grid class="marg-top">\n                    <ion-row>\n                        <ion-col col-6>\n                            <button class="btn width-100per bg-gre fs-w8-5" (click)="goBack()">キャンセル</button>\n                        </ion-col>\n\n                        <ion-col col-6>\n                            <button class="btn width-100per btn-blue-autho" (click)="updatePassword()">登録</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\emailnewpass\emailnewpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EmailNewPassPage);
    return EmailNewPassPage;
}());

//# sourceMappingURL=emailnewpass.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacyPage.prototype.ionViewDidLoad = function () {
        this.text = "";
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\privacy\privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>プライバシーポリシー</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>  \n    <div style="padding:10px;">\n      <div>株式会社Marswift（以下「当社」といいます。）は、当社が提供するwOw（ワオ）サービス（以下「本サービス」といいます。）におけるユーザーについての個人情報を含む利用者に関する情報をの取り扱いについて、以下のとおり、本プライバシーポリシー（以下「本ポリシー」といいます。）を定めます。</div>\n      <div>&nbsp;</div>\n      <div>&nbsp;</div>\n      <div>１．適用範囲本ポリシーは本サービスの全てに適用されます。本サービス内の個別のサービスにおいて、別途、個別の規約等（以下「個別規約等」といいます。）が規定されている場合は、本ポリシーにあわせて個別規約等も適用されます。本ポリシーと個別規約等において矛盾が発生する場合は個別規約等が優先して適用されます。</div>\n      <div>&nbsp;</div>\n      <div>&nbsp;</div>\n      <div>２．取得する利用者情報及び取得方法並びに利用目的</div>\n      <div>本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーのスマートフォン、ＰＣ等の端末においてユーザーまたはユーザーの端末に関連して生成または蓄積された情報であって、本ポリシーに基づきユーザーがご提供または当社が収集するものを意味するものとします。本サービスにおいて、当社が収集する利用者情報及び利用目的は、その収集方法に応じて、以下のようなものとなります。</div>\n      <div>&nbsp;</div>\n      <div>（１）ユーザーからご提供いただく情報</div>\n      <div>ユーザーが本サービスを利用するために、ご提供いただく情報は、以下のとおりです。ご提供はお客様の任意ですが、ご提供いただけない場合、本サービスまたは本サービスの一部をご利用いただけない場合がございます。・プロフィール情報</div>\n      <div>本サービスの円滑利用を行っていただく等の目的で、プロフィール情報（本サービス上での表示名、アイコン画像、氏名、生年月日、クレジットカード情報）をご提供いただく場合がございます。生年月日等一部の非公開設定が可能な項目を除き、プロフィール情報は本サービス上や本サービスをご利用される他のユーザーも閲覧することができます。</div>\n      <div>&nbsp;</div>\n      <div>・アカウント登録情報</div>\n      <div>ユーザーが本サービスをご利用開始いただく際、電話番号、メールアドレス、FacebookID、TwitterID、InstagramIDをご登録いただく場合がございます。これらの情報は利用者による本サービスへのログイン、アカウントの引継ぎ等、本サービス上における利用者識別等に利用いたします。</div>\n      <div>&nbsp;</div>\n      <div>（２）ユーザーが本サービスを利用するにあたって、当社が収集する情報</div>\n      <div>・クッキー（Cookie）及び匿名ID</div>\n      <div>ユーザーの設定内容の保存等ユーザーの利便性向上のため、セッションの維持及び保護等セキュリティのため、広告の効果を計測したりより関心の強いご案内をご提供するため、ユーザーの本サービスに対する訪問回数及び利用形態、ユーザーの規模等の把握により、より良いサービスを提供するためにクッキーを利用いたします。また、本サービスではGoogle Analyticsを利用する場合がございます。 お客様はクッキーの使用可否を選択できますが、クッキーの保存を拒む場合にはログインが必要なサービス等、本サービスの一部をご利用いただけない場合がございます。</div>\n      <div>&nbsp;</div>\n      <div>・アクセスログ</div>\n      <div>お客様が本サービスを利用した際にIP アドレス、タイムスタンプ、ブラウザ種類、ブラウザ言語等の情報が自動で生成、保存されます。また、これらの情報は利用者環境を分析し、より良いサービス提供のため、また正常なサービス提供を妨害する不正行為防止のために利用いたします。</div>\n      <div>&nbsp;</div>\n      <div>・サービス利用状況に関する情報</div>\n      <div>本サービスでは、ユーザーへのサービス提供のためユーザーが本サービスを通じて行った利用状況に関する情報を自動的に取得することがあります。 例えば、ユーザー自身が投稿したテキスト、画像などの情報（以下「コンテンツ」といいます。）はシステム上当社サーバーを経由して送信され、この際、コンテンツの送信相手やデータ形式、操作日時等もサーバー上に一時的に記録されます。また、記録される内容には本サービス上でタップ・クリックによってアクセスしたURL情報などが含まれる場合があります。</div>\n      <div>&nbsp;</div>\n      <div>・位置情報</div>\n      <div>ユーザーに位置情報を使ったサービスや最適なサービスを提供する等の目的で、本サービスの一部では、ユーザーのスマートフォン、ＰＣ等の端末から送信される位置情報を利用しております。なお、ユーザーのスマートフォン、ＰＣ等の端末の設定で位置情報の送信を許可していない場合は、位置情報は送信されません。</div>\n      <div>&nbsp;</div>\n      <div>・機器情報</div>\n      <div>ユーザーが利用される機器情報（OS、端末の個体識別情報、コンピュータ名、広告ID、言語設定等）を取得する場合がございます。また、取得した広告IDを当社がユーザーに付与した内部識別子に紐付ける場合がございます。これらの情報はより良いサービス提供のため、またご本人確認や正常なサービス提供を妨害する不正行為防止のために利用いたします。</div>\n      <div>&nbsp;</div>\n      <div>&nbsp;</div>\n      <div>３．利用者情報のその他の利用目的</div>\n      <div>当社は前項により取得した利用者情報を前項以外にも、以下の目的でも利用いたします。</div>\n      <div>&nbsp;</div>\n      <div>・本サービスの提供・改善・開発のため</div>\n      <div>・ユーザーが本サービスを円滑に利用できるようにするため</div>\n      <div>・本サービス利用に関する統計データを作成し改善につなげるため</div>\n      <div>・ユーザーからのお問い合わせに対する対応のため</div>\n      <div>・今後の本サービス以外の当社が提供するサービスに関する新企画立案を行い提供するため</div>\n      <div>・有料サービス利用時等におけるご請求処理のため</div>\n      <div>・その他本サービスに関する重要なお知らせ等、必要に応じた連絡を行うため</div>\n      <div>・本サービスのセキュリティ、不正利用防止のため</div>\n      <div>・スパム行為や不正アクセス等、不正利用防止のため</div>\n      <div>・不正利用が発生した場合などに本人確認や連絡を行うため</div>\n      <div>・パーソナライズ、広告配信のため</div>\n      <div>・本サービスに関する情報等または当社以外の事業者が広告主となる広告情報等を告知するため</div>\n      <div>・ユーザー個人にカスタマイズされた本サービス提供のため</div>\n      <div>&nbsp;</div>\n      <div>&nbsp;</div>\n      <div>４．個人情報の第三者提供</div>\n      <div>当社は、利用者情報のうち、個人情報については、個人情報保護法その他の法令に基づき、開示が認められる場合を除くほか、ユーザーの同意なく第三者に提供することはございません。ただし、以下の場合は例外とします。</div>\n      <div>&nbsp;</div>\n      <div>（１）当社が利用目的達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</div>\n      <div>（２）合併その他の事由による事業の承継に伴って個人情報が提供される場合</div>\n      <div>（３）利用者情報を利用したターゲティング広告の配信等のため、本サービスに情報モジュールが組み込まれている際、情報収集モジュール提供者へ個人情報が提供される場合</div>\n      <div>（４）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼす恐れがある場合</div>\n      <div>（５）その他、個人情報保護法その他法令で認められる場合</div>\n      <div>&nbsp;</div>\n      <div>５．個人情報の取扱いの委託</div>\n      <div>当社は利用目的の達成に必要な範囲内においてユーザーから取得した利用者情報のうち個人情報の取扱いの全部または一部を第三者（外国に住所地を有する者を含みます。）に委託（個人情報を含む情報の管理を事業者に委託する場合などいいます。）することがございます。その際、委託先としての適格性を十分審査するとともに、契約にあたって守秘義務に関する事項等を規定し、情報が適正に管理される体制作りを行います。</div>\n      <div>&nbsp;</div>\n      <div>６．共同利用</div>\n      <div>当社は、本サービスと提携するサービス（以下「提携パートナー」といいます。）を提供する事業者（以下「提携パートナー」といいます。）との間で、提携サービスの提供に必要な範囲において、利用者情報を共同利用することがあります。この場合、当社は、あらかじめ、提携パートナーの名称、共同利用目的、共同利用する情報の種類を公表するものとします。</div>\n      <div>&nbsp;</div>\n      <div>７．広告について</div>\n      <div>当社は、個々のユーザーのニーズにあった最適な広告を配信できるよう取り組んでいます。 一方、本サービスの特性上、ユーザーのプライバシーに十分配慮し、ユーザーに安心してご利用いただける環境を提供することが重要と考え、ユーザーの利便性とプライバシーのバランスを考慮して広告配信において実施しない事項を下記に定めております。</div>\n      <div>&nbsp;</div>\n      <div>・プライバシーに深く関わる情報を、表示や配信内容の切り替えで利用する行為</div>\n      <div>・特定の目的で収集した利用者情報を、あらかじめ特定された目的以外で利用する行為</div>\n      <div>・ユーザーの興味関心や属性の推定において、個人を特定する行為</div>\n      <div>・健康状態や政治的信条、宗教など、ユーザーの機微な属性を推定・分類する行為</div>\n      <div>&nbsp;</div>\n      <div>&nbsp;</div>\n      <div>８．ユーザーの権利</div>\n      <div>（１）ユーザーはいつでもご登録されているメールアドレスやパスワード等の情報を、本サービスサイト上で確認、訂正することができます。また、アカウントを削除することができます。その他本サービスの「設定画面」における「アカウント」から情報の公開や利用設定等を変更することも出来ます。</div>\n      <div>&nbsp;</div>\n      <div>（２）ユーザーは当社に対し、本サービス上で確認できない個人情報の開示や利用目的の通知を求める場合、当社が別途定めた手続きに従って、次の場合を除き開示等を請求することができます。</div>\n      <div>・開示することで本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</div>\n      <div>・開示することで当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</div>\n      <div>・開示することが法令に違反することとなる場合</div>\n      <div>・開示の請求がご本人からであることが確認できない場合</div>\n      <div>（３）前号による開示の結果、当社保有の個人情報の内容が真実でないとユーザーが判断した場合は、当社が別途定めた手続きに従って、個人情報の訂正・追加・削除を請求することができます。その場合、当社は利用目的の達成に必要な範囲内で遅滞なく調査を行い、その結果に基づき当該個人情報の訂正・追加・削除を行います。</div>\n      <div>なお、サービスサイト上で確認できない個人情報の開示を請求される場合には、当社が別途定めた手続きに従って開示手数料をいただく場合がございます。 ユーザーから当社への個人情報の提供は任意ですが、必要な情報をご提供いただけない場合、本サービスの一部を利用できない場合がございます。</div>\n      <div>&nbsp;</div>\n      <div>９．退会者の情報</div>\n      <div>ユーザーが本サービスのアカウントを削除した場合、個人情報を含む利用者情報は、当社が、個人情報保護法その他の法令並びに個別規約等に従って適切に処理いたします。</div>\n      <div>&nbsp;</div>\n      <div>１０．安全管理体制</div>\n      <div>当社は、利用者情報の漏洩、滅失または毀損の防止その他利用者情報保護のため、個人情報ファイルへのアクセス制限の実施、アクセスログの記録、また外部からの不正アクセス防止のためのセキュリティソフトの導入等、利用者情報の安全管理のために必要な措置を講じております。また、当社代表取締役を利用者情報管理責任者とし、利用者情報の適正な管理及び継続的な改善を実施します。</div>\n      <div>&nbsp;</div>\n      <div>１１．本ポリシーの改定</div>\n      <div>当社は、ユーザーの利用者情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシー改定することがあります。重要な変更にあたっては、ユーザーに対して、本サービス上での掲示その他わかりやすい方法にて改定内容を告知いたします。</div>\n      <div>&nbsp;</div>\n      <div>１２．お問い合わせ</div>\n      <div>本ポリシーに関してご不明な点がある場合、または、本サービスにおける利用者情報の取り扱いに関するご質問・苦情・ご相談等があります場合は、下記までご連絡ください。</div>\n      <div>&nbsp;</div>\n      <div>住所：東京都板橋区中台1-23-5-206</div>\n      <div>社名：株式会社Marswift</div>\n      <div>Eメールアドレス：info@l-wow-l.com</div>\n      <div>&nbsp;</div>\n      <div>２０１９年１月１１日制定</div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\privacy\privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\terms\terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>利用規約</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="padding:10px;">\n    <p style="text-align: center;"><span style="font-size: 12.0pt; font-family: \'MS Mincho\';">wOw（ワオ）利用規約</span></p>\n    <p style="text-align: center;"><span style="font-size: 12.0pt; font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <p><span style="font-family: \'MS Mincho\';">この規約（以下「本規約」といいます。）は、株式会社</span><span style="font-family: \'MS Mincho\';">Marswift（以下「当社」といいます。）が提供する </span><span style="font-size: 12.0pt; font-family: \'MS Mincho\';">wOw（ワオ）</span><span style="font-family: \'MS Mincho\';"> に関するすべてのサービス（以下「本サービス」といいます。）についてのサービス提供条件及び本サービスを利用するお客様（以下「ユーザー」といいます。）と当社との権利義務関係を定めるものです。本サービスの利用に際しては、本規約の全文を</span><span style="font-family: \'MS Gothic\'; color: black; background: white;">お読みいただいたうえで</span><span style="font-family: \'MS Mincho\';">、本規約に同意していただく必要があります。</span></p>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol>\n    <li><span style="font-family: \'MS Mincho\';"> 定義</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">本規約では、以下の用語を使用します。 </span></p>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 「コンテンツ」とは、文章、音声、音楽、画像、動画、ソフトウェア、プログラム、コードその他の情報のことをいいます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 「投稿コンテンツ」とは、ユーザーが本サービスに投稿、送信、アップロードしたコンテンツのことをいいます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 「個別規約等」とは、本サービスに関して、本規約とは別に「規約」、「ガイドライン」、「ポリシー」などの名称で当社が配布または掲示している文書のことをいいます。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="2">\n    <li><span style="font-family: \'MS Mincho\';"> 規約への同意</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本規約の定めに従って本サービスを利用しなければなりません。ユーザーは、本規約に有効かつ取消不能な同意をしないかぎり本サービスを利用することができません。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーが未成年者である場合は、親権者など法定代理人の同意を得たうえで本サービスを利用してください。また、ユーザーが本サービスを事業者のために利用する場合は、当該事業者も本規約に同意していただく必要があります。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本サービスを実際に利用することによって本規約に有効かつ取消不能な同意をしたものとみなされます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 本サービスにおいて個別規約等がある場合、お客様は、本規約のほか個別規約等の定めにも従って本サービスを利用しなければなりません。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="3">\n    <li><span style="font-family: \'MS Mincho\';"> 本規約の変更</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">当社は、当社が必要と判断する場合、あらかじめユーザーに通知することなく、いつでも、本規約及び個別規約等を変更できるものとします。変更後の本規約及び個別規約等は、当社が運営するウェブサイト内の適宜の場所に掲示された時点からその効力を生じるものとし、ユーザーは本規約及び個別規約等の変更後も本サービスのアカウントの削除手続きをすることなく本サービスを使い続けることにより、変更後の本規約及び適用のある個別規約等に対する有効かつ取消不能な同意をしたものとみなされます。かかる変更の内容をユーザーに個別に通知することはいたしかねますので、本サービスをご利用の際には、随時、最新の本規約および適用のある個別規約等をご参照ください。</span></p>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="4">\n    <li><span style="font-family: \'MS Mincho\';"> アカウントに関する情報の提供</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本サービスの利用に際して、ユーザーご自身に関する情報を登録する場合、真実、正確かつ完全な情報を提供しなければならず、常に最新の情報となるよう修正するよう努めなければなりません。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本サービスの利用に際してパスワードを登録する場合、これを不正に利用されないようご自身の責任で厳重に管理しなければなりません。当社は、登録されたパスワードを利用して行なわれた一切の行為を、ユーザーご本人の行為とみなすことができます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 本サービスに登録したユーザーは、当社の定める手続きに従って、いつでもアカウントを削除して退会することができます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーが本規約に違反しまたは違反するおそれがあると認めた場合、あらかじめユーザーに通知することなく、アカウントを停止または削除することができます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、最終のアクセスから１年間以上経過しているアカウントを、あらかじめユーザーに通知することなく削除することができます。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーの本サービスにおけるすべての利用権は、理由を問わず、アカウントが削除された時点で消滅します。ユーザーが誤ってアカウントを削除した場合であっても、アカウントの復旧はできませんのでご注意ください。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 本サービスのアカウントは、ユーザーに一身専属的に帰属します。ユーザーの本サービスにおけるすべての利用権は、第三者に譲渡、貸与または相続させることはできません。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="5">\n    <li><span style="font-family: \'MS Mincho\';">プライバシー情報等の取扱い</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーのプライバシーを尊重しています。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーの個人情報を含むプライバシー情報を、</span><span style="font-size: 12.0pt; font-family: \'MS Mincho\';">wOw（ワオ）</span><span style="font-family: \'MS Mincho\';">プライバシーポリシーに従って適切に取り扱います。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーが当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、ユーザーはこれに異議を唱えないものとします。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーから収集した一切の情報、データ等を安全に管理するため、セキュリティに最大限の注意を払っています。 </span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="6">\n    <li><span style="font-family: \'MS Mincho\';">本サービスの提供等</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本サービスを利用するにあたり、必要なパーソナルコンピュータ、携帯電話機、通信機器、オペレーションシステム、通信手段及び電力などを、ユーザーの費用と責任で用意しなければなりません。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、本サービスの全部または一部を、年齢、ご本人確認の有無、登録情報の有無、その他、当社が必要と判断する条件を満たしたユーザーに限定して提供することができるものとします。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、当社が必要と判断する場合、あらかじめおユーザーに通知することなく、いつでも、本サービスの全部または一部の内容を変更し、また、その提供を中止することができるものとします。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="7">\n    <li><span style="font-family: \'MS Mincho\';"> 緊急通報機能</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">本サービスは、警察機関、海上保安機関、消防機関その他の機関への緊急通報手段を提供するものではありません。</span></p>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="8">\n    <li><span style="font-family: \'MS Mincho\';"> 広告表示</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">当社は、本サービスに当社または第三者の広告を掲載することができるものとします。</span></p>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="9">\n    <li><span style="font-family: \'MS Mincho\';"> 提携パートナーのサービス</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">本サービスは、当社と提携する他の事業者（以下「提携パートナー」といいます。）が提供するサービスまたはコンテンツ（以下、あわせて「提携サービス」といいます。）を含む場合があります。提携サービスに対する責任は、提携パートナーが負います。また、提携サービスには、提携パートナーが定める利用規約その他の条件が適用されることがあります。</span></p>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="10">\n    <li><span style="font-family: \'MS Mincho\';">権利帰属関係</span></li>\n    </ol>\n    <ol>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 本サービスに関する当社または第三者の著作権、著作隣接権、著作者人格権、商標権、意匠権、特許権、実用新案権等の知的財産権（以下、あわせて、単に「知的財産権」といいます。）、名誉権、プライバシー権、肖像権、その他法令上または契約上保護に値する権利または利益は全て当社または当社にライセンスを許諾している者に帰属しており、本規約に基づく本サービスの利用許諾は、本サービスに関する当社または当社にライセンスを許諾している者の知的財産の使用許諾を意味するものではありません。</span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、当社が本サービスにおいて提供するコンテンツ（以下「本コンテンツ」といいます。）については、ユーザーに対し譲渡はせず、ユーザーに対して、非独占的な、本サービスの利用を唯一の目的とする利用権を付与するのみであることをご了承下さい。</span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、利用料、利用期間等の利用条件が別途定められた本コンテンツ（広告）を利用する場合、かかる利用条件に従うものとします。</span></li>\n            <style>\n                .subOL { list-style: none;}\n                .subLI1::before{ content: "3.1."; }\n                .subLI2::before{ content: "3.2."; }\n                .subLI3::before{ content: "3.3."; }\n            </style>\n        <ol class="subOL">\n            <li class="subLI1" style="margin-left: 1.0cm;"><span style="font-family: \'MS Mincho\';">ユーザーの広告配信は有料となります。広告配信をする際は別途お申込が必要になります。内容、利用料金、支払期限等は、当社が決定し、ユーザーに公表または通知しますので、広告配信申請時にご確認ください。</span></li>\n            <li class="subLI2" style="margin-left: 1.0cm;"><span style="font-family: \'MS Mincho\';">当社は、お客様に公表または通知することにより、有料プランを変更または追加することがあります。</span></li>\n            <li class="subLI3" style="margin-left: 1.0cm;"><span style="font-family: \'MS Mincho\';">ユーザーは、利用可能期間中に広告配信を解約、停止した場合であっても、ユーザーが前払いした利用料金は、返金できませんので、あらかじめご了承ください。</span></li>\n        </ol>\n\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本コンテンツを、本サービスが予定している利用態様を超えて利用(複製、送信、転載、改変などの行為を含みます。）。することはできません。 </span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 投稿コンテンツのバックアップは、ユーザーご自身で行なっていただくこととなります。当社は、いかなる場合においても、投稿コンテンツのバックアップを行いません。 </span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 本サービスは、複数のユーザーが投稿、修正、削除等の編集を行える機能を含む場合があります。この場合、ユーザーはご自身の投稿コンテンツに対する他のユーザーの編集を許諾するものとします。 </span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、投稿コンテンツに対して有する知的財産権を従前どおり保持し、当社がかかる権利を取得することはありません。ただし、投稿コンテンツのうち、他のユーザー一般にも公開されたものに限り、ユーザーは、当社に対し、これをサービスやプロモーションに利用する権利（当社が必要かつ適正とみなす範囲で省略等の変更を加える権利を含みます。また、かかる利用権を当社と提携する第三者に再許諾する権利を含みます。）を、無償で、無期限に、地域の限定なく許諾したこととなります。 </span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、法令または本規約の遵守状況などを確認する必要がある場合、投稿コンテンツの内容を確認することができます。 </span></li>\n        <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーが投稿コンテンツに関し法令もしくは本規約に違反し、または違反するおそれのあると認めた場合、その他業務上の必要がある場合、あらかじめユーザーに通知することなく、投稿コンテンツを削除するなどの方法により、本サービスでの投稿コンテンツの利用を制限できます。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="11">\n    <li><span style="font-family: \'MS Mincho\';"> 禁止事項</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">ユーザーは、本サービスの利用に際して、以下に記載することを行なってはなりません。 </span></p>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 法令、裁判所の判決、決定もしくは命令、または法令上拘束力のある行政措置に違反する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 公の秩序または善良の風俗を害するおそれのある行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社または第三者の知的財産権、名誉権、プライバシー権、肖像権、その他法令上または契約上保護に値する権利または利益を侵害する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現、自殺、自傷行為、薬物乱用を誘引または助長する表現、その他反社会的な内容を含み他人に不快感を与える表現を、投稿または送信する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社または第三者になりすます行為または意図的に虚偽の情報を流布させる行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 同一または類似のメッセージを不特定多数のユーザーに送信する行為（当社の認めたものを除きます。）その他当社がスパムと判断する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社が定める方法以外の方法で、本コンテンツの利用権を、現金、財物その他の経済上の利益と交換する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 営業、宣伝、広告、勧誘、その他営利を目的とする行為（当社の認めたものを除きます。）、性行為やわいせつな行為を目的とする行為、面識のない異性との出会いや交際を目的とする行為、他のお客様に対する嫌がらせや誹謗中傷を目的とする行為、その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 反社会的勢力に対する利益供与その他の協力行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 宗教活動または宗教団体への勧誘行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 他人の個人情報、登録情報、利用履歴情報などを、不正に収集、開示または提供する行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 本サービスのサーバやネットワークシステムに支障を与える行為、BOT、チートツール、その他の技術的手段を利用してサービスを不正に操作する行為、本サービスの不具合を意図的に利用する行為、同様の質問を必要以上に繰り返す等、当社に対し不当な問い合わせまたは要求をする行為、その他当社による本サービスの運営または他のユーザーによる本サービスの利用を妨害し、これらに支障を与える行為。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 上記1から12のいずれかに該当する行為を援助または助長する行為。</span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> その他、当社が不適当と判断した行為。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="12">\n    <li><span style="font-family: \'MS Mincho\';"> ユーザーの責任</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、ユーザーご自身の責任において本サービスを利用するものとし、本サービスにおいて行った行為及びその結果について一切の責任を負うものとします。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、ユーザーが本規約に違反して本サービスを利用していると認めた場合、当社が必要かつ適切と判断する措置を講じます。ただし、当社は、当該違反を防止または是正する義務を負いません。</span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> ユーザーは、本サービスを利用したことに起因して（当社がかかる利用を原因とするクレームを第三者より受けた場合を含みます。）、当社が直接的もしくは間接的に何らかの損害（弁護士費用の負担を含みます。）を被った場合、当社の請求に従って直ちにこれを補償しなければなりません。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="13">\n    <li><span style="font-family: \'MS Mincho\';"> 保証の否認及び免責</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、いかなる場合であっても、ユーザーに対して、本サービス（本コンテンツを含みます。）に事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証するものではありません。当社は、ユーザーに対して、かかる瑕疵を除去して本サービスを提供する義務を負いません。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 当社は、本サービスに起因してユーザーに生じた損害について、消費者契約法の定めを超えて責任を負うことはありません。 </span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"> 前項によって当社が責任を負う場合であっても、当社は、当社の過失による債務不履行または不法行為によりユーザーに生じた損害のうち、当社が</span><span style="font-family: \'MS Mincho\';">予見し得ない</span><span style="font-family: \'MS Mincho\';">特別な事情から生じた損害については一切の責任を負いません。また、当社の過失による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="14">\n    <li><span style="font-family: \'MS Mincho\';"> 連絡方法</span></li>\n    </ol>\n    <ol>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">本サービスに関する当社からユーザーへの連絡は、当社が運営するウェブサイト内の適宜の場所への掲示その他、当社が適当と判断する方法により行ないます。</span></li>\n    <li style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';"></span><span style="font-family: \'MS Mincho\';">本サービスに関するユーザーから当社への連絡は、当社が運営するウェブサイト内の適宜の場所に設置するお問い合わせフォームの送信または当社が指定する方法により行っていただきます。</span></li>\n    </ol>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="15">\n    <li><span style="font-family: \'MS Mincho\';">分離可能性</span></li>\n    </ol>\n    <p style="margin-left: 15.75pt; text-indent: -15.75pt;"><span style="font-family: \'MS Mincho\';">　 本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効ま　　たは執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された残りの部分は、継続して完全に効力を有するものとします。</span></p>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <ol start="16">\n    <li><span style="font-family: \'MS Mincho\';"> 準拠法、裁判管轄</span></li>\n    </ol>\n    <p style="margin-left: 14.15pt;"><span style="font-family: \'MS Mincho\';">本規約は日本語を正文とし、その準拠法は日本法とします。本サービスに起因または関連してユーザーと当社との間に生じた紛争については東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。 </span></p>\n    <p><span style="font-family: \'MS Mincho\';">&nbsp;</span></p>\n    <p style="text-align: right;"><span style="font-family: \'MS Mincho\';">&nbsp;以上</span></p>\n    <p><span style="font-family: \'MS Mincho\';">２０１８年９月１８日　施行</span></p>\n    <p><span style="font-family: \'MS Mincho\';">２０１９年１月１１日　改定</span></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiPath */] + 'register';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    RegisterProvider.prototype.emailVerify = function (email) {
        var headers = this.headers;
        var body = "email=" + email;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* apiPath */] + "email/sendVerify", body, { headers: headers }).toPromise();
    };
    RegisterProvider.prototype.otpPass = function (verify_code, email) {
        var headers = this.headers;
        var body = "verify_code=" + verify_code + "&email=" + email;
        return this.http.post(this.api + "/email", body, { headers: headers }).toPromise();
    };
    RegisterProvider.prototype.register = function (user_id, username, password, email, user_icon, token) {
        var headers = this.headers;
        var body = "";
        if (user_icon)
            body = "user_id=" + user_id + "&username=" + username + "&password=" + password + "&email=" + email + "&user_icon=" + user_icon + "&token=" + token;
        else
            body = "user_id=" + user_id + "&username=" + username + "&password=" + password + "&email=" + email + "&token=" + token;
        return this.http.post(this.api + "/insert", body, { headers: headers }).toPromise();
    };
    RegisterProvider.prototype.forgot = function (email) {
        var headers = this.headers;
        var data = "email=" + email;
        return this.http.post(this.api + "/forgot", data, { headers: headers }).toPromise();
    };
    RegisterProvider.prototype.reset = function (code, password) {
        var headers = this.headers;
        var body = "code=" + code + "&password=" + password;
        return this.http.post(this.api + "/reset", body, { headers: headers }).toPromise();
    };
    RegisterProvider.prototype.getCategory = function () {
        return this.http.get(this.api + "/get_category").toPromise();
    };
    RegisterProvider.prototype.getCity = function () {
        return this.http.get(this.api + "/get_city").toPromise();
    };
    RegisterProvider.prototype.registerComplete = function (category, location, sign_id) {
        var headers = this.headers;
        var body = "sign_id=" + sign_id + "&category=" + category + "&location=" + location;
        return this.http.post(this.api + "/update", body, { headers: headers }).toPromise();
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterProvider);
    return RegisterProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addetail/addetail.module": [
		497,
		34
	],
	"../pages/adnew/adnew.module": [
		498,
		33
	],
	"../pages/ads/ads.module": [
		468,
		32
	],
	"../pages/adsubmitview/adsubmitview.module": [
		469,
		31
	],
	"../pages/adview/adview.module": [
		470,
		30
	],
	"../pages/category/category.module": [
		471,
		29
	],
	"../pages/city/city.module": [
		472,
		28
	],
	"../pages/comment-modal/comment-modal.module": [
		473,
		27
	],
	"../pages/continent/continent.module": [
		474,
		26
	],
	"../pages/country/country.module": [
		475,
		25
	],
	"../pages/emailforgot/emailforgot.module": [
		476,
		24
	],
	"../pages/emailinput/emailinput.module": [
		477,
		23
	],
	"../pages/emaillogin/emaillogin.module": [
		478,
		22
	],
	"../pages/emailnewpass/emailnewpass.module": [
		479,
		21
	],
	"../pages/emailoption/emailoption.module": [
		480,
		20
	],
	"../pages/favorite/favorite.module": [
		481,
		19
	],
	"../pages/home/home.module": [
		499,
		18
	],
	"../pages/languagesetting/languagesetting.module": [
		482,
		17
	],
	"../pages/menusetting/menusetting.module": [
		483,
		16
	],
	"../pages/mypost/mypost.module": [
		484,
		15
	],
	"../pages/noticelist/noticelist.module": [
		485,
		14
	],
	"../pages/noticeview/noticeview.module": [
		486,
		13
	],
	"../pages/otppass/otppass.module": [
		487,
		12
	],
	"../pages/postdetail/postdetail.module": [
		501,
		11
	],
	"../pages/postedit/postedit.module": [
		488,
		10
	],
	"../pages/postnew/postnew.module": [
		502,
		9
	],
	"../pages/prefecture/prefecture.module": [
		489,
		8
	],
	"../pages/privacy/privacy.module": [
		490,
		7
	],
	"../pages/register/register.module": [
		491,
		6
	],
	"../pages/registercomplete/registercomplete.module": [
		492,
		5
	],
	"../pages/request/request.module": [
		493,
		4
	],
	"../pages/setting/setting.module": [
		494,
		3
	],
	"../pages/terms/terms.module": [
		495,
		2
	],
	"../pages/userprofile/userprofile.module": [
		500,
		1
	],
	"../pages/violationreport/violationreport.module": [
		496,
		0
	],
	"../pages/welcome/welcome.module": [
		259
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the WelcomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WelcomeProvider = /** @class */ (function () {
    function WelcomeProvider(http) {
        this.http = http;
    }
    WelcomeProvider.prototype.getUsersDetailsFromFacebook = function (accessToken) {
        var url = "https://graph.facebook.com/me?fields=id,email,picture,name&access_token=" + accessToken;
        return this.http.get(url);
    };
    WelcomeProvider.prototype.getUsersDetailsFromFacebookPicture = function (id) {
        var url = "https://graph.facebook.com/" + id + "/picture?width=1024&height=1024";
        return this.http.get(url);
    };
    WelcomeProvider.prototype.getUserDetailsFromInstagram = function (accessToken) {
        var url = "https://api.instagram.com/v1/users/self?access_token=" + accessToken;
        return this.http.get(url);
    };
    WelcomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WelcomeProvider);
    return WelcomeProvider;
}());

//# sourceMappingURL=welcome.data.service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_data_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__welcome_data_service__["a" /* WelcomeProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_twitter_connect__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_plus__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addetail_addetail__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_adnew_adnew__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ads_ads__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_adview_adview__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_adsubmitview_adsubmitview__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_category_category__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_city_city__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_comment_modal_comment_modal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_continent_continent__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_country_country__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_emailforgot_emailforgot__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_emailinput_emailinput__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_emaillogin_emaillogin__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_emailnewpass_emailnewpass__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_emailoption_emailoption__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_favorite_favorite__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_languagesetting_languagesetting__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_menusetting_menusetting__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_mypost_mypost__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_noticelist_noticelist__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_noticeview_noticeview__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_otppass_otppass__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_postnew_postnew__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_postdetail_postdetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_postedit_postedit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_prefecture_prefecture__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_privacy_privacy__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_register_register__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_registercomplete_registercomplete__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_request_request__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_setting_setting__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_tabs_tabs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_terms_terms__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_userprofile_userprofile__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_violationreport_violationreport__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_welcome_welcome_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_ads_ads__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_posts_posts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__directives_directives_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_33__pages_emailoption_emailoption__["a" /* EmailOptionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_emaillogin_emaillogin__["a" /* EmailLoginPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_emailforgot_emailforgot__["a" /* EmailForgotPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_emailnewpass_emailnewpass__["a" /* EmailNewPassPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_otppass_otppass__["a" /* OtpPassPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_emailinput_emailinput__["a" /* EmailInputPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_registercomplete_registercomplete__["a" /* RegisterCompletePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_city_city__["a" /* CityPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_postdetail_postdetail__["a" /* PostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addetail_addetail__["a" /* AdDetailPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_violationreport_violationreport__["a" /* ViolationReportPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_mypost_mypost__["a" /* MyPostPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_postedit_postedit__["a" /* PostEditPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_postnew_postnew__["a" /* PostNewPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ads_ads__["a" /* AdsPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_userprofile_userprofile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_menusetting_menusetting__["a" /* MenuSettingPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_noticelist_noticelist__["a" /* NoticeListPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_noticeview_noticeview__["a" /* NoticeViewPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_languagesetting_languagesetting__["a" /* LanguageSettingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_adview_adview__["a" /* AdViewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_adnew_adnew__["a" /* AdNewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_adsubmitview_adsubmitview__["a" /* AdSubmitViewPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_continent_continent__["a" /* ContinentPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_prefecture_prefecture__["a" /* PrefecturePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_comment_modal_comment_modal__["a" /* CommentModalPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_62__components_shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_55__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ads/ads.module#AdsPageModule', name: 'AdsPage', segment: 'ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adsubmitview/adsubmitview.module#AdSubmitViewPageModule', name: 'AdSubmitViewPage', segment: 'adsubmitview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adview/adview.module#AdViewPageModule', name: 'AdViewPage', segment: 'adview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/city/city.module#CityPageModule', name: 'CityPage', segment: 'city', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment-modal/comment-modal.module#CommentModalPageModule', name: 'CommentModalPage', segment: 'comment-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/continent/continent.module#ContinentpagePageModule', name: 'ContinentPage', segment: 'continent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/country/country.module#CountryPageModule', name: 'CountryPage', segment: 'country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emailforgot/emailforgot.module#EmailForgotPageModule', name: 'EmailForgotPage', segment: 'emailforgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emailinput/emailinput.module#EmailInputPageModule', name: 'EmailInputPage', segment: 'emailinput', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emaillogin/emaillogin.module#EmailLoginPageModule', name: 'EmailLoginPage', segment: 'emaillogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emailnewpass/emailnewpass.module#EmailNewPassPageModule', name: 'EmailNewPassPage', segment: 'emailnewpass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emailoption/emailoption.module#EmailOptionPageModule', name: 'EmailOptionPage', segment: 'emailoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite/favorite.module#FavoritePageModule', name: 'FavoritePage', segment: 'favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/languagesetting/languagesetting.module#LanguageSettingPageModule', name: 'LanguageSettingPage', segment: 'languagesetting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menusetting/menusetting.module#MenuSettingPageModule', name: 'MenuSettingPage', segment: 'menusetting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypost/mypost.module#MyPostPageModule', name: 'MyPostPage', segment: 'mypost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticelist/noticelist.module#NoticeListPageModule', name: 'NoticeListPage', segment: 'noticelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticeview/noticeview.module#NoticeViewPageModule', name: 'NoticeViewPage', segment: 'noticeview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otppass/otppass.module#OtpPassPageModule', name: 'OtpPassPage', segment: 'otppass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postedit/postedit.module#PosteditPageModule', name: 'PostEditPage', segment: 'postedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prefecture/prefecture.module#PrefecturePageModule', name: 'PrefecturePage', segment: 'prefecture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registercomplete/registercomplete.module#RegisterCompletePageModule', name: 'RegisterCompletePage', segment: 'registercomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/violationreport/violationreport.module#ViolationReportPageModule', name: 'ViolationReportPage', segment: 'violationreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addetail/addetail.module#AdDetailPageModule', name: 'AdDetailPage', segment: 'addetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adnew/adnew.module#AdNewPageModule', name: 'AdNewPage', segment: 'adnew', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postdetail/postdetail.module#PostDetailPageModule', name: 'PostDetailPage', segment: 'postdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postnew/postnew.module#PostNewPageModule', name: 'PostNewPage', segment: 'postnew', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // IonicStorageModule.forRoot()
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__wow',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_61__directives_directives_module__["a" /* DirectivesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_33__pages_emailoption_emailoption__["a" /* EmailOptionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_emaillogin_emaillogin__["a" /* EmailLoginPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_emailforgot_emailforgot__["a" /* EmailForgotPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_emailnewpass_emailnewpass__["a" /* EmailNewPassPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_otppass_otppass__["a" /* OtpPassPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_emailinput_emailinput__["a" /* EmailInputPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_registercomplete_registercomplete__["a" /* RegisterCompletePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addetail_addetail__["a" /* AdDetailPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_violationreport_violationreport__["a" /* ViolationReportPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_city_city__["a" /* CityPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_postdetail_postdetail__["a" /* PostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_mypost_mypost__["a" /* MyPostPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_postedit_postedit__["a" /* PostEditPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_postnew_postnew__["a" /* PostNewPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ads_ads__["a" /* AdsPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_userprofile_userprofile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_menusetting_menusetting__["a" /* MenuSettingPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_noticelist_noticelist__["a" /* NoticeListPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_noticeview_noticeview__["a" /* NoticeViewPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_languagesetting_languagesetting__["a" /* LanguageSettingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_adview_adview__["a" /* AdViewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_adnew_adnew__["a" /* AdNewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_adsubmitview_adsubmitview__["a" /* AdSubmitViewPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_continent_continent__["a" /* ContinentPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_prefecture_prefecture__["a" /* PrefecturePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_comment_modal_comment_modal__["a" /* CommentModalPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_terms_terms__["a" /* TermsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_56__providers_ads_ads__["a" /* AdsProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_posts_posts__["a" /* PostsProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_plus__["a" /* GooglePlus */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostsProvider = /** @class */ (function () {
    function PostsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* apiPath */] + 'post';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    PostsProvider.prototype.getAll = function () {
        var _this = this;
        return this.storage.get('sign_id').then(function (id) {
            return _this.http.get(_this.api + "/get_posts_user?sign_id=" + id).toPromise();
        });
    };
    PostsProvider.prototype.getPostCat = function () {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id;
            return _this.http.post(_this.api + "/get_myposts_category", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.getPostsByCat = function (catid) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&category_id=" + catid;
            return _this.http.post(_this.api + "/get_posts_user_category", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.search = function (keyword) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&keyword=" + keyword;
            return _this.http.post(_this.api + "/get_posts_user", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.getFavourite = function () {
        var _this = this;
        return this.storage.get('sign_id').then(function (id) {
            return _this.http.get(_this.api + "/get_posts_favorite?sign_id=" + id).toPromise();
        });
    };
    PostsProvider.prototype.getFavouriteCat = function () {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id;
            return _this.http.post(_this.api + "/get_favorite_category", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.getFavouritePostsByCat = function (catid) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&category_id=" + catid;
            return _this.http.post(_this.api + "/get_posts_favorite_category", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.getDetail = function (id, page_num) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "sign_id=" + sign_id + "&id=" + id + "&page_num=" + page_num;
            return _this.http.post(_this.api + "/get_post_detail", body, { headers: headers }).toPromise();
        }).catch(function () {
            var body = "id=" + id + "&page_num=" + page_num;
            return _this.http.post(_this.api + "/get_post_detail", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.edit = function (postData) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + postData.id + "&sign_id=" + sign_id + "&share=" + postData.share + "&category=" + postData.category;
            return _this.http.post(_this.api + "/edit_post", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.delete = function (postData) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + postData.id + "&sign_id=" + sign_id;
            return _this.http.post(_this.api + "/delete_post", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.create = function (postData) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var long, lati;
            if (postData.long) {
                long = postData.long;
            }
            if (postData.lati) {
                lati = postData.lati;
            }
            var body = "long=" + long + "&lati=" + lati + ("&sign_id=" + sign_id + "&comment=" + postData.comment + "&file_name=" + postData.file_name + "&publish=" + postData.publish + "&category=" + postData.category + "&share=" + postData.share + "&city=" + postData.city);
            return _this.http.post(_this.api + "/create_post", body, { headers: _this.headers }).toPromise();
        });
    };
    PostsProvider.prototype.addFavourite = function (id, type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + id + "&sign_id=" + sign_id + "&type=" + type;
            return _this.http.post(_this.api + "/set_favorite", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.likePost = function (id, type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + id + "&sign_id=" + sign_id + "&type=" + type;
            return _this.http.post(_this.api + "/set_like", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.likeComment = function (id, type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "comment_id=" + id + "&sign_id=" + sign_id + "&type=" + type;
            return _this.http.post(_this.api + "/set_like_comment", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.replyPost = function (id, comment) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + id + "&sign_id=" + sign_id + "&comment=" + comment;
            return _this.http.post(_this.api + "/reply_post", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider.prototype.replyComment = function (id, comment) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "comment_id=" + id + "&sign_id=" + sign_id + "&comment=" + comment;
            return _this.http.post(_this.api + "/reply_comment", body, { headers: headers }).toPromise();
        });
    };
    PostsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PostsProvider);
    return PostsProvider;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_postdetail_postdetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_noticelist_noticelist__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, push, storage, app, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.push = push;
        this.storage = storage;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.count = 0;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.            
            splashScreen.hide();
            statusBar.styleDefault();
            var options = {
                android: {},
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {},
                browser: {
                    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
            };
            var pushObject = _this.push.init(options);
            pushObject.on('notification').subscribe(function (notification) {
                console.log('Received a notification', notification);
                if (notification.additionalData.foreground == false &&
                    (notification.additionalData.dismissed != undefined || notification.additionalData.coldstart == true) &&
                    _this.count == 0) {
                    _this.count++;
                    // user tapped on notification 
                    if (notification.additionalData.type == 1) {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_noticelist_noticelist__["a" /* NoticeListPage */]).then(function () {
                        });
                    }
                    if (notification.additionalData.type == 2) {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_postdetail_postdetail__["a" /* PostDetailPage */], { post_id: notification.additionalData.id }).then(function () {
                        });
                    }
                }
            });
            /*
            pushObject.on('registration').subscribe((registration: any) => {
              this.storage.set('token', registration.registrationId);
              console.log('Device registered', registration)
            });
            */
            pushObject.on('registration').subscribe(function (registration) {
                if (registration.registrationId)
                    _this.storage.set('token', registration.registrationId).then(function (res) {
                        console.log('Device registered', res);
                    });
                console.log('Device registered', registration);
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        });
        // Back button
        platform.registerBackButtonAction(function () {
            var nav = app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === "HomePage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        message: 'このアプリを終了しますか？',
                        buttons: [
                            {
                                text: 'いいえ',
                                role: 'cancel',
                                handler: function () {
                                }
                            }, {
                                text: 'はい',
                                role: 'ok',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__["a" /* ScrollHideDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__["a" /* ScrollHideDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollHideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollHideDirective = /** @class */ (function () {
    function ScrollHideDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.config = {
            cssProperty: "margin-top",
            maxValue: 250 // this is the height of your header, change it as you see if
        };
        this.lastValue = 0;
    }
    ScrollHideDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.scrollContent) {
            this.scrollContent.ionScrollStart.subscribe(function (ev) {
                _this.contentHeight = _this.scrollContent.getScrollElement().offsetHeight;
                _this.scrollHeight = _this.scrollContent.getScrollElement().scrollHeight;
                _this.lastScrollPosition = ev.scrollTop;
            });
            this.scrollContent.ionScroll.subscribe(function (ev) {
                return _this.adjustElementOnScroll(ev);
            });
            this.scrollContent.ionScrollEnd.subscribe(function (ev) {
                return _this.adjustElementOnScroll(ev);
            });
        }
    };
    ScrollHideDirective.prototype.adjustElementOnScroll = function (ev) {
        var _this = this;
        if (ev) {
            ev.domWrite(function () {
                var scrollTop = ev.scrollTop > 0 ? ev.scrollTop : 0;
                var scrolldiff = scrollTop - _this.lastScrollPosition;
                _this.lastScrollPosition = scrollTop;
                var newValue = _this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, _this.config.maxValue));
                _this.renderer.setStyle(_this.element.nativeElement, _this.config.cssProperty, "-" + newValue + "px");
                _this.lastValue = newValue;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])("scrollContent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Content */])
    ], ScrollHideDirective.prototype, "scrollContent", void 0);
    ScrollHideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            selector: "[scroll-hide]",
            inputs: ["scrollContent"] // make sure you add this inputs array with the scrollContent value in order for the @Input to be recognized!
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */]])
    ], ScrollHideDirective);
    return ScrollHideDirective;
}());

//# sourceMappingURL=scroll-hide.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShrinkingSegmentHeader = /** @class */ (function () {
    function ShrinkingSegmentHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ShrinkingSegmentHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ShrinkingSegmentHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ShrinkingSegmentHeader.prototype, "headerHeight", void 0);
    ShrinkingSegmentHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\components\shrinking-segment-header\shrinking-segment-header.html"*/'<ng-content></ng-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\components\shrinking-segment-header\shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ShrinkingSegmentHeader);
    return ShrinkingSegmentHeader;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_posts_posts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__violationreport_violationreport__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__postedit_postedit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__comment_modal_comment_modal__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PostDetailPage = /** @class */ (function () {
    function PostDetailPage(navCtrl, navParams, launchNavigator, geolocation, postPro, setPro, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, imageViewerCtrl, storage, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.postPro = postPro;
        this.setPro = setPro;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.imageViewerCtrl = imageViewerCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.hideMe = false; // isFavoruite or not
        this.comments = []; // comments array
        this.user = {}; // current user
        this.loadingflag = false;
        this.isedit = false;
        this.userLoggedIn = false;
        this.cur_page_num = 0;
        this.showCommentBox = false;
        this.postid = this.navParams.get('post_id');
        var type = this.navParams.get('type');
        if (type == 1) {
            this.isedit = false;
        }
        else {
            this.isedit = true;
        }
    }
    PostDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('sign_id').then(function (sign_id) {
            if (sign_id != null) {
                _this.signID = sign_id;
                _this.userLoggedIn = true;
                _this.setPro.getAccount().then(function (res) {
                    _this.user = res['account'];
                    if (!_this.user.user_icon || _this.user.user_icon == '') {
                        _this.user.user_icon = 'assets/imgs/userse.png';
                    }
                    _this.current_user_icon = _this.user.user_icon;
                });
            }
            else {
                _this.current_user_icon = _this.user.user_icon;
                _this.userLoggedIn = false;
            }
        }).catch(function () {
            _this.current_user_icon = _this.user.user_icon;
            _this.userLoggedIn = false;
        });
        this.loadingShow();
        this.renderUI();
    };
    PostDetailPage.prototype.loadMap = function () {
        var mapOptions = {
            center: new google.maps.LatLng(this.post.lati, this.post.long),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            attributionControl: false,
            fullscreenControl: false
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.post.lati, this.post.long),
            animation: google.maps.Animation.DROP,
            map: this.map,
            icon: 'assets/imgs/mapblue.png'
        });
        var geocoder = new google.maps.Geocoder;
        var latlng = { lat: parseFloat(this.post.lati), lng: parseFloat(this.post.long) };
        var location;
        var file_name = this.post.file_name;
        var post_lati = this.post.lati;
        var post_long = this.post.long;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    location = results[0].formatted_address;
                }
                else {
                    location = "No results found";
                }
            }
            else {
                location = "No results found";
            }
            var infowindow = new google.maps.InfoWindow();
            // var content = location + "<br/> <button id=\"element\" onclick=\"javascript:openGoogleMap(" + post_lati + ", " + post_long + ");\">Open Google Map</button></div>";
            var content = location;
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    infowindow.setContent(content);
                    infowindow.open(this.map, marker);
                };
            })(marker));
        });
    };
    PostDetailPage.prototype.renderUI = function () {
        var _this = this;
        // Get Post detail from API
        this.postPro.getDetail(this.postid, this.cur_page_num).then(function (res) {
            _this.comments = [];
            _this.post = res.post;
            _this.loadMap();
            console.log(_this.post.file_name);
            var comments = res.comments;
            _this.comment_count = res.comments_count;
            _this.cur_page_num = 1;
            if (_this.post.favorite === "0") {
                _this.hideMe = false;
            }
            else {
                _this.hideMe = true;
            }
            if (comments && comments.length > 0) {
                // add parent comments
                for (var i = 0; i < comments.length; i++) {
                    if (comments[i].parent_id == "0") {
                        _this.comments.push(comments[i]);
                    }
                }
                // add child comments
                for (var j = 0; j < comments.length; j++) {
                    if (comments[j].parent_id != "0") {
                        for (var k = 0; k < _this.comments.length; k++) {
                            if (_this.comments[k].id == comments[j].parent_id) {
                                _this.comments[k].innerComments = _this.comments[k].innerComments || [];
                                _this.comments[k].innerComments.push(comments[j]);
                            }
                        }
                    }
                }
            }
            _this.loadingHide();
        }).catch(function () {
            _this.loadingHide();
        });
    };
    PostDetailPage.prototype.forGeoLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.map.setCenter(new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude));
            var myLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                icon: 'assets/imgs/mapblue.png'
            });
        }).catch(function (error) {
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    PostDetailPage.prototype.launchNavigate = function () {
        this.launchNavigator.navigate([this.post.lati, this.post.long]);
    };
    PostDetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PostDetailPage.prototype.goEditPost = function () {
        var post = this.post;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__postedit_postedit__["a" /* PostEditPage */], { post: post });
    };
    // Click to add favourite
    PostDetailPage.prototype.addFav = function () {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_1 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_1.present();
            return;
        }
        this.loadingShow();
        this.postPro.addFavourite(this.postid, 1).then(function (res) {
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: 'お気に入りに追加しました。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
            _this.hideMe = true;
        }).catch(function (error) {
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: '追加に失敗しました。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
            _this.hideMe = false;
        });
    };
    // Click to remove favourite
    PostDetailPage.prototype.removeFav = function () {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_2 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_2.present();
            return;
        }
        this.loadingShow();
        this.postPro.addFavourite(this.postid, 2).then(function (res) {
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: 'お気に入りから削除しました。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
            _this.hideMe = false;
        }).catch(function (error) {
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: '削除に失敗しました。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
            _this.hideMe = true;
        });
    };
    // Click to social shareing
    PostDetailPage.prototype.shareInfo = function () {
        console.log(this.post.file_name);
        this.socialSharing.share(this.post.comment, "wOw post", this.post.file_name, "").then(function (data) {
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
        }).catch(function (error) {
            console.log(error);
        });
    };
    PostDetailPage.prototype.reportComment = function (comment) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_3 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_3.present();
            return;
        }
        var alert = this.alertCtrl.create({
            title: '違反報告',
            message: 'このコメントを通報しますか？',
            buttons: [
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: '通報',
                    handler: function () {
                        _this.gotoViolationReport(comment, 3);
                    }
                }
            ]
        });
        alert.present();
    };
    PostDetailPage.prototype.reportPost = function (post) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_4 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_4.present();
            return;
        }
        var alert = this.alertCtrl.create({
            title: '違反報告',
            message: 'このコメントを通報しますか？',
            buttons: [
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: '通報',
                    handler: function () {
                        _this.gotoViolationReport(post, 1);
                    }
                }
            ]
        });
        alert.present();
    };
    PostDetailPage.prototype.gotoViolationReport = function (item, num) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__violationreport_violationreport__["a" /* ViolationReportPage */], {
            post: item,
            sign_id: this.signID,
            comment_id: item.id,
            type: num
        });
    };
    PostDetailPage.prototype.setPostLike = function (id) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_5 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_5.present();
            return;
        }
        this.loadingShow();
        this.postPro.likePost(id, this.signID).then(function (res) {
            _this.cur_page_num = 0;
            _this.renderUI();
        }).catch(function () {
            // Error!
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: '失敗',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
        });
    };
    PostDetailPage.prototype.setCommentLike = function (id) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_6 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_6.present();
            return;
        }
        this.loadingShow();
        this.postPro.likeComment(id, this.signID).then(function (res) {
            _this.cur_page_num = 0;
            _this.renderUI();
        }).catch(function () {
            // Error!
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: '失敗',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
        });
    };
    PostDetailPage.prototype.isEmptyOrSpaces = function (str) {
        return str === null || str.match(/^ *$/) !== null;
    };
    PostDetailPage.prototype.commentPost = function () {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_7 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_7.present();
            return;
        }
        this.commenttext = "";
        this.type = "1";
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__comment_modal_comment_modal__["a" /* CommentModalPage */], { comment: this.commenttext });
        modalPage.onDidDismiss(function (data) {
            if (data && data['comment'] && data['comment'].length) {
                _this.commenttext = data['comment'];
                _this.addComment(_this.commenttext);
            }
        });
        modalPage.present();
        // this.showCommentBox = true;
    };
    PostDetailPage.prototype.commentCmnt = function (comment) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_8 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_8.present();
            return;
        }
        this.commenttext = "";
        this.pcid = comment.id;
        this.type = "2";
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__comment_modal_comment_modal__["a" /* CommentModalPage */], { comment: this.commenttext });
        modalPage.onDidDismiss(function (data) {
            if (data && data['comment'] && data['comment'].length) {
                _this.commenttext = data['comment'];
                _this.addReplyComment(_this.commenttext);
            }
        });
        modalPage.present();
        // this.showCommentBox = true;
    };
    PostDetailPage.prototype.sendClick = function () {
        if (this.isEmptyOrSpaces(this.commenttext)) {
            alert("コメントを入力して下さい。");
            return;
        }
        if (this.type == "1")
            this.addComment(this.commenttext);
        else
            this.addReplyComment(this.commenttext);
        this.showCommentBox = false;
    };
    PostDetailPage.prototype.cloceClick = function () {
        this.showCommentBox = false;
    };
    PostDetailPage.prototype.addComment = function (cmnt) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_9 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_9.present();
            return;
        }
        this.loadingShow();
        this.postPro.replyPost(this.postid, cmnt).then(function (res) {
            _this.cur_page_num = 0;
            _this.renderUI();
        }).catch(function () {
            // Error!
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: '失敗',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
        });
    };
    PostDetailPage.prototype.addReplyComment = function (cmnt) {
        var _this = this;
        if (this.userLoggedIn == false) {
            var alert_10 = this.alertCtrl.create({
                message: 'この機能を使用するにはログインする必要があります。',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert_10.present();
            return;
        }
        this.loadingShow();
        this.postPro.replyComment(this.pcid, cmnt).then(function (res) {
            _this.cur_page_num = 0;
            _this.renderUI();
        }).catch(function () {
            // Error!
            _this.loadingHide();
            var alert = _this.alertCtrl.create({
                message: '失敗',
                buttons: [
                    {
                        text: 'はい',
                        role: 'ok',
                        handler: function () {
                        }
                    },
                ]
            });
            alert.present();
        });
    };
    // get data when scroll is up / down
    PostDetailPage.prototype.loadData = function (event) {
        var _this = this;
        if (this.cur_page_num * 5 > this.comment_count) {
            event.complete();
            event.disabled = true;
        }
        else {
            // Get Post detail from API
            this.postPro.getDetail(this.postid, this.cur_page_num).then(function (res) {
                _this.cur_page_num++;
                var comments = res.comments;
                if (comments && comments.length > 0) {
                    // add child comments
                    for (var j = 0; j < comments.length; j++) {
                        if (comments[j].parent_id != "0") {
                            for (var k = 0; k < comments.length; k++) {
                                if (comments[k].id == comments[j].parent_id) {
                                    comments[k].innerComments = comments[k].innerComments || [];
                                    comments[k].innerComments.push(comments[j]);
                                }
                            }
                        }
                    }
                    // add parent comments
                    for (var i = 0; i < comments.length; i++) {
                        if (comments[i].parent_id == "0") {
                            _this.comments.push(comments[i]);
                        }
                    }
                }
                event.complete();
            }).catch(function () {
                event.complete();
            });
        }
    };
    PostDetailPage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'しばらくお待ちください。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    PostDetailPage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PostDetailPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* InfiniteScroll */])
    ], PostDetailPage.prototype, "infiniteScroll", void 0);
    PostDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postdetail',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\postdetail\postdetail.html"*/'<!--\n\n  Post detail page\n\n  - show post detail information.\n\n\n\n  * functions\n\n  - show locatioin on map\n\n  - add/remove post to favourite\n\n  - comment/like, dislike, share post\n\n  - comment/like, dislike comment\n\n  - reply comment\n\n  - report comment\n\n-->\n\n\n\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n    <!-- Google Map -->\n\n    <ion-row>\n\n        <ion-col class="no-padding">\n\n            <ion-icon name="ios-arrow-back" class="backbtn back-index" (click)="goBack()"></ion-icon>\n\n            <!-- <img src="assets/imgs/gps.png" class="gps-posi" (click)="forGeoLocation()" /> -->\n\n            <img src="assets/imgs/mapname.png" class="map-text" (click)="launchNavigate()" />\n\n            <div #map id="map"></div>\n\n        </ion-col>\n\n    </ion-row>\n\n \n\n    <!-- Post photo -->\n\n    <div>\n\n        <img *ngIf="post" [src]="post.file_name" height="260" imageViewer class="wid-100" style="object-fit: contain;" />\n\n    </div>\n\n\n\n    <!-- Post favourtie -->\n\n    <ion-row *ngIf="!isedit">\n\n        <ion-col col-6></ion-col>\n\n        \n\n        <ion-col col-2></ion-col>\n\n\n\n        <ion-col col-2></ion-col>\n\n        \n\n        <ion-col col-2>\n\n            <div >\n\n                <img src="assets/imgs/staroff.png" style="width:30px;height:30px;" class="mar-auto" *ngIf="!hideMe" (click)="addFav()" />\n\n                <img src="assets/imgs/staron.png" style="width:31px;height:30px;" class="mar-auto" *ngIf="hideMe" (click)="removeFav()" />\n\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- Post edit -->\n\n    <div *ngIf="isedit" class="float-right" padding>\n\n        <img src="assets/imgs/edit.png" height="26" (click)="goEditPost()">\n\n    </div>\n\n\n\n    <!-- First row item : Post -->\n\n    <div class="bor-bot">\n\n        <ion-row class="wid-100">\n\n            <ion-col col-2>\n\n                <ion-avatar item-start style="margin-left: 12px;">\n\n                    <img *ngIf ="post" [src]="post.user_icon" class="img-avtar mar-auto" />\n\n                </ion-avatar>\n\n            </ion-col>\n\n\n\n            <ion-col col-10>\n\n                <p class="fs-16" style="margin-bottom: 6px; margin-top:6px;">\n\n                    <!-- User name --> \n\n                    <span *ngIf="post">{{post.username}}</span>\n\n                    <!-- Date --> \n\n                    <ion-note class="fs-14 pad-right float-right text-black" *ngIf="post" style="margin-top:3px;">\n\n                        {{post.reg_date | date :\'yyyy/MM/dd\'}}&nbsp;&nbsp;\n\n                        <span class="fs-14" *ngIf="post">{{post.reg_date | date :\'HH:mm\'}}</span>\n\n                    </ion-note>\n\n                </p>\n\n                \n\n                <!-- Post comment --> \n\n                <p class="fs-12 mar-auto" *ngIf="post">\n\n                    {{post.comment}}\n\n                </p>\n\n                \n\n                <ion-row style="width: 100%;">\n\n                    <!-- Post like -->\n\n                    <ion-col col-3 class="no-padding">\n\n                        <button *ngIf="post && post.like_status == \'1\'" ion-button icon-start clear small class="no-padding text-blue" (click)="setPostLike(post.id)">\n\n                            <img src="assets/imgs/heart.png" class="icons-small">&nbsp;\n\n                            <p class="fs-12 text-blue text-trans-initial"> いいね&nbsp;\n\n                                <span *ngIf="post">{{post.num_like}}</span>\n\n                            </p>\n\n                        </button>\n\n                        <button *ngIf="post && post.like_status == \'0\'" ion-button icon-start clear small class="no-padding text-blue" (click)="setPostLike(post.id)">\n\n                            <img src="assets/imgs/heart-white-hi.png" class="icons-small">\n\n                            <p class="fs-12 text-blue text-trans-initial">&nbsp;&nbsp;いいね&nbsp;\n\n                                <span *ngIf="post">{{post.num_like}}</span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n                    \n\n                    <!-- Post Comment -->\n\n                    <ion-col col-4 class="no-padding" style="text-align:right;">\n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="commentPost()">\n\n                            <img src="assets/imgs/send.png" class="icons-small">\n\n                            <p class="fs-12 text-blue text-trans-initial">&nbsp;&nbsp;コメント&nbsp;\n\n                                <span *ngIf="post">{{post.num_comment}}</span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n                    \n\n                    <!-- Post Share -->\n\n                    <ion-col col-3 class="no-padding" style="text-align:right;">\n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="shareInfo()">\n\n                            <img src="assets/imgs/share.png" class="icons-small">\n\n                            <p class="fs-12 text-blue text-trans-initial">&nbsp;&nbsp;シェア</p>\n\n                        </button>\n\n                    </ion-col>\n\n\n\n                    <!-- Post Report -->\n\n                    <ion-col col-2 class="no-padding flex-center " style="display:block; text-align:right;">\n\n                        <ion-note>\n\n                            <ion-icon name="ios-close" class="fs-24 fs-w8-8" style="margin:5px 10px 0px 0px;" (click)="reportPost(post)"></ion-icon>\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <!-- comments array -->\n\n    <div *ngFor="let cmt of comments;" class="bor-bot" >\n\n        <!-- Parent comment -->\n\n        <ion-row class="wid-100" >\n\n            <!-- comment avatar -->\n\n            <ion-col col-2>\n\n                <ion-avatar item-start style="margin-left: 12px;">\n\n                    <img *ngIf ="cmt" [src]="cmt.file_name" class="img-avtar mar-auto" />\n\n                </ion-avatar>\n\n            </ion-col>\n\n            \n\n            <ion-col col-10>\n\n                <p class="fs-16" style="margin-bottom: 6px; margin-top:6px;">\n\n                    <!-- comment user name -->\n\n                    <span *ngIf ="cmt">{{cmt.user_name}}</span>\n\n                    <!-- comment time -->\n\n                    <ion-note class="fs-14 pad-right float-right text-black" *ngIf ="cmt" style="margin-top:3px;">{{cmt.reg_date | date :\'yyyy/MM/dd\'}}&nbsp;&nbsp;\n\n                        <span class="fs-14" *ngIf ="cmt">{{cmt.reg_date | date :\'HH:mm\'}}</span>\n\n                    </ion-note>\n\n                </p>\n\n                \n\n                <!-- comment content -->\n\n                <p class="fs-12 mar-auto" *ngIf ="cmt">\n\n                    {{cmt.content}}\n\n                </p>\n\n\n\n                <ion-row style="width: 100%;">\n\n                    <!-- Like button -->          \n\n                    <ion-col col-4 class="no-padding">\n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="setCommentLike(cmt.id)">\n\n                            <img *ngIf="cmt && cmt.like_status == \'1\'" src="assets/imgs/heart.png" class="icons-small">\n\n                            <img *ngIf="cmt && cmt.like_status == \'0\'" src="assets/imgs/heart-white-hi.png" class="icons-small">\n\n                            <p class="fs-12 text-blue text-trans-initial">&nbsp;&nbsp;いいね&nbsp;\n\n                                <span *ngIf="cmt">{{cmt.num_like}}</span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n\n\n                    <!-- Reply button -->          \n\n                    <ion-col col-4 class="no-padding">\n\n                        <button ion-button icon-start clear small class="no-padding text-blue" (click)="commentCmnt(cmt)">\n\n                            <img src="assets/imgs/send.png" class="icons-small">\n\n                            <p class="fs-12 text-blue text-trans-initial">&nbsp;&nbsp;コメント&nbsp;\n\n                                <span *ngIf="cmt">{{cmt.num_reply}} </span>\n\n                            </p>\n\n                        </button>\n\n                    </ion-col>\n\n\n\n                    <!-- Report button -->          \n\n                    <ion-col col-4 class="no-padding flex-center" style="text-align: right; display:block;">\n\n                        <ion-note>\n\n                            <ion-icon name="ios-close" class="fs-24 fs-w8-8" style="margin:5px 10px 0px 0px;" (click)="reportComment(cmt)"></ion-icon>\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <!-- Child comment -->\n\n        <div padding *ngIf ="cmt && cmt.innerComments && cmt.innerComments.length > 0">\n\n            <ion-row *ngFor="let icmt of cmt.innerComments;"> \n\n                <!-- comment user image -->\n\n                <ion-col col-2>\n\n                    <ion-avatar item-start style="margin-left: 12px;">\n\n                        <img *ngIf="icmt" [src]="icmt.file_name" class="img-avtar-child mar-auto" />\n\n                    </ion-avatar>\n\n                </ion-col>\n\n                \n\n                <!-- comment user name -->\n\n                <ion-col col-10>\n\n                    <p class="fs-16" style="margin-bottom: 6px;margin-top: 6px;">\n\n                        <span *ngIf ="icmt">{{icmt.user_name}}</span>\n\n                        <!-- comment time -->\n\n                        <ion-note class="fs-14 pad-right float-right text-black" style="margin-top:3px;">{{icmt.reg_date | date :\'yyyy/MM/dd\'}}&nbsp;&nbsp;\n\n                            <span class="fs-14" *ngIf ="icmt">{{icmt.reg_date | date :\'HH:mm\'}}</span>\n\n                        </ion-note>\n\n                    </p>\n\n\n\n                    <!-- comment content -->\n\n                    <p class="fs-12 mar-auto">\n\n                        {{icmt.content}}\n\n                    </p>\n\n                    \n\n                    <ion-row style="width: 100%;">\n\n                        <!-- like button -->\n\n                        <ion-col col-4 class="no-padding">\n\n                            <button ion-button icon-start clear small class="no-padding text-blue" (click)="setCommentLike(icmt.id)">\n\n                                <img *ngIf="icmt && icmt.like_status == \'1\'" src="assets/imgs/heart.png" class="icons-small">\n\n                                <img *ngIf="icmt && icmt.like_status == \'0\'" src="assets/imgs/heart-white-hi.png" class="icons-small">\n\n                                <p class="fs-12 text-blue text-trans-initial">&nbsp;&nbsp;いいね&nbsp;\n\n                                    <span>{{icmt.like_count}}</span>\n\n                                </p>\n\n                            </button>\n\n                        </ion-col>\n\n\n\n                        <!-- reply button -->\n\n                        <ion-col col-4 class="no-padding">\n\n                            <button ion-button icon-start clear small class="no-padding text-blue" (click)="commentCmnt(icmt)">\n\n                                <img src="assets/imgs/send.png" class="icons-small">\n\n                                <p class="fs-12 text-blue text-trans-initial" >&nbsp;&nbsp;コメント&nbsp;\n\n                                    <span *ngIf="icmt">{{icmt.reply_count}}</span>\n\n                                </p>\n\n                            </button>\n\n                        </ion-col>\n\n           \n\n                        <!-- report button -->\n\n                        <ion-col col-4 class="no-padding flex-center" style="text-align: right; display:block;">\n\n                            <ion-note >\n\n                                <ion-icon name="ios-close" class="fs-24 fs-w8-8" style="margin:5px 10px 0px 0px;" (click)="reportComment(icmt)"></ion-icon>\n\n                            </ion-note>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n    \n\n\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">\n\n        <ion-infinite-scroll-content\n\n            loadingSpinner="bubbles"\n\n            loadingText="Loading more data...">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n    <br>\n\n    <br>\n\n\n\n    <!-- comment dialog -->\n\n    <ion-grid style="background-color: #9ba0b8 !important;position:fixed;bottom: 0px;left:0;z-index: 100000;" *ngIf="showCommentBox">\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <img style="width:42px;height:42px;" [src]="current_user_icon" class="img-avtar mar-auto" />\n\n            </ion-col>\n\n\n\n            <ion-col col-8>\n\n                <ion-textarea placeholder="Enter a description" style="background: white;border-radius: 6px;height: 100%;padding: 6px;" [(ngModel)]="commenttext" >\n\n                </ion-textarea>\n\n            </ion-col>\n\n\n\n            <ion-col col-2 style="text-align: center;">\n\n                <ion-icon name="close-circle" style="font-size: 36px;color: #3a51b2 !important;margin-top: 10px;" (click)="cloceClick()"></ion-icon>\n\n                <ion-icon name="send" style="font-size: 40px;color: #3a51b2 !important;margin-top: 10px;" (click)="sendClick()"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\postdetail\postdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], PostDetailPage);
    return PostDetailPage;
}());

//# sourceMappingURL=postdetail.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AdsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdsProvider = /** @class */ (function () {
    function AdsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* apiPath */] + 'advertise';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    AdsProvider.prototype.getDetail = function (id) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "sign_id=" + sign_id + "&id=" + id;
            return _this.http.post(_this.api + "/get_detail", body, { headers: headers }).toPromise();
        }).catch(function () {
            var body = "id=" + id;
            return _this.http.post(_this.api + "/get_detail", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.getAdsByType = function (type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&type=" + type;
            return _this.http.post(_this.api + "/get_list", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.create = function (adData) {
        var _this = this;
        var headers = this.headers;
        var file1 = adData.file1, file2 = adData.file2, file3 = adData.file3, file4 = adData.file4, file5 = adData.file5, content = adData.content, url = adData.url, cat = adData.cat, days = adData.days, price = adData.price, email = adData.email;
        return this.storage.get('sign_id').then(function (id) {
            var body = "sign_id=" + id + "&file1=" + file1 + "&file2=" + file2 + "&file3=" + file3 + "&file4=" + file4 + "&file5=" + file5 + "&content=" + content + "&url=" + url + "&category=" + cat + "&days=" + days + "&price=" + price + "&email=" + email;
            return _this.http.post(_this.api + "/submit_advertise", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.reSubmit = function (adData) {
        var _this = this;
        var headers = this.headers;
        var id = adData.id, file1 = adData.file1, file2 = adData.file2, file3 = adData.file3, file4 = adData.file4, file5 = adData.file5, file1_id = adData.file1_id, file2_id = adData.file2_id, file3_id = adData.file3_id, file4_id = adData.file4_id, file5_id = adData.file5_id, content = adData.content, url = adData.url, cat = adData.cat, days = adData.days, price = adData.price, email = adData.email, delete1 = adData.delete1, delete2 = adData.delete2, delete3 = adData.delete3, delete4 = adData.delete4, delete5 = adData.delete5;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "sign_id=" + sign_id + "&id=" + id + "&content=" + content + "&url=" + url + "&category=" + cat + "&days=" + days + "&price=" + price + "&email=" + email;
            var file_content = '';
            if (delete1 == 1) {
                file_content = file_content + ("file1=" + file1 + "&file1_id=" + file1_id);
            }
            if (delete2 == 1) {
                file_content = file_content + ("file2=" + file2 + "&file2_id=" + file2_id);
            }
            if (delete3 == 1) {
                file_content = file_content + ("file3=" + file3 + "&file3_id=" + file3_id);
            }
            if (delete4 == 1) {
                file_content = file_content + ("file4=" + file4 + "&file4_id=" + file4_id);
            }
            if (delete5 == 1) {
                file_content = file_content + ("file5=" + file5 + "&file5_id=" + file5_id);
            }
            if (file_content != '') {
                body = body + "&" + file_content;
            }
            return _this.http.post(_this.api + "/submit_advertise", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.addFavourite = function (id, type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + id + "&sign_id=" + sign_id + "&type=" + type;
            return _this.http.post(_this.api + "/set_favorite", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.likeAd = function (id, type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + id + "&sign_id=" + sign_id + "&type=" + type;
            return _this.http.post(_this.api + "/set_like", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.likeComment = function (id, type) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "comment_id=" + id + "&sign_id=" + sign_id + "&type=" + type;
            return _this.http.post(_this.api + "/set_like_comment", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.replyAd = function (id, comment) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "id=" + id + "&sign_id=" + sign_id + "&comment=" + comment;
            return _this.http.post(_this.api + "/reply_advertise", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider.prototype.replyComment = function (id, comment) {
        var _this = this;
        var headers = this.headers;
        return this.storage.get('sign_id').then(function (sign_id) {
            var body = "comment_id=" + id + "&sign_id=" + sign_id + "&comment=" + comment;
            return _this.http.post(_this.api + "/reply_comment", body, { headers: headers }).toPromise();
        });
    };
    AdsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AdsProvider);
    return AdsProvider;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiPath; });
var __DEV__ = false;
var devApiPath = '/api/';
var proApiPath = 'http://153.122.50.6/index.php/api/';
var apiPath = __DEV__ ? devApiPath : proApiPath;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, viewCtrl, regPro, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.regPro = regPro;
        this.alertCtrl = alertCtrl;
        this.checkboxValue = {};
        this.checkedNum = 0;
        this.categories = [];
        this.category = [];
        this.past_category = [];
        this.regPro.getCategory().then(function (data) {
            return _this.categories = data['category_list'];
        });
        this.category = navParams.get('category') || [];
        this.past_category = this.category.slice();
        this.checkedNum = this.category.length;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
    };
    CategoryPage.prototype.goBack = function () {
        var data = { 'category': [] };
        this.viewCtrl.dismiss(data);
    };
    CategoryPage.prototype.dismiss = function () {
        var data = { 'category': this.past_category };
        this.viewCtrl.dismiss(data);
    };
    CategoryPage.prototype.submit = function () {
        var data = { 'category': this.category };
        this.viewCtrl.dismiss(data);
    };
    CategoryPage.prototype.addValue = function (e, id) {
        if (e._value == true && (this.checkedNum < 5)) {
            this.category.push(id);
            this.checkedNum++;
        }
        else if (e._value == true) {
            e._value = false;
            var alert_1 = this.alertCtrl.create({
                subTitle: 'カテゴリは5つしか追加できません。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.category.splice(this.category.indexOf(id), 1);
            this.checkedNum--;
        }
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\category\category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<!--\n	<ion-toolbar>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="dismiss()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n	\n		<ion-title>カテゴリ選択</ion-title>\n	</ion-toolbar>\n	-->\n	<ion-navbar>\n		<!--\n		<button ion-button clear icon-only (click)="goBack()" style="height: 2.0rem; z-index: 100;">\n			<ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n		</button>\n		-->\n		<ion-title>お気に入り</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list radio-group>\n		<!--\n		<ion-list-header class="no-border text-blue fs-16" style="margin-bottom: 0px;">\n			\n		</ion-list-header>\n		-->\n		<div class="text-align text-blue fs-16" style="padding-left: 30px; padding-right: 30px; padding-bottom: 15px;" text-wrap>\n			興味があるカテゴリを最大５つまで選択し、画面下の決定ボタンをクリックして下さい。\n		</div>\n\n		<div class="text-align" *ngFor="let cat of categories" style="padding-left: 30px;" text-wrap>\n			<ion-checkbox class="checkbox-square" [checked]="category.indexOf(cat.id)>-1" (ionChange)="addValue($event, cat.id)" color="dark"></ion-checkbox>\n			<span style="padding: 10px;">{{cat.category_name}}</span>\n		</div>\n	</ion-list> \n\n	<!-- Cancel button -->\n    <div class="flex-center" padding-bottom>\n        <div class="text-center">\n            <button class="btn bg-gre width-80 fs-16" (click)="dismiss()" >キャンセル</button>\n        </div>\n    </div>\n\n    <!-- OK button -->\n    <div class="flex-center" padding-bottom>\n        <div class="text-center">\n           <button class="btn btn-blue-autho width-80 fs-16" (click)="submit()" >決定</button>\n        </div>\n   </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continent_continent__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterCompletePage = /** @class */ (function () {
    function RegisterCompletePage(navCtrl, navParams, regPro, storage, modalCtrl, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regPro = regPro;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.categories = [];
        this.category = [];
        this.locations = [];
        this.loginType = this.navParams.get('loginType') || 1; // email: 1
        this.regPro.getCategory().then(function (data) {
            return _this.categories = data['category_list'];
        });
        this.storage.get('sign_id').then(function (sign_id) {
            _this.sign_id = sign_id;
        });
    }
    RegisterCompletePage.prototype.ionViewDidLoad = function () {
    };
    RegisterCompletePage.prototype.selectCategory = function () {
        var _this = this;
        var categoryPageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */], { category: this.category });
        categoryPageModal.onDidDismiss(function (data) {
            _this.category = [];
            _this.category = data['category'];
            /*
            if(data && data['category'] && data['category'].length){
                
            }
            */
        });
        categoryPageModal.present();
    };
    RegisterCompletePage.prototype.selectCity = function () {
        var _this = this;
        var continentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__continent_continent__["a" /* ContinentPage */], { locations: this.locations });
        continentModal.onDidDismiss(function (data) {
            _this.locations = [];
            _this.locations = data['locations'];
        });
        continentModal.present();
    };
    RegisterCompletePage.prototype.register = function () {
        var _this = this;
        if (this.category.length == 0) {
            var alert_1 = this.alertCtrl.create({
                subTitle: '最大5つまで選択可能です。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        else if (this.locations.length == 0) {
            var alert_2 = this.alertCtrl.create({
                subTitle: '最大5つまで選択可能です。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_2.present();
            return;
        }
        else {
            this.loadingShow();
            var location_text = "[";
            for (var i = 0; i < this.locations.length; i++) {
                location_text += this.locations[i].id + ", ";
            }
            var location = location_text.substr(0, location_text.length - 2) + "]";
            var ct_text = "[";
            for (var j = 0; j < this.category.length; j++) {
                ct_text += this.category[j] + ", ";
            }
            var ct = ct_text.substr(0, ct_text.length - 2) + "]";
            this.regPro.registerComplete(ct, location, this.sign_id).then(function (data) {
                _this.loadingHide();
                _this.storage.set('loginType', _this.loginType);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (err) {
                _this.loadingHide();
                console.log(err);
            });
        }
    };
    RegisterCompletePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterCompletePage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'しばらくお待ちください。'
        });
        this.load.present();
    };
    RegisterCompletePage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    RegisterCompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registercomplete',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\registercomplete\registercomplete.html"*/'<!--\n  Generated template for the RegisterCompletePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n<ion-content padding class="app_color">\n\n    <div class="center-div flex-center hi-100">\n\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <p text-center> 興味があるカテゴリー・地域を選択してください </p>\n                </ion-col>\n            </ion-row>\n\n            <!-- Category -->\n            <ion-row>\n                <ion-col (click)="selectCategory()">\n                    <ion-label class="marg-2">\n                        <b>カテゴリー</b>\n                    </ion-label>\n\n                    <!--\n                    <ion-select palceholder="Category" multiple="true" [(ngModel)]="category" class="sel-box" disabled=true>\n                        <ion-option *ngFor="let cat of categories" [value]="cat.id">\n                            <span *ngIf="category.indexOf(cat.id) > -1"> {{cat.category_name}} </span>\n                        </ion-option>\n                    </ion-select>\n                    -->\n                    \n                    <div style="border-radius: 6px;width: 100%;background: #fff !important; max-width: 100% !important;opacity: 1 !important;padding: 8px !important;display: block; min-height: 35px;">\n                        <span *ngFor="let cat of categories"> \n                            <label *ngIf="category.indexOf(cat.id) > -1">\n                                {{cat.category_name}} <br />\n                            </label>\n                        </span>\n                    </div>\n                    \n                </ion-col>\n            </ion-row>\n\n            <!-- City -->\n            <ion-row>\n                <ion-col (click)="selectCity()">\n                    <ion-label class="marg-2">\n                        <b>都市</b>\n                    </ion-label>\n                    \n                    <div style="border-radius: 6px;width: 100%;background: #fff !important; max-width: 100% !important;opacity: 1 !important;padding: 8px !important;display: block; min-height: 35px;">\n                        <label *ngFor="let loc of locations">\n                            {{ loc.name }} <br />\n                        </label>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <!-- Buttons -->\n            <ion-row class="pad-100 marg-top">\n                <ion-col col-6 class="">\n                    <button class="btn width-100per bg-gre" (click)="goBack()">キャンセル</button>\n                </ion-col>\n\n                <ion-col col-6 class="">\n                    <button class="btn width-100per btn-cloud" (click)="register()">登録</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\registercomplete\registercomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], RegisterCompletePage);
    return RegisterCompletePage;
}());

//# sourceMappingURL=registercomplete.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_2__config_index__["a" /* apiPath */] + 'login';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    LoginProvider.prototype.emailLogin = function (email, password, token) {
        var headers = this.headers;
        var body = 'email=' + email + '&password=' + password + '&token=' + token;
        return this.http.post("" + this.api, body, { headers: headers }).toPromise();
    };
    LoginProvider.prototype.socialLogin = function (method, id, username, image, token) {
        var headers = this.headers;
        var body = 'method=' + method + '&id=' + id + '&username=' + username + '&user_icon=' + image + '&token=' + token;
        return this.http.post(this.api + "/social_login", body, { headers: headers }).toPromise();
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mypost_mypost__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postnew_postnew__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorite_favorite__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__setting_setting__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(storage, navCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userChecked = false;
        this.userNotChecked = false;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        storage.get('sign_id').then(function (sign_id) {
            if (sign_id) {
                _this.userChecked = true;
                _this.userNotChecked = false;
                _this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__mypost_mypost__["a" /* MyPostPage */];
                _this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__postnew_postnew__["a" /* PostNewPage */];
                _this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__favorite_favorite__["a" /* FavoritePage */];
                _this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__setting_setting__["a" /* SettingPage */];
            }
            else {
                _this.userNotChecked = true;
                _this.userChecked = false;
            }
        }).catch(function () {
            _this.userNotChecked = true;
            _this.userChecked = false;
        });
    }
    TabsPage.prototype.openTab1 = function () {
        this.parentTabs.select(0);
    };
    TabsPage.prototype.openTab2 = function () {
        if (!this.userChecked) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        else {
            this.parentTabs.select(1);
        }
    };
    TabsPage.prototype.openTab3 = function () {
        if (!this.userChecked) {
            var alert_2 = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_2.present();
            return;
        }
        else {
            this.parentTabs.select(2);
        }
    };
    TabsPage.prototype.openTab4 = function () {
        if (!this.userChecked) {
            var alert_3 = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_3.present();
            return;
        }
        else {
            this.parentTabs.select(3);
        }
    };
    TabsPage.prototype.openTab5 = function () {
        if (!this.userChecked) {
            var alert_4 = this.alertCtrl.create({
                subTitle: 'この機能を使用するにはユーザー登録をしてログインして下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_4.present();
            return;
        }
        else {
            this.parentTabs.select(4);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("parentTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Tabs */])
    ], TabsPage.prototype, "parentTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\tabs\tabs.html"*/'<ion-tabs #parentTabs>\n    <ion-tab [root]="tab1Root" (ionSelect)="openTab1()" tabIcon="hometab"></ion-tab>\n    <ion-tab [root]="tab2Root" (ionSelect)="openTab2()" tabIcon="tilestab"></ion-tab>\n    <ion-tab [root]="tab3Root" (ionSelect)="openTab3()" tabIcon="cameratab"></ion-tab>\n    <ion-tab [root]="tab4Root" (ionSelect)="openTab4()" tabIcon="startab"></ion-tab>\n    <ion-tab [root]="tab5Root" (ionSelect)="openTab5()" tabIcon="listtab"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adview_adview__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adnew_adnew__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ads_ads__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdsPage = /** @class */ (function () {
    function AdsPage(navCtrl, navParams, adPro, setPro, regPro, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adPro = adPro;
        this.setPro = setPro;
        this.regPro = regPro;
        this.loadingCtrl = loadingCtrl;
        this.pet = "kittens";
        this.showAd = [];
        this.allowAd = [];
        this.disAllowAd = [];
        this.user = {}; // current user
        this.category_text = "";
        this.categories = [];
        this.category = [];
        this.loadingflag = false;
    }
    AdsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingShow();
        this.regPro.getCategory().then(function (res) {
            _this.categories = res['category_list'];
            _this.loadingHide();
            _this.getListData();
        }).catch(function (err) {
            _this.loadingHide();
        });
        this.current_user_icon = 'assets/imgs/userse.png';
        this.getAccount();
    };
    AdsPage.prototype.getListData = function () {
        var _this = this;
        this.adPro.getAdsByType(1).then(function (res) {
            _this.showAd = res['list'];
            for (var j = 0; j < _this.showAd.length; j++) {
                var ad = _this.showAd[j];
                var ct_text1 = ad.category;
                var category = ct_text1.split(',');
                var ct_text = "";
                for (var i = 0; i < _this.categories.length; i++) {
                    var cat = _this.categories[i];
                    if (category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • ";
                    }
                }
                ad.category_text = ct_text.substr(0, ct_text.length - 2);
            }
        }).catch(function (err) {
            console.log('API error : ', JSON.stringify(err));
        });
        this.adPro.getAdsByType(2).then(function (res) {
            _this.allowAd = res['list'];
            for (var j = 0; j < _this.allowAd.length; j++) {
                var ad = _this.allowAd[j];
                var ct_text1 = ad.category;
                var category = ct_text1.split(',');
                var ct_text = "";
                for (var i = 0; i < _this.categories.length; i++) {
                    var cat = _this.categories[i];
                    if (category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • ";
                    }
                }
                ad.category_text = ct_text.substr(0, ct_text.length - 2);
            }
        }).catch(function (err) {
            console.log('API error : ', JSON.stringify(err));
        });
        this.adPro.getAdsByType(3).then(function (res) {
            _this.disAllowAd = res['list'];
            for (var j = 0; j < _this.disAllowAd.length; j++) {
                var ad = _this.disAllowAd[j];
                var ct_text1 = ad.category;
                var category = ct_text1.split(',');
                var ct_text = "";
                for (var i = 0; i < _this.categories.length; i++) {
                    var cat = _this.categories[i];
                    if (category.indexOf('' + cat.id) > -1) {
                        ct_text = ct_text + cat.category_name + " • ";
                    }
                }
                ad.category_text = ct_text.substr(0, ct_text.length - 2);
            }
        }).catch(function (err) {
            console.log('API error : ', JSON.stringify(err));
        });
    };
    AdsPage.prototype.getAccount = function () {
        var _this = this;
        this.setPro.getAccount().then(function (res) {
            _this.user = res['account'];
            if (!_this.user.user_icon || _this.user.user_icon == '') {
                _this.user.user_icon = 'assets/imgs/userse.png';
            }
            _this.current_user_icon = _this.user.user_icon;
        });
    };
    AdsPage.prototype.goAdView = function (adId, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adview_adview__["a" /* AdViewPage */], { adId: adId, type: type });
    };
    AdsPage.prototype.goAdNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adnew_adnew__["a" /* AdNewPage */]);
    };
    AdsPage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    AdsPage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    AdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ads',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\ads\ads.html"*/'<!--\n  Manage Ads page\n  - 1st tab: Ads on sale\n  - 2nd tab: Ads on pending\n  - 3rd tab: Ads ended\n-->\n\n<ion-header>\n    <ion-navbar class="">\n        <ion-title class="">\n            <img [src]="current_user_icon" style="width: 40px;" class="img-avtar" />&nbsp;\n            広告一覧\n        </ion-title>\n\n        <ion-buttons right>\n            <button ion-button class="text-trans-initial btn-blue" (click)="goAdNew()">\n                <!-- Apply Ad -->\n                <span class="text-white">広告申請</span>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <div>\n        <ion-segment [(ngModel)]="pet" class="bg-none">\n            <!-- Ad on sale -->\n            <ion-segment-button value="kittens">\n                <span class="text-trans-initial fs-14">掲載中の広告</span>\n            </ion-segment-button>\n\n            <!-- Pending review -->\n            <ion-segment-button value="puppies">\n                <span class="text-trans-initial fs-14">審査待ち</span>\n            </ion-segment-button>\n\n            <!-- Ended Ads -->\n            <ion-segment-button value="dogs">\n                <span class="text-trans-initial fs-14">掲載終了広告</span>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div [ngSwitch]="pet" style="padding-top:5px;">\n        <ion-list *ngSwitchCase="\'kittens\'">\n            <div *ngFor="let ad of showAd">\n                <ion-item style="border-bottom: 0.55px solid #c8c7cc;" (click)="goAdView(ad.id, 1)">\n                    <ion-thumbnail item-start>\n                        <img [src]="ad.file_name" />\n                    </ion-thumbnail>\n                    <p class="mar-auto fs-12">公開情報 {{ad.content}}</p>\n                    <!--<p class="mar-auto fs-12">カテゴリ {{ad.category1_name}}/{{ad.category2_name}}</p>-->\n                    <p class="mar-auto fs-12">カテゴリ {{ ad.category_text }}</p>\n                    <p class="mar-auto fs-12">掲載日数 {{ ad.days }}日間</p>\n                    <p class="mar-auto fs-12">掲載日 {{ ad.reg_date }}</p>\n                    <button ion-button clear item-end>\n                        <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n                    </button>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'puppies\'">\n            <div *ngFor="let ad of allowAd">\n                <ion-item style="border-bottom: 0.55px solid #c8c7cc;" (click)="goAdView(ad.id, 2)">\n                    <ion-thumbnail item-start>\n                        <img [src]="ad.file_name" />\n                    </ion-thumbnail>\n                    <p class="mar-auto fs-12">公開情報 {{ ad.content }}</p>\n                    <p class="mar-auto fs-12">カテゴリ {{ ad.category_text }}</p>\n                    <p class="mar-auto fs-12">掲載日数 {{ ad.days }}日間</p>\n                    <p class="mar-auto fs-12">掲載日 {{ ad.reg_date }}</p>\n                    <button ion-button clear item-end>\n                        <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n                    </button>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'dogs\'">\n            <div *ngFor="let ad of disAllowAd">\n                <ion-item style="border-bottom: 0.55px solid #c8c7cc;" (click)="goAdView(ad.id, 3)">\n                    <ion-thumbnail item-start>\n                        <img [src]="ad.file_name" />\n                    </ion-thumbnail>\n                    <p class="mar-auto fs-12">公開情報 {{ ad.content }}</p>\n                    <p class="mar-auto fs-12">カテゴリ {{ ad.category_text }}</p>\n                    <p class="mar-auto fs-12">掲載日数 {{ ad.days }}日間</p>\n                    <p class="mar-auto fs-12">掲載日 {{ ad.reg_date }}</p>\n                    <button ion-button clear item-end>\n                        <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n                    </button>\n                </ion-item>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\ads\ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ads_ads__["a" /* AdsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ads_ads__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adsubmitview_adsubmitview__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ads_ads__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_register_register__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the AdNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdNewPage = /** @class */ (function () {
    function AdNewPage(navCtrl, navParams, alertCtrl, actionSheetCtrl, camera, adPro, toastCtrl, regPro, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.adPro = adPro;
        this.toastCtrl = toastCtrl;
        this.regPro = regPro;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.adDetails = {
            email: '',
            content: '',
            confEmail: '',
            category: '',
            days: 1,
            price: 100,
            url: ''
        };
        this.imageids = [];
        this.photos = [];
        this.deleted = [0, 0, 0, 0, 0];
        this.categories = [];
        this.category = [];
        this.category_text = "";
        this.loadingflag = false;
    }
    AdNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var self = this;
        this.photos = [];
        this.adId = this.navParams.get('adId');
        this.loadingShow();
        this.regPro.getCategory().then(function (res) {
            _this.categories = res['category_list'];
            if (_this.adId && _this.adId != '') {
                _this.adPro.getDetail(_this.navParams.get('adId')).then(function (res) {
                    _this.adDetails = res['advertise'];
                    _this.adDetails.confEmail = _this.adDetails.email;
                    res['files'].forEach(function (item) {
                        self.photos.push(item.file_name);
                        self.imageids.push(item.id);
                    });
                    var ct_text1 = _this.adDetails.category;
                    _this.category = ct_text1.split(',');
                    var ct_text = "";
                    for (var j = 0; j < _this.categories.length; j++) {
                        var cat = _this.categories[j];
                        if (_this.category.indexOf('' + cat.id) > -1) {
                            ct_text = ct_text + cat.category_name + " • ";
                        }
                    }
                    _this.category_text = ct_text.substr(0, ct_text.length - 3);
                    _this.loadingHide();
                }).catch(function (err) {
                    _this.loadingHide();
                    console.log(err);
                });
            }
            else {
                _this.loadingHide();
            }
        }).catch(function (err) {
            _this.loadingHide();
            // console.log(err);
        });
    };
    AdNewPage.prototype.selectCategory = function () {
        var _this = this;
        var categoryPageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */], { category: this.category });
        categoryPageModal.onDidDismiss(function (data) {
            _this.category = [];
            _this.category = data['category'];
            /*
            if(data && data['category'] && data['category'].length){
                
            }
            */
            var ct_text = "";
            for (var j = 0; j < _this.categories.length; j++) {
                var cat = _this.categories[j];
                if (_this.category.indexOf('' + cat.id) > -1) {
                    ct_text = ct_text + cat.category_name + " • ";
                }
            }
            _this.category_text = ct_text.substr(0, ct_text.length - 3);
        });
        categoryPageModal.present();
    };
    AdNewPage.prototype.submitAd = function () {
        var _this = this;
        this.loadingShow();
        var ct_text = "[";
        for (var j = 0; j < this.category.length; j++) {
            ct_text += this.category[j] + ", ";
        }
        var ct = ct_text.substr(0, ct_text.length - 2) + "]";
        this.adPro.create({
            email: this.adDetails.email,
            cat: ct,
            days: this.adDetails.days,
            url: this.adDetails.url,
            price: this.adDetails.price,
            content: this.adDetails.content,
            file1: this.photos[0],
            file2: this.photos[1],
            file3: this.photos[2],
            file4: this.photos[3],
            file5: this.photos[4]
        }).then(function (res) {
            _this.loadingHide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__adsubmitview_adsubmitview__["a" /* AdSubmitViewPage */]);
        }).catch(function (err) {
            _this.loadingHide();
            console.log(err);
        });
    };
    AdNewPage.prototype.editAd = function () {
        var _this = this;
        var ct_text = "[";
        for (var j = 0; j < this.category.length; j++) {
            ct_text += this.category[j] + ", ";
        }
        var ct = ct_text.substr(0, ct_text.length - 2) + "]";
        this.loadingShow();
        this.adPro.reSubmit({
            id: this.adDetails.id,
            email: this.adDetails.email,
            cat: ct,
            days: this.adDetails.days,
            price: this.adDetails.price,
            content: this.adDetails.content,
            url: this.adDetails.url,
            file1: this.photos[0],
            file2: this.photos[1],
            file3: this.photos[2],
            file4: this.photos[3],
            file5: this.photos[4],
            file1_id: this.imageids[0],
            file2_id: this.imageids[1],
            file3_id: this.imageids[2],
            file4_id: this.imageids[3],
            file5_id: this.imageids[4],
            delete1: this.deleted[0],
            delete2: this.deleted[1],
            delete3: this.deleted[2],
            delete4: this.deleted[3],
            delete5: this.deleted[4],
        }).then(function (res) {
            _this.loadingHide();
            _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_3__ads_ads__["a" /* AdsPage */]);
        }).catch(function (err) {
            _this.loadingHide();
            console.log(err);
        });
    };
    AdNewPage.prototype.applyAd = function () {
        var _this = this;
        if (this.category.length == 0) {
            var alert_1 = this.alertCtrl.create({
                subTitle: '最大5つまで選択可能です。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        if (this.adDetails.email == null || this.adDetails.email == '') {
            var alert_2 = this.alertCtrl.create({
                subTitle: 'メールアドレスを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_2.present();
            return;
        }
        if (this.adDetails.email !== this.adDetails.confEmail) {
            var alert_3 = this.alertCtrl.create({
                subTitle: 'メールアドレスが一致しておりません。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_3.present();
            return;
        }
        if (this.adDetails.content == null || this.adDetails.content == '') {
            var alert_4 = this.alertCtrl.create({
                subTitle: '送信内容を入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_4.present();
            return;
        }
        if (this.adDetails.days == 0 || this.adDetails.price == 0) {
            var alert_5 = this.alertCtrl.create({
                subTitle: '掲載する日数と予算を入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_5.present();
            return;
        }
        if (this.adDetails.url == null || this.adDetails.url == '') {
            var alert_6 = this.alertCtrl.create({
                subTitle: 'URLを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_6.present();
            return;
        }
        // if (this.photos.length==0 || this.photos[0]=='' || this.photos[1]=='' || this.photos[2]=='' || this.photos[3]=='' || this.photos[4]=='' || this.photos[0]==undefined || this.photos[1]==undefined || this.photos[2]==undefined || this.photos[3]==undefined || this.photos[4]==undefined) {
        if (this.photos.length == 0) {
            var alert_7 = this.alertCtrl.create({
                subTitle: '少なくとも1枚は画像を掲載して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_7.present();
            return;
        }
        var alert = this.alertCtrl.create({
            title: '確認',
            message: 'この内容で申請しますか？',
            buttons: [
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '申請する',
                    handler: function () {
                        if (_this.adId)
                            _this.editAd();
                        else
                            _this.submitAd();
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AdNewPage.prototype.openCamera = function (value) {
        var _this = this;
        console.log(value + ":value");
        var actionSheet = this.actionSheetCtrl.create({
            title: '写真を選択',
            buttons: [
                {
                    text: 'カメラを起動する',
                    role: 'destructive',
                    handler: function () {
                        _this.takePhotoC(value);
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'ライブラリから選択',
                    handler: function () {
                        _this.takePhotoG(value);
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AdNewPage.prototype.takePhotoC = function (value) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 250,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos[value] = _this.base64Image;
        }, function (err) {
            console.log(err);
        });
    };
    AdNewPage.prototype.takePhotoG = function (value) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 250,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos[value] = _this.base64Image;
        }, function (err) {
            console.log(err);
        });
    };
    AdNewPage.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'この画像を削除致しますか？',
            message: '',
            buttons: [
                {
                    text: 'いいえ',
                    handler: function () {
                    }
                }, {
                    text: 'はい',
                    handler: function () {
                        _this.photos[index] = '';
                        _this.deleted[index] = 1;
                    }
                }
            ]
        });
        confirm.present();
    };
    AdNewPage.prototype.loadingShow = function () {
        if (this.loadingflag == false) {
            this.load = this.loadingCtrl.create({
                content: 'お待ちください。。。'
            });
            this.load.present();
        }
        this.loadingflag = true;
    };
    AdNewPage.prototype.loadingHide = function () {
        if (this.loadingflag == true) {
            this.load.dismiss();
        }
        this.loadingflag = false;
    };
    AdNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adnew',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\adnew\adnew.html"*/'<!-- Submit Ad application -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>広告配信申請</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-row class="pad-05">\n        <ion-col col-2></ion-col>\n\n        <ion-col col-4 style="position: relative;" *ngFor="let i of [1,1]; let ind = index">\n            <img *ngIf="!photos[ind]" src="assets/imgs/cam{{ind+1}}.png" class="tiles-image" (click)="openCamera(ind)" />\n            <img *ngIf="photos[ind]" [src]="photos[ind]" class="tiles-image" />\n            <ion-icon *ngIf="photos[ind]"  name="ios-close-circle"  (click)="deletePhoto(ind)" style="position: absolute;right: 14px;top: 14px;"></ion-icon>\n        </ion-col>\n\n        <ion-col col-2></ion-col>\n    </ion-row>\n\n    <ion-row class="pad-05">\n        <ion-col col-4 style="position: relative;" *ngFor="let i of [1,1,1]; let ind = index">\n            <img *ngIf="!photos[ind+2]" src="assets/imgs/cam{{ind+3}}.png" class="tiles-image" (click)="openCamera(ind+2)" />\n            <img *ngIf="photos[ind+2]" [src]="photos[ind+2]" class="tiles-image" />\n            <ion-icon *ngIf="photos[ind+2]"  name="ios-close-circle"  (click)="deletePhoto(ind+2)" style="position: absolute;right: 14px;top: 14px;"></ion-icon>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="pad-10">\n        <ion-textarea [(ngModel)]="adDetails.content" class="border-blue ltr-spc fs-12" placeholder="200文字以内で入カ してださい.">\n        </ion-textarea>\n    </ion-row>\n\n    <ion-list class="mar-auto pad-10">\n        <h6 style="margin-top: 10px;margin-left: 10px" class="text-blue">広告URL</h6>\n        <ion-row >\n            <ion-col class="no-padding">\n                <ion-input class="border-blue" no-padding [(ngModel)]="adDetails.url"></ion-input>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <br />\n    <br />\n\n    <!-- Category -->\n    <ion-list class="mar-auto pad-15" no-lines>\n        <h6 class="text-blue">カテゴリ</h6>\n        <ion-row class="" (click)="selectCategory()" >\n            <ion-col col-12 class="no-padding">\n                <ion-row class="selct-border">\n                    <ion-col col-10 class="flex-center no-padding">\n                        <span float-left style="width: 100%;">{{ category_text }}</span>\n                        <!--\n                        <span *ngFor="let cat of categories"> \n                            <label *ngIf="category.indexOf(cat.id) > -1">\n                                {{cat.category_name}} • \n                            </label>\n                        </span>\n                        -->\n                    </ion-col>\n                    <ion-col col-2 class="flex-center">\n                        <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <!-- Days select -->\n    <ion-list class="mar-auto pad-15" no-lines>\n        <h6 class="text-blue">広告掲載期間</h6>\n        <ion-row class="">\n            <ion-col col-12 class="no-padding">\n                <ion-row class=" selct-border">\n                    <ion-col col-10 class="flex-center no-padding">\n                        <ion-select class="select-label wid-100 " [(ngModel)]="adDetails.days">\n                            <!-- <ion-option value="Cm" [selected]="true">Please select</ion-option> -->\n                            <ion-option value="1" [selected]="true">1</ion-option>\n                            <ion-option value="2">2</ion-option>\n                            <ion-option value="3">3</ion-option>\n                            <ion-option value="4">4</ion-option>\n                            <ion-option value="5">5</ion-option>\n                            <ion-option value="6">6</ion-option>\n                            <ion-option value="7">7</ion-option>\n                            <ion-option value="8">8</ion-option>\n                            <ion-option value="9">9</ion-option>\n                            <ion-option value="10">10</ion-option>\n                            <ion-option value="11">11</ion-option>\n                            <ion-option value="12">12</ion-option>\n                            <ion-option value="13">13</ion-option>\n                            <ion-option value="14">14</ion-option>\n                            <ion-option value="15">15</ion-option>\n                            <ion-option value="16">16</ion-option>\n                            <ion-option value="17">17</ion-option>\n                            <ion-option value="18">18</ion-option>\n                            <ion-option value="19">19</ion-option>\n                            <ion-option value="20">20</ion-option>\n                            <ion-option value="21">21</ion-option>\n                            <ion-option value="22">22</ion-option>\n                            <ion-option value="23">23</ion-option>\n                            <ion-option value="24">24</ion-option>\n                            <ion-option value="25">25</ion-option>\n                            <ion-option value="26">26</ion-option>\n                            <ion-option value="27">27</ion-option>\n                            <ion-option value="28">28</ion-option>\n                            <ion-option value="29">29</ion-option>\n                            <ion-option value="30">30</ion-option>\n                        </ion-select>\n                    </ion-col>\n                    <ion-col col-2 class="flex-center">\n                        <ion-icon name="ios-arrow-forward" class="fs-24"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n            <!--\n            <ion-col col-4 class="flex-center">\n            </ion-col>\n            -->\n        </ion-row>\n    </ion-list>\n\n    <!-- Price calculation -->\n    <ion-row class="bg-ligcloud" style="margin-top: 20px;">\n        <ion-col class="flex-center" style="width: 30%; max-width: 30%;">\n            <div text-center style="width: 100%;">\n                <span style="font-size: 10px;">掲載日数</span>\n                <br>\n                <br>\n                <p class="bor-pad-set" style="background: white;font-size: 1.2rem;">{{adDetails.days}} 日</p> \n            </div>\n        </ion-col>\n\n        <ion-col class="flex-center" style="width: 5%; max-width: 4%;" >\n            <!-- <ion-icon name="md-close"></ion-icon> -->\n            <span style="margin-top: 30px;">X</span>\n        </ion-col>\n        \n        <ion-col class="flex-center" style="width: 30%; max-width: 32%;">\n            <div text-center style="width: 100%;">\n                <span style="font-size: 10px;">1日あたりの掲載料金</span>\n                <br>\n                <br>\n                <p class="bor-pad-set" style="background: white;font-size: 1.2rem;">¥ {{adDetails.days}}</p>\n            </div>\n        </ion-col>\n\n        <ion-col class="flex-center" style="width: 5%; max-width: 4%;">\n            <!-- <img src="assets/imgs/cam1.png" class="tiles-image" /> -->\n            <span style="margin-top: 30px;">=</span>\n        </ion-col>\n\n        <ion-col class="flex-center" style="width: 30%; max-width: 30%;">\n            <div text-center style="width: 100%;">\n                <span style="font-size: 10px;">合計広告掲載料金</span>\n                <br>\n                <br>\n                <p class="bor-pad-set" style="background: white;font-size: 1.2rem;" >¥ {{adDetails.days*adDetails.price}}</p> \n            </div>\n        </ion-col>\n    </ion-row>\n\n    <br />\n\n    <ion-row class="pad-15">\n        <ion-col>\n            <p class="marg-2 fs-w8-5 text-blue fs-15">連絡用メールアドレス</p>\n            <div>\n                <ion-input type="text" [(ngModel)]="adDetails.email" class="box-p" style="padding:0px !important;" placeholder="Mail">Mail</ion-input>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="pad-15">\n        <ion-col>\n            <p class="marg-2 fs-w8-5 text-blue fs-12">確認のため、メールアドレスを再度入力してください</p>\n            <div>\n                <ion-input type="text" [(ngModel)]="adDetails.confEmail" class="box-p" style="padding:0px !important;" placeholder="Mail"></ion-input>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <br />\n    <br />\n\n    <!-- Apply with this content -->\n    <ion-row class="row" style="margin-bottom: 40px;">\n        <ion-col class="col" text-center="">\n            <button class="btn-blueq " (click)="applyAd()">この内容で申請をする</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\adnew\adnew.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ads_ads__["a" /* AdsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], AdNewPage);
    return AdNewPage;
}());

//# sourceMappingURL=adnew.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ads_ads__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userprofile_userprofile__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__noticelist_noticelist__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menusetting_menusetting__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__languagesetting_languagesetting__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__request_request__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__privacy_privacy__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__terms_terms__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, alertCtrl, setPro, storage, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setPro = setPro;
        this.storage = storage;
        this.app = app;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
    };
    SettingPage.prototype.GoUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__userprofile_userprofile__["a" /* UserProfilePage */]);
    };
    SettingPage.prototype.GoLanguageSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__languagesetting_languagesetting__["a" /* LanguageSettingPage */]);
    };
    SettingPage.prototype.GoAdsList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ads_ads__["a" /* AdsPage */]);
    };
    SettingPage.prototype.GoUserNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__noticelist_noticelist__["a" /* NoticeListPage */]);
    };
    SettingPage.prototype.GoRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__request_request__["a" /* RequestPage */]);
    };
    SettingPage.prototype.GoPushSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__menusetting_menusetting__["a" /* MenuSettingPage */]);
    };
    SettingPage.prototype.GoPrivacyPolicy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__privacy_privacy__["a" /* PrivacyPage */]);
    };
    SettingPage.prototype.GoTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__terms_terms__["a" /* TermsPage */]);
    };
    SettingPage.prototype.GoWelcomeScreen = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__welcome_welcome__["a" /* WelcomePage */]);
        });
    };
    SettingPage.prototype.LogoutConfirmation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ログアウト',
            message: 'ログアウトしますか？',
            buttons: [
                {
                    text: 'はい',
                    role: 'cancel',
                    handler: function () {
                        _this.GoWelcomeScreen();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'いいえ',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SettingPage.prototype.DeleteConfirmation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'アカウントを削除する',
            message: 'の操作を実行すると、すべての情報が削除されます。復元することはできません。宜しいですか？',
            buttons: [
                {
                    text: '削除',
                    handler: function () {
                        _this.setPro.deleteAccount().then(function () {
                            _this.GoWelcomeScreen();
                        });
                    }
                },
                {
                    text: 'キャンセル',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title><!-- Menu -->メニュー</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div>\n		<p class="bg-blues pad-5-10 text-white mar-auto fs-16"><!-- Account -->アカウント</p>\n		<ion-row>\n		<ion-col class="no-padding bor-bot-gr" >\n			<button class="item item-block item-ios select-cat" (click)="GoUser()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!-- Confirm / edit account information -->アカウント情報の確認/編集\n						</ion-label>\n					</div>\n				</div>\n			</button>\n			</ion-col>\n		</ion-row>\n	</div>\n	<br><br><br>\n\n	<div>\n		<p class="bg-blues pad-5-10 text-white mar-auto fs-16"><!-- Setting -->設定</p>\n		<ion-row>\n		<ion-col class="no-padding bor-bot-gr"  >\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoLanguageSetting()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!-- Language -->言語\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoAdsList()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							広告配信申請\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoUserNews()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!--  News from App -->アプリからのお知らせ\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoRequest()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!-- Contact us -->お問い合わせ\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoPushSetting()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!--  Push notification settings -->プッシュ通知設定\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!--  Version -->バージョン\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoPrivacyPolicy()" >\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!-- Privacy Policy -->プライバシーポリシー\n						</ion-label>\n					</div>\n				</div>\n			</button>\n\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="GoTerms()">\n				<div class="item-inner no-border">\n					<div class="input-wrapper">\n						<ion-label class="label label-ios mar-auto">\n							<!-- Terms of service -->利用規約\n						</ion-label>\n					</div>\n				</div>\n			</button>\n			</ion-col>\n		</ion-row>\n	</div>\n\n	<div>\n		<p class="bg-blues pad-5-10 text-white mar-auto fs-16"><!-- My Menu -->マイメニュー</p>\n		<ion-row>\n			<ion-col class="no-padding " >\n			<button class="item item-block item-ios select-cat bor-bot-gr" (click)="LogoutConfirmation()" >\n				<ion-label class="label label-ios mar-auto">\n					<!-- Logout -->ログアウト\n				</ion-label>\n			</button>\n			</ion-col>\n		</ion-row>\n		<br>\n\n		<ion-row>\n			<ion-col class="no-padding " >\n			<button class="item item-block item-ios select-cat" (click)="DeleteConfirmation()" >\n				<ion-label class="label label-ios mar-auto text-red fs-18">\n					<b><!-- Delete account -->アカウントの削除</b>\n					<p class="fs-12" style="padding-top: 2px;"><!-- Deleting an account can not restore information. -->アカウントを削除すると情報は復元できません。</p>\n				</ion-label>\n			</button>\n			</ion-col>\n		</ion-row>\n	</div>\n\n	<br><br><br>\n\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContinentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_country__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContinentPage = /** @class */ (function () {
    function ContinentPage(navCtrl, navParams, setPro, modalCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setPro = setPro;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.continents = [];
        this.locations = [];
        this.locations = navParams.get('locations') || [];
        this.setPro.getLocations(0).then(function (data) {
            return _this.continents = data['location_list'];
        });
    }
    ContinentPage.prototype.ionViewDidLoad = function () {
    };
    ContinentPage.prototype.dismiss = function () {
        var data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    };
    ContinentPage.prototype.submit = function () {
        var data = { 'locations': this.locations };
        this.viewCtrl.dismiss(data);
    };
    ContinentPage.prototype.gotoCountry = function (continent) {
        var _this = this;
        var countryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__country_country__["a" /* CountryPage */], { 'continent': continent, 'locations': this.locations });
        countryModal.onDidDismiss(function (data) {
            if (data && data['locations'] && data['locations'].length) {
                _this.locations = data['locations'];
            }
        });
        countryModal.present();
    };
    ContinentPage.prototype.removeItem = function (location) {
        for (var i = 0; i < this.locations.length; i++) {
            var temp = this.locations[i];
            if (temp.id == location.id) {
                this.locations.splice(i, 1);
                return;
            }
        }
    };
    ContinentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-continent',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\continent\continent.html"*/'<ion-header>\n    \n    <ion-navbar>\n        <!--\n        <button ion-button clear icon-only (click)="dismiss()" style="height: 2.0rem; z-index: 100;">\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n        -->\n        \n        <ion-title>地域選択</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n     \n    <ion-list class="last-item-border">\n        <!--\n        <ion-list-header class="no-border text-blue" text-wrap style="font-size: 1.9rem !important;">\n            興味がある地域を選択してください。<br>\n            最大5つまで選択可能です。\n        </ion-list-header>\n        -->\n        <ion-label class="no-border text-blue" text-wrap style="font-size: 1.7rem !important;margin-left: 30px;">\n            興味がある地域を選択してください。<br>\n            最大5つまで選択可能です。\n        </ion-label>\n\n        <!-- Continents -->\n        <button no-padding class="item-continent" ion-item *ngFor="let c of continents" (click)="gotoCountry(c)">\n            {{ c.name }}\n            <ion-icon item-right class="item-right-icon" name="ios-arrow-forward-outline"></ion-icon>\n        </button>\n    </ion-list>\n\n    <!-- Selected locations -->\n    <ion-list no-lines style="margin-left: 30px;">\n    	<ion-list-header margin-top class="no-border text-blue fs-16">\n            選択した地域\n        </ion-list-header>\n        <ion-item ion-item *ngFor="let l of locations" class="selected-continent">\n            <button no-padding class="item-selected-continent" ion-button outline round style="font-size: 1.7rem !important;">\n                {{ l.name }}\n                <ion-icon icon-right class="selected-continent-icon" name="md-close" (click)="removeItem(l)"></ion-icon>\n            </button> \n        </ion-item>\n    </ion-list>\n    \n    <div class="flex-center" padding-bottom *ngIf="locations.length > 0">\n        <div class="text-center">\n            <button class="btn btn-blue-autho fs-16" (click)="submit()" >この地域を登録</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\continent\continent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], ContinentPage);
    return ContinentPage;
}());

//# sourceMappingURL=continent.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noticeview_noticeview__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postdetail_postdetail__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NoticeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticeListPage = /** @class */ (function () {
    function NoticeListPage(navCtrl, navParams, storage, setPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.setPro = setPro;
        this.pet = "kittens";
        this.notices = [];
        this.comments = [];
    }
    NoticeListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setPro.getManagerNotice().then(function (res) {
            _this.notices = res['notice_list'];
        });
        this.setPro.getCommentsNotice().then(function (res) {
            _this.comments = res['content'];
            console.log(_this.comments);
        });
    };
    NoticeListPage.prototype.gotoNoticeView = function (notice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__noticeview_noticeview__["a" /* NoticeViewPage */], { notice: notice });
    };
    NoticeListPage.prototype.gotoPostDetail = function (comment) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__postdetail_postdetail__["a" /* PostDetailPage */], { post_id: comment.id, type: 1 });
    };
    NoticeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticelist',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\noticelist\noticelist.html"*/'<!--\n  Generated template for the NoticeListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            <!-- News -->アプリからのお知らせ</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div>\n        <ion-segment [(ngModel)]="pet" class="bg-none">\n            <ion-segment-button value="kittens">\n                <span class="text-trans-initial fs-16">\n                    <!-- Notice -->お知らせ</span>\n            </ion-segment-button>\n            <ion-segment-button value="puppies">\n                <span class="text-trans-initial fs-16">\n                    <!-- Comment -->コメント</span>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="pet" style="padding-top:5px;">\n        <div *ngSwitchCase="\'kittens\'">\n            <ion-list *ngFor="let notice of notices" class="bor-bot-1 ">\n                <ion-row>\n                    <ion-col col-2 class="flex-center">\n                        <ion-avatar item-start class="">\n                            <img src="assets/imgs/userse.png" class="img-avtar mar-auto" />\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col col-10 (click)="gotoNoticeView(notice)">\n                        <p class="fs-14">{{notice.username}}\n                            <ion-note class="fs-14 pad-right float-right text-black">\n                                {{notice.reg_date}}\n                            </ion-note>\n                        </p>\n                        <p class="fs-14">\n                            {{notice.content}}\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n            <p text-center>続きを見る</p>\n        </div>\n\n        <div *ngSwitchCase="\'puppies\'">\n            <ion-list *ngFor="let comment of comments;" class="bor-bot-1 ">\n                <ion-row (click)="gotoPostDetail(comment)">\n                    <ion-col col-2>\n                        <ion-avatar item-start>\n                            <img *ngIf="comment.user_icon" [src]="comment.user_icon" class="img-avtar mar-auto" />\n                            <img *ngIf="!comment.user_icon" src="assets/imgs/userse.png" class="img-avtar mar-auto" />\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col col-10 >\n                        <p class="fs-14">\n                            <ion-note class="fs-14 pad-right float-right text-black">\n                                {{comment.reg_date}}\n                            </ion-note>\n                        </p>\n                        <br>\n                        <ion-row>\n                            <ion-col col-8 class="no-padding">\n                                <p class="fs-14">\n                                    {{comment.content}}\n                                </p>\n                            </ion-col>\n                            <ion-col col-4 class="no-padding">\n                                <img [src]="comment.raw_file_name" class="fav-image" padding />\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\noticelist\noticelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]])
    ], NoticeListPage);
    return NoticeListPage;
}());

//# sourceMappingURL=noticelist.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolationReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ads_ads__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ViolationReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViolationReportPage = /** @class */ (function () {
    function ViolationReportPage(navCtrl, navParams, alertCtrl, setPro, postPro, adsPro) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setPro = setPro;
        this.postPro = postPro;
        this.adsPro = adsPro;
        this.postData = {};
        this.origincontent = "";
        this.postData = this.navParams.get('post');
        this.sign_id = this.navParams.get('sign_id');
        this.type = this.navParams.get('type');
        this.setPro.getAccount().then(function (res) {
            _this.currentusername = res['account'].username;
        });
        this.origincontent = this.postData.comment || this.postData.content;
    }
    ViolationReportPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.postData = this.navParams.get('post');
        var d = new Date();
        this.date = new Date(this.postData.reg_date).getDate() + '-' + (new Date(this.postData.reg_date).getMonth() + 1) + '-' + new Date(this.postData.reg_date).getFullYear();
        this.setPro.getAccount().then(function (res) {
            _this.currentusername = res['account'].username;
        });
    };
    ViolationReportPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ViolationReportPage.prototype.confirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'ご報告ありがとうございました。',
            buttons: [
                {
                    text: '閉じる',
                    handler: function () {
                        _this.setPro.sendReport(_this.postData.user_id, _this.type, _this.content, _this.postData.reg_date, _this.postData.id).then(function () {
                            _this.goBack();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ViolationReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-violationreport',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\violationreport\violationreport.html"*/'<!--\n  Generated template for the ViolationReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <!-- Violation Report -->\n        <ion-title>\n            違反報告\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<!-- \n<ion-header>\n    <ion-navbar color="">\n        <ion-buttons left>\n            <button ion-button icon-only class="text-trans-initial ">\n        	    <span class="color-blue">Cancel</span>\n                <ion-icon name="chatboxes"></ion-icon>\n            </button>\n        </ion-buttons>\n    \n        <ion-title class="fs-12">Post violation report</ion-title>\n    \n        <ion-buttons right>\n            <button ion-button icon-only class="text-trans-initial color-blue">\n      	    <span class="color-blue">Send</span>\n      	    <ion-icon name="notifications"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> \n-->\n\n<ion-content padding>\n\n    <!-- \n    <div>\n    	<ion-list>\n            <ion-item>\n                <ion-label fixed>Destination: </ion-label>\n                <ion-input type="text" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Cc/Bcc: </ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Subject: </ion-label>\n                <ion-input type="text" placeholder="Post violation report">Post violation report</ion-input>\n            </ion-item>\n        </ion-list>\n        \n        <p style="line-height: 36px;">\n       	    Violation user name 【User name 123】<br>\n       	        · Target post 【Caption】<br>\n      	    Post time [2017/11/1 18: 00] <br>\n                · Violation contents 【Comment comment】<br>\n      	    Please specify the specific reason.\n        </p>\n    </div> \n    -->\n\n    <div>\n        <!-- Please let us know the details of this issue about this post. -->\n        <p>\n            この投稿についての問題点をお知らせください。\n        </p>\n        <div>\n            <div style="    line-height: 36px;" *ngIf="postData">\n                <p>\n                    ・違反ユーザー名:-　[{{postData.username || postData.user_name}}]\n                </p>\n                <p>\n                    ・対象投稿:-　[{{currentusername}}]\n                </p>\n                <p>\n                    ・投稿時刻:-　[{{ date }}]\n                </p>\n                <p>\n                    ・投稿内容:-　[{{origincontent}}]\n                </p>\n            </div>\n        </div>\n        <p>\n            具体的な内容をご入力ください。\n        </p>\n        <div>\n            <!--  \n                <textarea  name="comment" id="" placeholder="コメント" class="wid-100 " rows="8" style="border: 1px solid grey;"> \n                </textarea> \n            -->\n            <textarea [(ngModel)]="content" name="comment" id="comment" class="no-padding" rows="8" class="wid-100 " style="border: 1px solid grey;">\n            </textarea>\n        </div>\n\n        <ion-row class="row">\n            <ion-col class="col" text-center="">\n                <button class="btn-blueq fs-20 " (click)="confirm()">送信する</button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\violationreport\violationreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ads_ads__["a" /* AdsProvider */]])
    ], ViolationReportPage);
    return ViolationReportPage;
}());

//# sourceMappingURL=violationreport.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CommentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentModalPage = /** @class */ (function () {
    function CommentModalPage(navCtrl, viewCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.comment = navParams.get('comment') || [];
    }
    CommentModalPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    CommentModalPage.prototype.ionViewDidLoad = function () {
    };
    CommentModalPage.prototype.closeModal = function () {
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
        var data = { 'comment': this.comment };
        this.viewCtrl.dismiss(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CommentModalPage.prototype, "myInput", void 0);
    CommentModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment-modal',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\comment-modal\comment-modal.html"*/'<!--\n  Generated template for the CommentModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <!--\n        <ion-buttons left>\n            <button ion-button clear icon-only (click)="closeModal()" style="height: 2.0rem; z-index: 100;">\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        -->\n        \n        <ion-title class="fs-12">投稿を作成</ion-title>\n\n        <ion-buttons right>\n            <button ion-button class="text-trans-initial color-blue" (click)="closeModal()">\n                <span class="color-blue">完了</span>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n    <!--\n    <ion-textarea [(ngModel)]="comment" placeholder="コメント" class="no-border" style="width: 100%; height: 95%;">\n    </ion-textarea>\n    -->\n    <textarea #myInput id="myInput" rows="1" placeholder="コメント" maxLength="500" (keyup)="resize()" [(ngModel)]="comment"></textarea>\n    \n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\comment-modal\comment-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], CommentModalPage);
    return CommentModalPage;
}());

//# sourceMappingURL=comment-modal.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, navParams, alertCtrl, setPro, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setPro = setPro;
        this.toastCtrl = toastCtrl;
    }
    RequestPage.prototype.ionViewDidLoad = function () {
    };
    RequestPage.prototype.sendRequest = function () {
        var _this = this;
        if (this.email == null || this.email == '') {
            var toast = this.toastCtrl.create({
                message: "メールアドレスを入力して下さい。",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        if (this.email !== this.confirm_email) {
            var toast = this.toastCtrl.create({
                message: "メールアドレスが一致しておりません。",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        if (this.content == null || this.content == '') {
            var toast = this.toastCtrl.create({
                message: "お問い合せ内容を入力してください。",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'お問い合わせを受付けました',
            buttons: [{
                    text: 'はい',
                    handler: function () {
                        _this.setPro.contactUs(_this.content, _this.email)
                            .then(function () { return _this.navCtrl.pop(); });
                    }
                }]
        });
        alert.present();
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\request\request.html"*/'<!--\n  Generated template for the request page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>お問い合わせ</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!--\n    <div>\n        <p class="fs-14 ltr-spc">\n            お問い合わせ返信はメールアドレス宛です。\n        </p>\n    </div>\n    -->\n\n    <ion-row>\n        <ion-col>\n            <p class="marg-2 fs-w8-5 fs-12 mar-auto">返信用メールアドレス</p>\n            <div  class="border" style="width: 50%">\n                <ion-input type="text" [(ngModel)]="email"></ion-input>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row >\n        <ion-col>\n            <p class="marg-2 fs-w8-5 fs-12 mar-auto">メールアドレス（確認用）</p>\n            <div class="border" style="width: 50%">\n                <ion-input type="text" [(ngModel)]="confirm_email"></ion-input>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="border" style="margin-top: 10px;">\n        <ion-col>\n            <textarea [(ngModel)]="content" name="" id="" placeholder="お問い合わせ内容" class="wid-100 no-border" style="height: 150px;">お問い合わせ内容\n            </textarea>\n        </ion-col>\n    </ion-row>\n    \n    <!-- \n    <ion-note class="fs-14 pad-right float-right text-black">15/???</ion-note> \n    -->\n    <br>\n\n    <!-- \n    <div>\n		<p class="fs-14 ltr-spc">\n			お問い合わせお問い合わせ返信は設定メールアドレス宛です。<br> テキストテキスト テキストテキストテキスト テキストテキストテキストテキスト \n		</p>\n    </div>\n    -->\n    <br>\n    <br>\n    <br>\n\n    <ion-row class="row">\n        <ion-col class="col" text-center="">\n            <!-- Send -->\n            <button class="btn-blueq fs-20 " (click)="sendRequest()">送信する</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\request\request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registercomplete_registercomplete__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emailforgot_emailforgot__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EmailLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailLoginPage = /** @class */ (function () {
    function EmailLoginPage(navCtrl, navParams, logPro, storage, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.logPro = logPro;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.token = "";
    }
    EmailLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            if (data) {
                _this.token = data;
            }
        });
    };
    EmailLoginPage.prototype.goToForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__emailforgot_emailforgot__["a" /* EmailForgotPage */]);
    };
    EmailLoginPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EmailLoginPage.prototype.loginEmail = function () {
        var _this = this;
        if (!this.email && !this.password) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'メールアドレスとパスワードを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        else if (!this.email) {
            var alert_2 = this.alertCtrl.create({
                subTitle: '有効なメールアドレスを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_2.present();
            return;
        }
        else if (!this.password) {
            var alert_3 = this.alertCtrl.create({
                subTitle: 'パスワードを入力して下さい。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_3.present();
            return;
        }
        var patt = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
        var res = patt.test(this.email);
        if (res) {
            this.loadingShow();
            this.logPro.emailLogin(this.email, this.password, this.token).then(function (res) {
                _this.loadingHide();
                if (!res['content']['category'] || res['content']['category'] == "" || !res['content']['location'] || res['content']['location'] == "") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registercomplete_registercomplete__["a" /* RegisterCompletePage */], { 'loginType': '1' });
                }
                else {
                    _this.storage.set('loginType', 1);
                    _this.storage.set('sign_id', res['content']['sign_id']).then(function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                    });
                }
            }).catch(function (err) {
                _this.loadingHide();
                var alert = _this.alertCtrl.create({
                    subTitle: '入力されたメールアドレスまたはパスワードがアカウントと一致しません。',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                            }
                        }
                    ]
                });
                alert.present();
                _this.password = undefined;
            });
        }
        else {
            var alert_4 = this.alertCtrl.create({
                subTitle: '有効なメールアドレスを入力してください。',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_4.present();
        }
    };
    EmailLoginPage.prototype.loadingShow = function () {
        this.load = this.loadingCtrl.create({
            content: 'お待ちください。。。'
        });
        this.load.present();
    };
    EmailLoginPage.prototype.loadingHide = function () {
        this.load.dismiss();
    };
    EmailLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emaillogin',template:/*ion-inline-start:"E:\Develop\IONIC\wOw\src\pages\emaillogin\emaillogin.html"*/'<!--\n  Generated template for the EmailLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class="app_color">\n    <div class="flex-center hi-100">\n        <div class="marg-top">\n            <div class="">\n                <h4 class="text-center">ログイン</h4>\n            </div>\n\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">メールアドレス</p>\n                <input [(ngModel)]="email" type="text" class="inp-box" />\n                <!--   \n                <ion-input class="inp-box" [(ngModel)]="abc" name="password" (keyup)="Alphanumeric()" type="text" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d*\w]{5,}$" required>\n                </ion-input> \n                -->\n            </div>\n\n            <div class="center-div">\n                <p class="marg-2 fs-w8-5 fs-16">パスワード</p>\n                <input type="password" [(ngModel)]="password" class="inp-box" />\n                <br>\n                <h4 class=" fs-w8-5 fs-16 blue-light" (click)="goToForgot()">パスワードをお忘れの方</h4>\n            </div>\n            \n            <div class="text-center marg-top">\n                <ion-grid class="marg-top">\n                    <ion-row>\n                        <ion-col col-6>\n                            <button class="btn width-100per bg-gre fs-w8-5" (click)="goBack()">キャンセル</button>\n                        </ion-col>\n\n                        <ion-col col-6>\n                            <button class="btn width-100per btn-blue-autho" (click)="loginEmail()">ログイン</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\IONIC\wOw\src\pages\emaillogin\emaillogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EmailLoginPage);
    return EmailLoginPage;
}());

//# sourceMappingURL=emaillogin.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map
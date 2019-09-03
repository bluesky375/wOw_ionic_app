import { apiPath } from '../../config/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { toPromise } from "rxjs/operator/toPromise";

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {

    api: string = apiPath + 'home';
    headers: HttpHeaders;

    constructor(public http: HttpClient, private storage: Storage) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    // Homepage - get posts & ads for logged in user
    getAllFromLogged(lati, long) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&long=${long}&lati=${lati}`;
            return this.http.post(`${this.api}/get_posts_ads`, body, {headers}).toPromise();
        })
    }

    // Homepage - get posts & ads for non-logged in user
    getAllFromNonLogged(lati, long) {
        let headers = this.headers;
        let body = `long=${long}&lati=${lati}`;
        return this.http.post(`${this.api}/get_posts_non`, body, { headers }).toPromise();
    }

    getAccount() {
        return this.storage.get('sign_id').then(id => {
            return this.http.get(`${this.api}/get_account?sign_id=${id}`).toPromise();
        });
    }  

    updateAccount(userId, userName, email, password, userIcon, category, location) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = ''
            if (password != "") {
                body = `sign_id=${id}&user_id=${userId}&username=${userName}&email=${email}&password=${password}&user_icon=${userIcon}&category=${category}&location=${location}`;
            } else {
                body = `sign_id=${id}&user_id=${userId}&username=${userName}&email=${email}&user_icon=${userIcon}&category=${category}&location=${location}`;
            }
            
            return this.http.post(`${this.api}/update_account`, body, { headers }).toPromise();
        })
    }

    deleteAccount() {
        return this.storage.get('sign_id').then(id => {
            return this.http.get(`${this.api}/delete_account?sign_id=${id}`).toPromise();
        })
    }

    contactUs(content, email) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&email=${email}&content=${content}`;
            return this.http.post(`${this.api}/send_request`, body, { headers }).toPromise();
        })
    }

    getSetting() {
        return this.storage.get('sign_id').then(id => {
            return this.http.get(`${this.api}/get_setting?sign_id=${id}`).toPromise();
        })
    }

    setSetting(comment, like, report) {
        let headers = this.headers;
        comment = comment? "1":"0";
        like = like? "1":"0";
        report = report? "1":"0";
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&comment_post=${comment}&like_post=${like}&report=${report}`;
            return this.http.post(`${this.api}/set_setting`, body, { headers }).toPromise();
        })
    }

    getManagerNotice() {
        return this.http.get(`${this.api}/get_notice`).toPromise();
    }

    getCommentsNotice() {
        return this.storage.get('sign_id').then(id => {
            return this.http.get(`${apiPath}post/get_user_comments?sign_id=${id}`).toPromise();
        })
    }

    sendReport(post_user, type, content, post_date, comment_id) {
        // type: 1 -> post, type: 2 -> ads, type: 3 -> post comment, type: 4 -> ad comment,
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `sign_id=${sign_id}&post_user=${post_user}&type=${type}&content=${content}&post_date=${post_date}&comment_id=${comment_id}`;
            return this.http.post(`${this.api}/send_report`, body, { headers }).toPromise();
        });
    }

    getLocations(location_id) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `sign_id=${sign_id}&location_id=${location_id}`;
            return this.http.post(`${this.api}/get_location_list`, body, { headers }).toPromise();
        });
    }

}

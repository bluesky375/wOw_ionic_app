import { apiPath } from '../../config/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AdsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdsProvider {

    api: string = apiPath + 'advertise';
    headers: HttpHeaders;

    constructor(public http: HttpClient, private storage: Storage) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    getDetail(id) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `sign_id=${sign_id}&id=${id}`;
            return this.http.post(`${this.api}/get_detail`, body, { headers }).toPromise();
        }).catch(() => {
            let body = `id=${id}`;
            return this.http.post(`${this.api}/get_detail`, body, { headers }).toPromise();
        });
    }

    getAdsByType(type) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&type=${type}`;
            return this.http.post(`${this.api}/get_list`, body, { headers }).toPromise();
        });
    }

    create(adData) {
        let headers = this.headers;
        const { file1, file2, file3, file4, file5, content, url, cat, days, price, email } = adData;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&file1=${file1}&file2=${file2}&file3=${file3}&file4=${file4}&file5=${file5}&content=${content}&url=${url}&category=${cat}&days=${days}&price=${price}&email=${email}`;
            return this.http.post(`${this.api}/submit_advertise`, body, { headers }).toPromise();
        })
    }

    reSubmit(adData) {
        let headers = this.headers;
        const { id, file1, file2, file3, file4, file5, file1_id, file2_id, file3_id, file4_id, file5_id, content, url, cat, days, price, email, delete1, delete2, delete3, delete4, delete5} = adData;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `sign_id=${sign_id}&id=${id}&content=${content}&url=${url}&category=${cat}&days=${days}&price=${price}&email=${email}`;

            let file_content = '';

            if (delete1 == 1) {
                file_content = file_content + `file1=${file1}&file1_id=${file1_id}`;
            }
            if (delete2 == 1){
                file_content = file_content + `file2=${file2}&file2_id=${file2_id}`;
            }
            if (delete3 == 1){
                file_content = file_content + `file3=${file3}&file3_id=${file3_id}`;
            }
            if (delete4 == 1){
                file_content = file_content + `file4=${file4}&file4_id=${file4_id}`;
            }
            if (delete5 == 1){
                file_content = file_content + `file5=${file5}&file5_id=${file5_id}`;
            }

            if(file_content != ''){
                body = body + "&" + file_content;
            }
            return this.http.post(`${this.api}/submit_advertise`, body, { headers }).toPromise();
        })
    }

    addFavourite(id, type) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${id}&sign_id=${sign_id}&type=${type}`;
            return this.http.post(`${this.api}/set_favorite`, body, { headers }).toPromise();
        });
    }

    likeAd(id, type) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${id}&sign_id=${sign_id}&type=${type}`;
            return this.http.post(`${this.api}/set_like`, body, { headers }).toPromise();
        });
    }

    likeComment(id, type) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `comment_id=${id}&sign_id=${sign_id}&type=${type}`;
            return this.http.post(`${this.api}/set_like_comment`, body, { headers }).toPromise();
        });
    }

    replyAd(id, comment) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${id}&sign_id=${sign_id}&comment=${comment}`;
            return this.http.post(`${this.api}/reply_advertise`, body, { headers }).toPromise();
        });
    }

    replyComment(id, comment) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `comment_id=${id}&sign_id=${sign_id}&comment=${comment}`;
            return this.http.post(`${this.api}/reply_comment`, body, { headers }).toPromise();
        });
    }

}

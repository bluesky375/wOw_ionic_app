import { apiPath } from '../../config/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {

    api: string = apiPath + 'post';
    headers: HttpHeaders;

    constructor(public http: HttpClient, private storage: Storage) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    getAll() {
        return this.storage.get('sign_id').then(id => {
            return this.http.get(`${this.api}/get_posts_user?sign_id=${id}`).toPromise();
        })
    }

    getPostCat() {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}`;
            return this.http.post(`${this.api}/get_myposts_category`, body, { headers }).toPromise();
        })
    }

    getPostsByCat(catid) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&category_id=${catid}`;
            return this.http.post(`${this.api}/get_posts_user_category`, body, { headers }).toPromise();
        })
    }

    search(keyword) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&keyword=${keyword}`;
            return this.http.post(`${this.api}/get_posts_user`, body, { headers }).toPromise();
        })
    }

    getFavourite() {
        return this.storage.get('sign_id').then(id => {
            return this.http.get(`${this.api}/get_posts_favorite?sign_id=${id}`).toPromise();
        })
    }

    getFavouriteCat() {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}`;
            return this.http.post(`${this.api}/get_favorite_category`, body, { headers }).toPromise();
        })
    }

    getFavouritePostsByCat(catid) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(id => {
            let body = `sign_id=${id}&category_id=${catid}`;
            return this.http.post(`${this.api}/get_posts_favorite_category`, body, { headers }).toPromise();
        })
    }

    getDetail(id, page_num) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `sign_id=${sign_id}&id=${id}&page_num=${page_num}`;
            return this.http.post(`${this.api}/get_post_detail`, body, { headers }).toPromise();
        }).catch(() => {
            let body = `id=${id}&page_num=${page_num}`;
            return this.http.post(`${this.api}/get_post_detail`, body, { headers }).toPromise();
        })
    }

    edit(postData) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${postData.id}&sign_id=${sign_id}&share=${postData.share}&category=${postData.category}`;
            return this.http.post(`${this.api}/edit_post`, body, { headers }).toPromise();
        });
    }

    delete(postData) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${postData.id}&sign_id=${sign_id}`;
            return this.http.post(`${this.api}/delete_post`, body, { headers }).toPromise();
        });
    }

    create(postData) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            var long,lati
            if(postData.long){
                long = postData.long
            }
            if(postData.lati){
                lati = postData.lati
            }
            let body = `long=`+long+`&lati=`+lati+`&sign_id=${sign_id}&comment=${postData.comment}&file_name=${postData.file_name}&publish=${postData.publish}&category=${postData.category}&share=${postData.share}&city=${postData.city}`;
            return this.http.post(`${this.api}/create_post`, body, { headers: this.headers }).toPromise();
        });
    }

    addFavourite(id, type) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${id}&sign_id=${sign_id}&type=${type}`;
            return this.http.post(`${this.api}/set_favorite`, body, { headers }).toPromise();
        });
    }

    likePost(id, type) {
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

    replyPost(id, comment) {
        let headers = this.headers;
        return this.storage.get('sign_id').then(sign_id => {
            let body = `id=${id}&sign_id=${sign_id}&comment=${comment}`;
            return this.http.post(`${this.api}/reply_post`, body, { headers }).toPromise();
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

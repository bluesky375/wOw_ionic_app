import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPath } from '../../config';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

    api = apiPath + 'register';
    headers: HttpHeaders;

    constructor(public http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    emailVerify(email) {
        let headers = this.headers;
        let body = `email=${email}`;
        return this.http.post(`${apiPath}email/sendVerify`, body, { headers }).toPromise();
    }

    otpPass(verify_code, email) {
        let headers = this.headers;
        let body = `verify_code=${verify_code}&email=${email}`;
        return this.http.post(`${this.api}/email`, body, { headers }).toPromise();
    }

    register(user_id, username, password, email, user_icon, token) {
        let headers = this.headers;
        let body = "";
        if(user_icon)
        body = `user_id=${user_id}&username=${username}&password=${password}&email=${email}&user_icon=${user_icon}&token=${token}`;
        else
        body = `user_id=${user_id}&username=${username}&password=${password}&email=${email}&token=${token}`;

        return this.http.post(`${this.api}/insert`, body, { headers }).toPromise();
    }

    forgot(email) {
        let headers = this.headers;
        let data = "email="+email;
        return this.http.post(`${this.api}/forgot`, data, { headers }).toPromise();
    }

    reset(code, password) {
        let headers = this.headers;
        let body = `code=${code}&password=${password}`;
        return this.http.post(`${this.api}/reset`, body, { headers }).toPromise();
    }

    getCategory() {
        return this.http.get(`${this.api}/get_category`).toPromise();
    }

    getCity() {
        return this.http.get(`${this.api}/get_city`).toPromise();
    }

    registerComplete(category, location, sign_id) {
        let headers = this.headers;

        let body = `sign_id=${sign_id}&category=${category}&location=${location}`;
        return this.http.post(`${this.api}/update`, body, { headers }).toPromise();
    }
}

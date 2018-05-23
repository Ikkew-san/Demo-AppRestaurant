import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api_url';
import { PARAMETERS } from '@angular/core/src/util/decorators';

/*
  Generated class for the AuthenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenProvider Provider');
  }
  
  getAuthen(params) {
    return this.http.post(`${API_URL}/authen`, params);
  }

  setLogged(params) {
    return this.http.post(`${API_URL}/logged`, params);
  }

  getProfile(id){
    return this.http.get(`${API_URL}/profile/${id}`);
  }
  setRegister(params){
    return this.http.post(`${API_URL}/register`, params);
  }
  
}

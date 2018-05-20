import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api_url';

@Injectable()
export class AppProvider {

  constructor(public http: HttpClient) {
  }

  getFoodlist(id){
    return this.http.get(`${API_URL}/typefood/${id}`); 
  }

  getTypefood() {
    return this.http.get(`${API_URL}/typefood`); 
  }

  getPromotion() {
    return this.http.get(`${API_URL}/promotion`); 
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api_url';

@Injectable()
export class AppProvider {

  constructor(public http: HttpClient) {
  }

  getPromotion() {
    return this.http.get(`${API_URL}/promotion`); 
  }
}

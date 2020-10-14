import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:4000/flowers');
  }
}

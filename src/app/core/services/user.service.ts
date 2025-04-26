import { Injectable } from '@angular/core';
import {LocalStorageService} from '@services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'https://melofy-back-production.up.railway.app/auth/spotify';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }


  getSpotify(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { withCredentials: true });
  }

  isAuthenticated():boolean {
    let token: string | null = this.localStorage.getToken();
    if (token == null) {
      return false
    }
    return true
  }
}

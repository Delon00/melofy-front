import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private authToken: string = 'authToken';

  constructor() {}

  createToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.authToken, token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.authToken);
    }
    return null;
  }

  destroyToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.authToken);
    }
  }
}

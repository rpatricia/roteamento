import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InJlbmF0YSBwYXVzaW5pIiwiaWF0IjoxNTE2MjM5MDIyfQ.eq6DtAQf701T2Uhb4HM356n_nEkYOEM8ITDXIntvASg';
  constructor() {}
  estaAutenticado(): boolean {
    return !!sessionStorage.getItem('access-token');
  }
  login(email: string, senha: string) {
    if (email === 'admin@gmail.com' && senha === '123456') {
      sessionStorage.setItem('access-token', this.accessToken);
      return true;
    }
    return false;
  }
  logout() {
    sessionStorage.clear()
  }
}

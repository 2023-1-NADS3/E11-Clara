import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyLoginService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const hasId = !!localStorage.getItem('_id');
    if (!hasId) {
      this.router.navigate(['/signup']);
      return false;
    }
    return true;
  }
}

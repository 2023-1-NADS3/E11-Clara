import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyLogedService {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const hasId = !!localStorage.getItem('_id');
    if (hasId) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}

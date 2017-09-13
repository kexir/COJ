import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
              @Inject('auth') private auth ) { }

  canActivate(): boolean {
    if(this.auth.authenticated()){
      return true;
    }else{
      this.router.navigate(['/problems']);
      return false;
    }
  }
  isAdmin(): boolean {
    if(this.auth.authenticated() && this.auth.getProfile().roles.includes('admin')){
      return true;
    }else{
      return false;
    }
  }
}

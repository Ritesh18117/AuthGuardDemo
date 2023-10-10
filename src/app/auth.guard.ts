import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let isLoggedIn=localStorage.getItem("isLoggedIn");
  let _router = inject(Router);

  if(isLoggedIn == "false"){
    alert("User is not Authenticated!!!");
    _router.navigate(["login"]);
    return false;
  }
  return true;
};

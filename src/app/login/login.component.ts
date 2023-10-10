import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() isLoggedIn = new EventEmitter<string>();

  login(username:string,password:string){
    if(username == "admin" && password == "admin"){
      localStorage.setItem("isLoggedIn","ture");
    }else{
      localStorage.setItem("isLoggedIn","false");
    }
  }

}

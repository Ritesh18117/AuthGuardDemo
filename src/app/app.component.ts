import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthGuardDemo';
  isLoggedIn = "false";
  constructor(){
    localStorage.setItem("isLoggedIn","false");
  }

  logout(){
    localStorage.setItem("isLoggedIn","false");
  }
}

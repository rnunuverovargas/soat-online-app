import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  token:string = sessionStorage.getItem('token');
  isLogin: boolean = false;

  constructor(private router: Router, private readonly userService : UserService) { 
    this.isLogin = location.href.indexOf('login') != -1;
  }

  ngOnInit() {
    this.userService.refreshToken.subscribe((token) => {
      this.token = token;
    })
  }

  onLogout() {
    sessionStorage.removeItem('u');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.token = null;
    // this.router.navigate(['home']);
    location.href = "/home"
  }
}

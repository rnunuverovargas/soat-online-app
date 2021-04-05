import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigate(['/ventas']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  });
  refreshToken

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private fb: FormBuilder, 
              private readonly userService : UserService, 
              ) { }

  token(dataUser) {

    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token};

    this.userService.login(dataUser, header).subscribe(data => {

      if(data.login[0].DESCRIPCION == "Usuario Valido") {
        sessionStorage.setItem('token', data.token.token);
        sessionStorage.setItem('u', JSON.stringify(dataUser));
        this.router.navigate(['ventas']);
        this.userService.refreshToken.emit(data.token.token);
      } else {
        sessionStorage.removeItem('u');
        this.userService.refreshToken.emit(null);
        alert(data.login[0].DESCRIPCION);
      }
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.token(this.loginForm.value);
    } 
    else {
      alert("Formulario no valido");
    }
  }
  ngOnInit(): void {

  }

}

import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { Event as NavigationEvent } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {
  isVentas: boolean = false;
  isNosotros: boolean = false;

  sections = [
    {
      title: 'COMPARA',
      icon: 'sentiment_very_satisfied',
      text: 'Sabes que las nuevas tendecias del mercado son en linea, vamos compra tu SOAT en unos cuantos pasos.'
    },
    {
      title: 'ASEGURA',
      icon: 'headset_mic',
      text: 'Este metodo de compra en linea es 100% seguro, y te enviaremos los datos de tu compra a donde sea que tu quieras.'
    },
    {
      title: 'AHORRA',
      icon: 'redeem',
      text: 'Comprando tu soat en linea ahorra tiempo e inviertelo con tu familia, en la comdidad de tu hogar o donde quiera que te encuentres.'
    }
  ];

  constructor(
    private route: ActivatedRoute, 
    private router: Router) {

    }
    
  onDeactivate() {
    document.body.scrollTop = 0;
  }

  ngOnInit() {
    this.isVentas = location.href.indexOf('ventas') != -1;
    this.isNosotros = location.href.indexOf('nosotros') != -1;
    
    this.router.events
    .pipe(
      filter(
        (event: NavigationEvent) => {
          return (event instanceof NavigationEnd);
        }
      )
    )
    .subscribe(
      (event: NavigationEnd) => {
        this.isVentas = event.url.indexOf('ventas') != -1;
        this.isNosotros = event.url.indexOf('nosotros') != -1;

        if (event.url.indexOf('ventas') != -1) {
          var token = sessionStorage.getItem('token');

          if (!token) {
            this.router.navigate(['login']);
          }
        }
      })
  }
}
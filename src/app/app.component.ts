import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
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

  onDeactivate() {
    document.body.scrollTop = 0;
  }
}
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDocumentComponent } from './confirmacionDocumento.component';

@Component({
  selector: 'app-Confirmacion',
  templateUrl: './Confirmacion.component.html',
  styleUrls: ['./Confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  mail: string;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        let data = JSON.parse(sessionStorage.getItem('dt'));
        if (data && data.ct)
            this.mail = data.ct.correo;
    }

    viewDocument() {
        this.dialog.open(ConfirmDocumentComponent);
    }

}

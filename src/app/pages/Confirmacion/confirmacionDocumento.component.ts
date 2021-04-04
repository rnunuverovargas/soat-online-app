import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'app-confirmacionDocumento',
    templateUrl: 'confirmacionDocumento.component.html'
})

export class ConfirmDocumentComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ConfirmDocumentComponent>) { }

    ngOnInit() { }
}
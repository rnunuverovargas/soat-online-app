import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'politicas',
    templateUrl: 'politicas.component.html'
})

export class politicasComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<politicasComponent>) { }

    ngOnInit() { }
}
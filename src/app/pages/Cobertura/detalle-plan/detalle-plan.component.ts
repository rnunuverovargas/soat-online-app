import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PolizaService } from 'src/app/services/poliza.service';

@Component({
  selector: 'app-detalle-plan',
  templateUrl: './detalle-plan.component.html',
  styleUrls: ['./detalle-plan.component.css']
})

export class DetallePlanComponent implements OnInit {
  dataSource: Array<any> = [];
  displayedColumns: string[] = ['COBERTURA_ID', 'COBERTURA', 'DESCRIPCION', 'DEDUCIBLE', 'SUMA_ASEGURADA'];
  title: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly polizaService: PolizaService,
    public dialogRef: MatDialogRef<DetallePlanComponent>) { }

  ngOnInit() {
    this.title = this.data.nombre
    this.polizaService.getCoverages(this.data.PLAN_ID).subscribe((rest: any) => {
      this.dataSource = rest.cobertura
    });
  }

}

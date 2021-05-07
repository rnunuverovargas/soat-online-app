import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';  
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core'


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { InfoVehiculoComponent } from './InfoVehiculo/InfoVehiculo.component';
import { InicioComponent } from './Inicio/Inicio.component';
import { BuscarPersonaComponent } from './BuscarPersona/BuscarPersona.component';
import { InfoPersonaComponent } from './InfoPersona/InfoPersona.component';
import { CoberturaComponent } from './Cobertura/Cobertura.component';
import { DetalleCoberturaComponent } from './Cobertura/DetalleCobertura/DetalleCobertura.component';
import { VigenciaComponent } from './Vigencia/Vigencia.component';
import { politicasComponent } from './InfoPersona/politicas/politicas.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ResumenComponent } from './Resumen/Resumen.component';
import { ConfirmacionComponent } from './Confirmacion/Confirmacion.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetallePlanComponent } from './Cobertura/detalle-plan/detalle-plan.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AyudaComponent } from './ayuda/ayuda.component';



@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,        
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        RouterModule,
        FlexLayoutModule,
    ],
    exports: [
        InicioComponent,
        InfoVehiculoComponent,
        BuscarPersonaComponent,
        InfoPersonaComponent,
        CoberturaComponent,
        VigenciaComponent,
        ResumenComponent,
        ConfirmacionComponent

    ],
    declarations: [
        InicioComponent,
        InfoVehiculoComponent,
        BuscarPersonaComponent,
        InfoPersonaComponent,
        CoberturaComponent,
        VigenciaComponent,
        ResumenComponent,
        ConfirmacionComponent,
        LoginComponent,
        VentasComponent,
        DetallePlanComponent,
        NosotrosComponent,
        AyudaComponent
    ],
    entryComponents: [DetalleCoberturaComponent,politicasComponent, DetallePlanComponent],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ],

})
export class PagesModule { }
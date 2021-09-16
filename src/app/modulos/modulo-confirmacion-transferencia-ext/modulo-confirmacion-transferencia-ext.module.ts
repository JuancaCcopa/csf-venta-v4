import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//module
import { ConfirmacionTranferenciaExtRoutingModule } from './modulo-confirmacion-transferencia-ext-routing.module';
import { ConfirmacionTransferenciaExtPrimeNgModule } from './modulo-confirmacion-transferencia-ext-primeng.module';

//components
import { PanelConfirmacionTransferenciaExtComponent } from './components/panel-confirmacion-transferencia-ext/panel-confirmacion-transferencia-ext.component';
import { ConfirmacionTransferenciaExtCrearComponent } from './components/panel-confirmacion-transferencia-ext/confirmacion-tranferencia-ext-crear/confirmacion-transferencia-ext-crear.component';
import { ConfirmacionTraslaExtVerComponent } from './components/panel-confirmacion-transferencia-ext/confirmacion-tranferencia-ext-ver/confirmacion-tranferencia-ext-ver.component';
import { ConfirmacionTrasladoExtArticuloVerComponent } from './components/panel-confirmacion-transferencia-ext/confirmacion-tranferencia-ext-articulo-ver/confirmacion-tranferencia-ext-articulo-ver.component';

import { RequerimientoCompartidoModule } from '../modulo-compartido/Requerimiento/modulo-requerimiento-compartido.module';
    

@NgModule({
    declarations: [
        PanelConfirmacionTransferenciaExtComponent,
        ConfirmacionTransferenciaExtCrearComponent,
        ConfirmacionTraslaExtVerComponent,
        ConfirmacionTrasladoExtArticuloVerComponent
    ],
    imports: [ CommonModule, ConfirmacionTransferenciaExtPrimeNgModule, ConfirmacionTranferenciaExtRoutingModule, ReactiveFormsModule, FormsModule, RequerimientoCompartidoModule],
    exports: [],
    providers: [],
})
export class ConfirmacionTransferenciaExtModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//module
import { AtencionTranferenciaExtRoutingModule } from './modulo-atencion-transferencia-ext-routing.module';
import { AtencionTransferenciaExtPrimeNgModule } from './modulo-atencion-transferencia-ext-primeng.module';

//components
import { PanelAtensionTransferenciaExtComponent } from './components/panel-atencion-transferencia-ext/panel-atencion-transferencia-ext.component';
import { AtensionTransferenciaExtCrearComponent } from './components/panel-atencion-transferencia-ext/atencion-tranferencia-ext-crear/atencion-transferencia-ext-crear.component';
import { AtencionTraslaExtVerComponent } from './components/panel-atencion-transferencia-ext/atencion-tranferencia-ext-ver/atencion-tranferencia-ext-ver.component';
import { AtencionTransferenciaExtLoteComponent } from './components/panel-atencion-transferencia-ext/atencion-tranferencia-ext-lote/atencion-tranferencia-ext-lote.component';
import { AtencionTrasladoExtArticuloVerComponent } from './components/panel-atencion-transferencia-ext/atencion-tranferencia-ext-articulo-ver/atencion-tranferencia-ext-articulo-ver.component';

import { RequerimientoCompartidoModule } from '../modulo-compartido/Requerimiento/modulo-requerimiento-compartido.module';
    

@NgModule({
    declarations: [
        PanelAtensionTransferenciaExtComponent,
        AtensionTransferenciaExtCrearComponent,
        AtencionTraslaExtVerComponent,
        AtencionTransferenciaExtLoteComponent,
        AtencionTrasladoExtArticuloVerComponent

    ],
    imports: [ CommonModule, AtencionTransferenciaExtPrimeNgModule, AtencionTranferenciaExtRoutingModule, ReactiveFormsModule, FormsModule, RequerimientoCompartidoModule],
    exports: [],
    providers: [],
})
export class AtencionTransferenciaExtModule {}

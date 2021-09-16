import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//module
import { ConfirmacionTranferenciaRoutingModule } from './modulo-confirmacion-transferencia-routing.module';
import { ConfirmacionTransferenciaPrimeNgModule } from './modulo-confirmacion-transferencia-primeng.module';

//components
import { PanelConfirmacionTransferenciaComponent } from './components/panel-confirmacion-transferencia/panel-confirmacion-transferencia.component';
import { ConfirmacionTransferenciaCrearComponent } from './components/panel-confirmacion-transferencia/confirmacion-tranferencia-crear/confirmacion-transferencia-crear.component';
import { ConfirmacionTraslaVerComponent } from './components/panel-confirmacion-transferencia/confirmacion-tranferencia-ver/confirmacion-tranferencia-ver.component';
import { ConfirmacionTransferenciaLoteComponent } from './components/panel-confirmacion-transferencia/confirmacion-tranferencia-lote/confirmacion-tranferencia-lote.component';
import { ConfirmacionTrasladoArticuloVerComponent } from './components/panel-confirmacion-transferencia/confirmacion-tranferencia-articulo-ver/confirmacion-tranferencia-articulo-ver.component';
//compartido
import { RequerimientoCompartidoModule } from '../modulo-compartido/Requerimiento/modulo-requerimiento-compartido.module';


@NgModule({
    declarations: [
        PanelConfirmacionTransferenciaComponent,
        ConfirmacionTransferenciaCrearComponent,
        ConfirmacionTraslaVerComponent,
        ConfirmacionTransferenciaLoteComponent,
        ConfirmacionTrasladoArticuloVerComponent
    ],
    imports: [ CommonModule, ConfirmacionTransferenciaPrimeNgModule, ConfirmacionTranferenciaRoutingModule, ReactiveFormsModule, FormsModule, RequerimientoCompartidoModule],
    exports: [],
    providers: [],
})
export class ConfirmacionTransferenciaModule {}

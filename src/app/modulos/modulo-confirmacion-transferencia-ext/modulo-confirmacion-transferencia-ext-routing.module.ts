import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//components
//  import { PanelConfirmacionTransferenciaExtComponent } from './components/panel-confirmacion-transferencia-ext/panel-confirmacion-transferencia-ext.component';
 import { PanelConfirmacionTransferenciaExtComponent } from './components/panel-confirmacion-transferencia-ext/panel-confirmacion-transferencia-ext.component';
 import { ConfirmacionTransferenciaExtCrearComponent } from './components/panel-confirmacion-transferencia-ext/confirmacion-tranferencia-ext-crear/confirmacion-transferencia-ext-crear.component';


const routes: Routes = [
    { path: 'panel-confirmacion-transferencia-ext', component: PanelConfirmacionTransferenciaExtComponent },
    { path: 'confirmacion-transferencia-ext-crear', component: ConfirmacionTransferenciaExtCrearComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfirmacionTranferenciaExtRoutingModule {}

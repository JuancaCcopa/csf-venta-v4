import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//components
 import { PanelConfirmacionTransferenciaComponent } from './components/panel-confirmacion-transferencia/panel-confirmacion-transferencia.component';
 import { ConfirmacionTransferenciaCrearComponent } from './components/panel-confirmacion-transferencia/confirmacion-tranferencia-crear/confirmacion-transferencia-crear.component';


const routes: Routes = [
    { path: 'panel-confirmacion-transferencia', component: PanelConfirmacionTransferenciaComponent },
    { path: 'confirmacion-transferencia-crear', component: ConfirmacionTransferenciaCrearComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfirmacionTranferenciaRoutingModule {}

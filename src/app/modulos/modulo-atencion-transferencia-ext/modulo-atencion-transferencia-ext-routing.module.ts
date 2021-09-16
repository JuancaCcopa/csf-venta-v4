import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//components
 import { PanelAtensionTransferenciaExtComponent } from './components/panel-atencion-transferencia-ext/panel-atencion-transferencia-ext.component';
 import { AtensionTransferenciaExtCrearComponent } from './components/panel-atencion-transferencia-ext/atencion-tranferencia-ext-crear/atencion-transferencia-ext-crear.component';

const routes: Routes = [
    { path: 'panel-solicitud-transferencia-ext', component: PanelAtensionTransferenciaExtComponent },
    { path: 'atencion-transferencia-ext-crear', component: AtensionTransferenciaExtCrearComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtencionTranferenciaExtRoutingModule {}

import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
//constante
import { GlobalsConstantsForm } from '../../../../../constants/globals-constants-form';

//services
import { ConfirmacionTrasladoService  } from '../../../services/confirmacion-traslado.service';

@Component({
  selector: 'app-confirmacion-tranferencia-ext-ver',
  templateUrl: './confirmacion-tranferencia-ext-ver.component.html',
  styleUrls: ['./confirmacion-tranferencia-ext-ver.component.scss'],
})

export class ConfirmacionTraslaExtVerComponent implements OnInit {
  @Input() item;

  itemConfirmadoSolicitud: any;
  itemSolicitudDetalle: any = [];
  globalConstants: GlobalsConstantsForm = new GlobalsConstantsForm();

  constructor(
      private readonly confirmacionTrasladoService: ConfirmacionTrasladoService
      ) {}
  
  ngOnInit(): void {
    
    this.itemConfirmadoSolicitud={
      desAtencionSolicitudTransferenciaEstado:"",
      atencionSolicitudTransferencia:{idSolicitudTraslado:0,solicitudTraslado:{solicitudTrasladoEstado:{desSolicitudTrasladoEstado:""}}},
      desSolicitudTrasladoEstado:"",
      codSocioNegocio:"",
      nombreSocioNegocio:"",
      codAlmacenDestino:"",
      desAlmacenDestino:"",
      desAtencionSolicitudTransferenciaTipoMovimiento:"",
      usuario:{nombresApellidos:""},
      codDocumento:"",
      documento:"",
      serie:"",
      numero:"",
    }

    this.getAtencionSolicitudTraslado(this.item.idConfirmacionSolicitudTransferencia);

  }
  getAtencionSolicitudTraslado(id: number) {
    
    this.confirmacionTrasladoService
      .getAllById(id)
      .pipe(
        map((resp) => {
          
          this.itemConfirmadoSolicitud = resp;
          this.itemConfirmadoSolicitud.confirmacionSolicitudTransferenciaItem.forEach(element => {
            
            if(element.isUbicacion=="Y"){
                element.ubicacionOrigen=element.confirmacionSolicitudTransferenciaItemUbicacion.find(x=>x.tipoAccionContenedor=='batFromWarehouse').binAbsEntry;
                element.ubicacionDestino=element.confirmacionSolicitudTransferenciaItemUbicacion.find(x=>x.tipoAccionContenedor=='batToWarehouse').binCode;
              }
          });

        })
      )
      .subscribe();
  }

}

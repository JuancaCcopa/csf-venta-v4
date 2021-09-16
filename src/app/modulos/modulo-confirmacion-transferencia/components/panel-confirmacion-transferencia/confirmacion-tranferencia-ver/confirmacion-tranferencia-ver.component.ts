import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
//constante
import { GlobalsConstantsForm } from '../../../../../constants/globals-constants-form';

//services
import { ConfirmacionTrasladoService  } from '../../../services/confirmacion-traslado.service';

@Component({
  selector: 'app-confirmacion-tranferencia-ver',
  templateUrl: './confirmacion-tranferencia-ver.component.html',
  styleUrls: ['./confirmacion-tranferencia-ver.component.scss'],
})

export class ConfirmacionTraslaVerComponent implements OnInit {
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
      usuario:{nombresApellidos:""}
    }

    this.getAtencionSolicitudTraslado(this.item.idConfirmacionSolicitudTransferencia);

  }
  getAtencionSolicitudTraslado(id: number) {
    
    //getConfirmadoAllById
    this.confirmacionTrasladoService
      .getAllById(id)
      .pipe(
        map((resp) => {
          this.itemConfirmadoSolicitud = resp;
        })
      )
      .subscribe();
  }

}

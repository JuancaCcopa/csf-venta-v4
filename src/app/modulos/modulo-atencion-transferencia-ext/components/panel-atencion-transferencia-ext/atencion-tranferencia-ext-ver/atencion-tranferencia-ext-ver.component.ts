import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
//constante
import { GlobalsConstantsForm } from '../../../../../constants/globals-constants-form';

//services
import { AtencionTrasladoService  } from '../../../services/atencion-traslado.service';

@Component({
  selector: 'app-atencion-tranferencia-ext-ver',
  templateUrl: './atencion-tranferencia-ext-ver.component.html',
  styleUrls: ['./atencion-tranferencia-ext-ver.component.scss'],
})

export class AtencionTraslaExtVerComponent implements OnInit {
  @Input() item;

  itemAtencionSolicitud: any;
  itemSolicitudDetalle: any = [];
  globalConstants: GlobalsConstantsForm = new GlobalsConstantsForm();

  constructor(
      private readonly solicitudTrasladoService: AtencionTrasladoService
      ) {}
  
  ngOnInit(): void {
    
    console.log("this.item");
    console.log(this.item);

    this.itemAtencionSolicitud={
      desAtencionSolicitudTransferenciaEstado:"",
      idSolicitudTraslado:0,
      desSolicitudTrasladoEstado:"",
      codSocioNegocio:"",
      nombreSocioNegocio:"",
      codAlmacenDestino:"",
      desAlmacenDestino:"",
      desAtencionSolicitudTransferenciaTipoMovimiento:"",
      usuario:{nombresApellidos:""}
    }
    
    this.getAtencionSolicitudTraslado(this.item.idAtencionSolicitudTransferencia);

  }
  getAtencionSolicitudTraslado(id: number) {
    
    this.solicitudTrasladoService
      .getAllById(id)
      .pipe(
        map((resp) => {
          this.itemAtencionSolicitud = resp;
          console.log("this.itemAtencionSolicitud");
          console.log(this.itemAtencionSolicitud);
        })
      )
      .subscribe();
  }

}

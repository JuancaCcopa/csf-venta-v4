import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
//constante
import { GlobalsConstantsForm } from '../../../../../constants/globals-constants-form';

//services
import { AtencionTrasladoService  } from '../../../services/atencion-traslado.service';

@Component({
  selector: 'app-atencion-tranferencia-ext-articulo-ver',
  templateUrl: './atencion-tranferencia-ext-articulo-ver.component.html',
  styleUrls: ['./atencion-tranferencia-ext-articulo-ver.component.scss'],
})

export class AtencionTrasladoExtArticuloVerComponent implements OnInit {
  @Input() item;
  @Input() itemAlmacen;

  itemArticulo: any;
  itemArticuloLote: any = [];
  globalConstants: GlobalsConstantsForm = new GlobalsConstantsForm();
  isVisibleLote=false;
  
  constructor(
      private readonly solicitudTrasladoService: AtencionTrasladoService
      ) {}
  
  ngOnInit(): void {
   
    this.itemArticulo={
      itemCode:"",
      itemName:"",
      whsCode:"",
      whsName:"",
      lote:[]
    }
    
    this.getArticuloVer();

  }
  getArticuloVer() {
    
    this.solicitudTrasladoService
      .getArticuloVer(this.item.codArticulo,this.itemAlmacen.warehouseCode)
      .pipe(
        map((resp) => {
          
          this.itemArticulo = resp[0];
          if(this.itemArticulo.lote.length>0){
              this.isVisibleLote=true;
          }

        })
      )
      .subscribe();
  }

}

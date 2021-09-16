//libreria
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';//JC
import { Location } from '@angular/common';
// import { map } from 'rxjs/operators';
import { VentasCajaService } from '../../../services/ventas-caja.service';

import { ConfirmationService } from 'primeng/api';



//constante
import { GlobalsConstantsForm } from '../../../../../constants/globals-constants-form';
import { ConstantesGenerales } from '../../../../../constants/Constantes-generales';

//services
import { SessionService } from '../../../../../services/session.service';
import { LanguageService } from '../../../../../services/language.service';
import { MensajePrimeNgService } from '../../../../../services/mensaje-prime-ng.service';
import { UserContextService } from '../../../../../services/user-context.service';
import { UtilService } from '../../../../../services/util.service';
import swal from 'sweetalert2';

//Interface

@Component({
  selector: 'app-generar-pagobot',
  templateUrl: './generar-pagobot.component.html',
  styleUrls: ['./generar-pagobot.component.css']
})

export class GenerarPagoBotComponent implements OnInit {
  formularioSuperior: FormGroup;
  // Suscripcion [para realizar el unsuscription al cerrar el formulario]
  subscription$: Subscription;

  @Input() isHabilitaControl = false;
  @Input() inputCodVenta: string = "";
  @Input() inputMontoNeto: number = 0;
  @Output() cancel = new EventEmitter<any>();

  globalConstants: GlobalsConstantsForm = new GlobalsConstantsForm();
  timeAnimationModal = ConstantesGenerales.DURACION_ANIMACION_MODAL;


  bodyParams: any;

  loading = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly activeRoute: ActivatedRoute,
    public lenguageService: LanguageService,
    public mensajePrimeNgService: MensajePrimeNgService,
    public userContextService: UserContextService,
    private readonly location: Location,
    private readonly sessionStorage: SessionService,
    private messageService: MessageService,
    private readonly utilService: UtilService,
    private confirmationService: ConfirmationService,
    private readonly ventasCajaService: VentasCajaService) { }

  ngOnInit(): void {

    console.log(this.inputCodVenta)
    console.log("this.inputMontoNeto")
    console.log(this.inputMontoNeto)
    
    this.buildFormSuperior();
    this.consultarPago();

  }

  private buildFormSuperior() {

    this.formularioSuperior = this.fb.group({
      idPago: '',
      codVenta: '',
      tipoPago: 'PAGOS DE MEDICAMENTOS DE FARMACIA',
      nombre: '',
      apellidos: '',
      telefono: '',
      correo: '',
      tipoDocumento: '',
      numeroDocumento: '',
      descripcionPago: '',
      urlImagen: '',
      cantidad: 0,
      montoPagar: 0
    });

  }

  consultarPago() {
    
    debugger

    console.log(this.consultarPago);

    var flgSeguiPago = false;

    this.ventasCajaService
      .getGetMdsynPagosConsulta("0", "0", "0", "", this.inputCodVenta, "2")
      .subscribe(
        (resp: any) => {

          debugger

          console.log("getGetMdsynPagosConsulta")
          console.log(resp)

          var montoNeto = 0;
          if (resp.amount == 0) {
            montoNeto = this.inputMontoNeto;
          } else {
            montoNeto = resp.amount;
          }

          this.formularioSuperior.patchValue({
            idPago: resp.number,
            codVenta: this.inputCodVenta,
            nombre: resp.cust_name,
            apellidos: resp.cust_lastname,
            telefono: resp.cust_phone,
            correo: resp.cust_email, //"juan.carhuachuco@sba.pe"
            tipoDocumento: resp.cust_doc_type,
            numeroDocumento: resp.cust_doc_number,
            descripcionPago: resp.products_name,
            cantidad: resp.products_quantity,
            montoPagar: montoNeto
          });

        },
        (error) => {
          this.messageService.add({ key: 'toasVentaCaja', severity: 'error', summary: 'Mensaje', detail: error.error.resultadoDescripcion });
          console.log(error);
        }
      );
  }


  generarBot() {
    //swal.fire(this.globalConstants.msgErrorSummary, "DEBES PRIMERO BUSCAR EL COMPROBANTE", 'warning');
    const { idPago, correo, telefono } = this.formularioSuperior.value;
    if (idPago > 0) {
      swal.fire(this.globalConstants.msgInfoSummary, "La orden de solicitud de pago ya se envio. \nNo se puede volver a enviar dos veces la misma orden.", 'warning');
      return
    }
    if (correo == "") {
      swal.fire(this.globalConstants.msgInfoSummary, "El paciente no tiene correo, actualice los datos en la pantalla datos del paciente.", 'warning');
      return
    }

    if (telefono == "") {
      swal.fire(this.globalConstants.msgInfoSummary, "El paciente no tiene número de telefono, actualice los datos en la pantalla datos del paciente.", 'warning');
      return
    }


    this.confirmationService.confirm({
      message: `¿Desea generar la orden del pago?`,
      header: 'Confirmación',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {

        debugger
        this.generarOrdenPagoBot();

        //this.isAutenticar = !this.isAutenticar;
        // var obj={
        //   idusuario: this.userContextService.getIdUsuario(),
        //   codcomprobante:comprobante
        // };
        // debugger
        //this.comprobanteAnular(obj);

      },
      reject: () => {

      }
    });


  }

  generarOrdenPagoBot() {

    debugger
    const { montoPagar } = this.formularioSuperior.value;

    var value = {
      idePagosBot: 0,
      codtipoPago: 'F',
      idMdsynReserva: 0, // idMdsynReserva default 0
      idCorrelReservaMedisyn: 0,// idCorrelReservaMedisyn default 0
      codLiquidacion: '', // default empty
      codVenta: this.inputCodVenta,
      montoPagar: montoPagar,
      idUsuario: this.userContextService.getIdUsuario()
    };

    this.ventasCajaService.setGenerarPagoBot(value).subscribe(
      (result: any) => {

        console.log("generarOrdenPagoBot")
        console.log(result)

        // public long idePagosBot { get; set; }
        // public string codtipoPago { get; set; }
        // public int idMdsynReserva { get; set; }
        // public int idCorrelReservaMedisyn { get; set; }
        // public string codLiquidacion { get; set; }
        // public string codVenta { get; set; }
        // public decimal montoPagar { get; set; }


        if (result.resultadoCodigo==0) {

          //swal.fire(this.globalConstants.msgErrorSummary, "DEBES PRIMERO BUSCAR EL COMPROBANTE", 'warning');
          //
          swal.fire(this.globalConstants.msgExitoSummary, result.resultadoDescripcion, 'success');
        } else {
          swal.fire(this.globalConstants.msgErrorSummary, result.resultadoDescripcion, 'error');
        }

      },

      (error) => {
        console.log(error.error.resultadoDescripcion);
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion, 'error');
        return
      }
    );

  }

}

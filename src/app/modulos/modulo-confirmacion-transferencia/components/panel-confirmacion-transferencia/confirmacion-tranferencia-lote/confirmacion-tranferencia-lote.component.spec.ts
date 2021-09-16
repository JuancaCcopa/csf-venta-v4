import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ConfirmacionTransferenciaLoteComponent } from './confirmacion-tranferencia-lote.component'

describe('ConfirmacionTransferenciaLoteComponent', () => {
  let component: ConfirmacionTransferenciaLoteComponent;
  let fixture: ComponentFixture<ConfirmacionTransferenciaLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionTransferenciaLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTransferenciaLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

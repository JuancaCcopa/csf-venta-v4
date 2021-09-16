import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConfirmacionTransferenciaExtComponent } from '../panel-confirmacion-transferencia-ext/panel-confirmacion-transferencia-ext.component';

describe('PanelConfirmacionSolicitudTransferenciaExtComponent', () => {
  let component: PanelConfirmacionTransferenciaExtComponent;
  let fixture: ComponentFixture<PanelConfirmacionTransferenciaExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelConfirmacionTransferenciaExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConfirmacionTransferenciaExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

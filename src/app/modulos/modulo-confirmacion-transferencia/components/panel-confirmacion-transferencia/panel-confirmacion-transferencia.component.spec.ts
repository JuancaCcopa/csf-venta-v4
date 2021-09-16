import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConfirmacionTransferenciaComponent } from '../panel-confirmacion-transferencia/panel-confirmacion-transferencia.component';

describe('PanelConfirmacionTransferenciaComponent', () => {
  let component: PanelConfirmacionTransferenciaComponent;
  let fixture: ComponentFixture<PanelConfirmacionTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelConfirmacionTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConfirmacionTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

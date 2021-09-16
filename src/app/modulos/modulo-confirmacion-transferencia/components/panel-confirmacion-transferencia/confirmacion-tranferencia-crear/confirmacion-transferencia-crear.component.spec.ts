import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionTransferenciaCrearComponent } from './confirmacion-transferencia-crear.component';

describe('ConfirmacionTransferenciaCrearComponent', () => {
  let component: ConfirmacionTransferenciaCrearComponent;
  let fixture: ComponentFixture<ConfirmacionTransferenciaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionTransferenciaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTransferenciaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

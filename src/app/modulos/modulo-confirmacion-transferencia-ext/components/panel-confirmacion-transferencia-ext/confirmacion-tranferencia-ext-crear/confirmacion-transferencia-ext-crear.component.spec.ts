import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionTransferenciaExtCrearComponent } from './confirmacion-transferencia-ext-crear.component';

describe('ConfirmacionTransferenciaExtCrearComponent', () => {
  let component: ConfirmacionTransferenciaExtCrearComponent;
  let fixture: ComponentFixture<ConfirmacionTransferenciaExtCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionTransferenciaExtCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTransferenciaExtCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

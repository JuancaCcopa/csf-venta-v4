import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AtencionTransferenciaExtLoteComponent } from './atencion-tranferencia-ext-lote.component'

describe('AtencionTransferenciaExtLoteComponent', () => {
  let component: AtencionTransferenciaExtLoteComponent;
  let fixture: ComponentFixture<AtencionTransferenciaExtLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionTransferenciaExtLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionTransferenciaExtLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

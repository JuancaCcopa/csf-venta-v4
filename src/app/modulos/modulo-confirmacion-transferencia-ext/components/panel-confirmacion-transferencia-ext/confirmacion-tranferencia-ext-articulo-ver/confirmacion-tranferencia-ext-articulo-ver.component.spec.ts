import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionTrasladoExtArticuloVerComponent } from './confirmacion-tranferencia-ext-articulo-ver.component';

describe('ConfirmacionTrasladoExtArticuloVerComponent', () => {
  let component: ConfirmacionTrasladoExtArticuloVerComponent;
  let fixture: ComponentFixture<ConfirmacionTrasladoExtArticuloVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionTrasladoExtArticuloVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTrasladoExtArticuloVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

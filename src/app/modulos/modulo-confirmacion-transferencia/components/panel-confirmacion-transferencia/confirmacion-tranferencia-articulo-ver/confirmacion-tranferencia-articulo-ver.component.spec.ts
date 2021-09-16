import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionTrasladoArticuloVerComponent } from './confirmacion-tranferencia-articulo-ver.component';

describe('ConfirmacionTrasladoArticuloVerComponent', () => {
  let component: ConfirmacionTrasladoArticuloVerComponent;
  let fixture: ComponentFixture<ConfirmacionTrasladoArticuloVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionTrasladoArticuloVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTrasladoArticuloVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

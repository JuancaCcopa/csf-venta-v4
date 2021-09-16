import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtencionTrasladoExtArticuloVerComponent } from './atencion-tranferencia-ext-articulo-ver.component';

describe('AtencionTrasladoExtArticuloVerComponent', () => {
  let component: AtencionTrasladoExtArticuloVerComponent;
  let fixture: ComponentFixture<AtencionTrasladoExtArticuloVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AtencionTrasladoExtArticuloVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionTrasladoExtArticuloVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionTraslaExtVerComponent } from './confirmacion-tranferencia-ext-ver.component';

describe('ConfirmacionTraslaExtVerComponent', () => {
  let component: ConfirmacionTraslaExtVerComponent;
  let fixture: ComponentFixture<ConfirmacionTraslaExtVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionTraslaExtVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTraslaExtVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

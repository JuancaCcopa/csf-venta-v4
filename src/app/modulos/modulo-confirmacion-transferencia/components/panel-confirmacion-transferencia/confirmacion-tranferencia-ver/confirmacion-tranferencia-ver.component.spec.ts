import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionTraslaVerComponent } from './confirmacion-tranferencia-ver.component';

describe('ConfirmacionTraslaVerComponent', () => {
  let component: ConfirmacionTraslaVerComponent;
  let fixture: ComponentFixture<ConfirmacionTraslaVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionTraslaVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTraslaVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

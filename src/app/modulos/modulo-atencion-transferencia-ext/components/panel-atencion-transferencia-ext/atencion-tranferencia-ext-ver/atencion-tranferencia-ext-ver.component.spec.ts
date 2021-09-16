import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtencionTraslaExtVerComponent } from './atencion-tranferencia-ext-ver.component';

describe('AtencionTraslaExtVerComponent', () => {
  let component: AtencionTraslaExtVerComponent;
  let fixture: ComponentFixture<AtencionTraslaExtVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AtencionTraslaExtVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionTraslaExtVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

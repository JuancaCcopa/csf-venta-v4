import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtensionTransferenciaExtCrearComponent } from './atencion-transferencia-ext-crear.component';

describe('AtensionTransferenciaExtCrearComponent', () => {
  let component: AtensionTransferenciaExtCrearComponent;
  let fixture: ComponentFixture<AtensionTransferenciaExtCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtensionTransferenciaExtCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtensionTransferenciaExtCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

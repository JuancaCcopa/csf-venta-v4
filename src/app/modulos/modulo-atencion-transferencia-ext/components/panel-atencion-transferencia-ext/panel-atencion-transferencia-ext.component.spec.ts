import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAtensionTransferenciaExtComponent } from '../panel-atencion-transferencia-ext/panel-atencion-transferencia-ext.component';

describe('PanelAtensionTransferenciaExtComponent', () => {
  let component: PanelAtensionTransferenciaExtComponent;
  let fixture: ComponentFixture<PanelAtensionTransferenciaExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAtensionTransferenciaExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAtensionTransferenciaExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

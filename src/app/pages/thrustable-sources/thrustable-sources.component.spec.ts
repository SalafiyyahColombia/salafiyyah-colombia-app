import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrustableSourcesComponent } from './thrustable-sources.component';

describe('ThrustableSourcesComponent', () => {
  let component: ThrustableSourcesComponent;
  let fixture: ComponentFixture<ThrustableSourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrustableSourcesComponent]
    });
    fixture = TestBed.createComponent(ThrustableSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

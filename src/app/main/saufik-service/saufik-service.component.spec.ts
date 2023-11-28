import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikServiceComponent } from './saufik-service.component';

describe('SaufikServiceComponent', () => {
  let component: SaufikServiceComponent;
  let fixture: ComponentFixture<SaufikServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikServiceComponent]
    });
    fixture = TestBed.createComponent(SaufikServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

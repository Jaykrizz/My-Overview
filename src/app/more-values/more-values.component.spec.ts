import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreValuesComponent } from './more-values.component';

describe('MoreValuesComponent', () => {
  let component: MoreValuesComponent;
  let fixture: ComponentFixture<MoreValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

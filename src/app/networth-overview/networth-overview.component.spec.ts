import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthOverviewComponent } from './networth-overview.component';

describe('NetworthOverviewComponent', () => {
  let component: NetworthOverviewComponent;
  let fixture: ComponentFixture<NetworthOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworthOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

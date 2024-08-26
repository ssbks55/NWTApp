import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthDetailComponent } from './networth-detail.component';

describe('NetworthDetailComponent', () => {
  let component: NetworthDetailComponent;
  let fixture: ComponentFixture<NetworthDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworthDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

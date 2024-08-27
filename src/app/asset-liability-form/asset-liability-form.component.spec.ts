import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetLiabilityFormComponent } from './asset-liability-form.component';

describe('AssetLiabilityFormComponent', () => {
  let component: AssetLiabilityFormComponent;
  let fixture: ComponentFixture<AssetLiabilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetLiabilityFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetLiabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

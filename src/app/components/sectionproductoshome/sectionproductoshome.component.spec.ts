import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionproductoshomeComponent } from './sectionproductoshome.component';

describe('SectionproductoshomeComponent', () => {
  let component: SectionproductoshomeComponent;
  let fixture: ComponentFixture<SectionproductoshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionproductoshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionproductoshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

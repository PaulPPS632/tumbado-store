import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutwebsiteComponent } from './layoutwebsite.component';

describe('LayoutwebsiteComponent', () => {
  let component: LayoutwebsiteComponent;
  let fixture: ComponentFixture<LayoutwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutwebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

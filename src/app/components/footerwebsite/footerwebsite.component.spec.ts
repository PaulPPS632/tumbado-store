import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterwebsiteComponent } from './footerwebsite.component';

describe('FooterwebsiteComponent', () => {
  let component: FooterwebsiteComponent;
  let fixture: ComponentFixture<FooterwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterwebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

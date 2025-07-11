import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderwebsiteComponent } from './headerwebsite.component';

describe('HeaderwebsiteComponent', () => {
  let component: HeaderwebsiteComponent;
  let fixture: ComponentFixture<HeaderwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderwebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

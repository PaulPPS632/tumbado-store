import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetailAdminComponent } from './producto-detail-admin.component';

describe('ProductoDetailAdminComponent', () => {
  let component: ProductoDetailAdminComponent;
  let fixture: ComponentFixture<ProductoDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDetailAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

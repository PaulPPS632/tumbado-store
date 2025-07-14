import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { ProductoWithContent } from '../../../interfaces/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productodetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productodetail.component.html',
  styleUrls: ['./productodetail.component.css']
})
export class ProductodetailComponent implements OnInit {
  id = input.required<string>();
  productosService = inject(ProductosService);
  producto = signal<ProductoWithContent | undefined>(undefined);
  imagen = signal<string | undefined>(undefined);
  selectedSize = signal<string | undefined>(undefined);

  ngOnInit(): void {
    this.productosService.getbyId(parseInt(this.id())).subscribe((res) => {
      this.producto.set(res);
      this.imagen.set(res.imagenes[0]);
    });
  }

  changeimage(url: string) {
    this.imagen.set(url);
  }

  selectSize(size: string) {
    this.selectedSize.set(size);
  }
}
import { Component, OnInit } from '@angular/core';
import { Categoria, Marca, ProductoWithContent, Sexo, Tipo } from '../../../interfaces/types';
import { ProductosService } from '../../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {
  producto: ProductoWithContent = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio_anterior: 0,
    precio: 0,
    isdescuento: 0,
    descuento: 0,
    stock: 0,
    stock_minimo: 0,
    imagen: '',
    categoria_id: 0,
    sexo_id: 0,
    marca_id: 0,
    tipo_id: 0,
    activo: 1,
    created_at: new Date().toISOString(),
    categoria: { id: 0, nombre: '', activo: 1, created_at: '' },
    sexo: { id: 0, nombre: '', activo: 1 },
    marca: { id: 0, nombre: '', activo: 1, created_at: '' },
    tipo: { id: 0, nombre: '', activo: 1, created_at: '' },
    tallas: [],
    imagenes: []
  };

  categorias: Categoria[] = [
    { id: 1, nombre: 'Zapatillas', activo: 1, created_at: '2025-07-13T00:00:00Z' },
    { id: 2, nombre: 'Ropa', activo: 1, created_at: '2025-07-13T00:00:00Z' }
  ];
  sexos: Sexo[] = [
    { id: 1, nombre: 'Hombre', activo: 1 },
    { id: 2, nombre: 'Mujer', activo: 1 }
  ];
  marcas: Marca[] = [
    { id: 1, nombre: 'Nike', activo: 1, created_at: '2025-07-13T00:00:00Z' },
    { id: 2, nombre: 'Adidas', activo: 1, created_at: '2025-07-13T00:00:00Z' }
  ];
  tipos: Tipo[] = [
    { id: 1, nombre: 'Original', activo: 1, created_at: '2025-07-13T00:00:00Z' },
    { id: 2, nombre: 'Réplica', activo: 1, created_at: '2025-07-13T00:00:00Z' }
  ];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {}

  addTalla() {
    this.producto.tallas.push({ id: 0, valor: '', tipo: '' });
  }

  removeTalla(index: number) {
    this.producto.tallas.splice(index, 1);
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            this.producto.imagenes.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }

  onSubmit() {
    if (this.producto.tallas.length === 0) {
      alert('Debe agregar al menos una talla.');
      return;
    }
    this.productosService.createProduct(this.producto).subscribe({
      next: (response) => {
        console.log('Producto creado:', response);
        // Redirect or reset form as needed
      },
      error: (err) => console.error('Error al crear producto:', err)
    });
  }
}

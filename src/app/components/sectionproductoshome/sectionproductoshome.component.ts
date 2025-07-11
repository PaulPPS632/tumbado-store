import { Component, inject, input, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductoWithContent } from '../../interfaces/types';
import { CardproductoComponent } from "../cardproducto/cardproducto.component";

@Component({
  selector: 'app-sectionproductoshome',
  imports: [CardproductoComponent],
  templateUrl: './sectionproductoshome.component.html',
  styleUrl: './sectionproductoshome.component.css'
})
export class SectionproductoshomeComponent implements OnInit {
  id = input<number>(1)
  titulo = input<string>("")
  cant = input<number>(10)
  productos: ProductoWithContent[] = []
  productosService = inject(ProductosService)

  constructor() { }

  ngOnInit(): void {
    this.productosService.getbyCategoria(this.id()).subscribe((res:ProductoWithContent[])=>{
      this.productos = res
    })
  }
}

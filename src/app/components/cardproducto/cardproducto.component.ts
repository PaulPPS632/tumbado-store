import { Component, input } from '@angular/core';
import { ProductoWithContent } from '../../interfaces/types';

@Component({
  selector: 'app-cardproducto',
  imports: [],
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent {
  producto = input.required<ProductoWithContent>()

  
}

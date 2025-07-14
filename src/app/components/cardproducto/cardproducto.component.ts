import { Component, input } from '@angular/core';
import { ProductoWithContent } from '../../interfaces/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardproducto',
  imports: [RouterLink],
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent {
  producto = input.required<ProductoWithContent>()

  
}

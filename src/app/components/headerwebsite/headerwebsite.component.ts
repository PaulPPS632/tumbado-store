import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Search } from '../../interfaces/types';

@Component({
  selector: 'app-headerwebsite',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './headerwebsite.component.html',
  styleUrl: './headerwebsite.component.css'
})
export class HeaderwebsiteComponent {
  router = inject(Router)
  

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const search : Search = {
      search: target.value
    }

    this.router.navigate(['/catalogo'], {queryParams: search});
  }
}

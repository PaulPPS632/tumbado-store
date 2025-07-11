import { Component } from '@angular/core';
import { HeaderwebsiteComponent } from "../../../components/headerwebsite/headerwebsite.component";
import { FooterwebsiteComponent } from "../../../components/footerwebsite/footerwebsite.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layoutwebsite',
  imports: [HeaderwebsiteComponent, FooterwebsiteComponent, RouterOutlet],
  templateUrl: './layoutwebsite.component.html',
  styleUrl: './layoutwebsite.component.css'
})
export class LayoutwebsiteComponent {

}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layoutadmin',
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './layoutadmin.component.html',
  styleUrl: './layoutadmin.component.css'
})
export class LayoutadminComponent {
  @ViewChild('externalToggle') externalToggle!: ElementRef;
  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  isMenuOpen = false;

  ngOnInit() {
    // Set initial state based on screen size
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth >= 1024) { // lg breakpoint
      this.isMenuOpen = true; // Open on desktop
    } else {
      this.isMenuOpen = false; // Closed on mobile by default
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

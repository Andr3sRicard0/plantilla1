import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.cerrarMenu();
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  cerrarMenu() {
    this.isMenuOpen = false;
  }
}

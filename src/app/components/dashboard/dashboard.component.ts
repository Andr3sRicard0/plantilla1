import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentSlide = 0;
  slides: HTMLElement[] = [];

  ngOnInit() {
    this.slides = Array.from(document.querySelectorAll('.slideItem'));
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.slides[this.currentSlide].classList.remove('active');
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.slides[this.currentSlide].classList.add('active');
    }, 10000); // Cambia cada 10 segundos
  }
  whatsappButton() {
    Swal.fire({
      title: "¿Quieres hablar con nosotros por WhatsApp?",
      text: "Comunícate con nosotros para obtener más información sobre nuestros productos.",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#7a7a79",
      background: "#bb1c1c",
      color: "#ffffff",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then(response => {
      if (response.isConfirmed) {
        window.location.href = 'https://api.whatsapp.com/send?phone=593984489550&text=Hola,%20estoy%20interesado%20en%20recibir%20más%20información%20sobre%20sus%20servicios.%20¿Podrían%20ayudarme%20con%20eso?';
      }
    });
  }
  redirigirServicios(){
    window.location.href = 'home/servicios';
  }
}

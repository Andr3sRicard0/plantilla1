import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  dataServicios: any[] = [];
  currentSlide = 0;
  slides: HTMLElement[] = [];

  constructor(
    private http : HttpClient
  ){}

  ngOnInit() {
    this.slides = Array.from(document.querySelectorAll('.slideItem'));
    this.startCarousel();
    this.loadServicios();
  }

  loadServicios(){
    this.http.get('assets/bd/servicios.xlsx', {responseType: 'arraybuffer'} ).subscribe((response) =>{
      const data = new Uint8Array(response);
      const workBook = XLSX.read(data, {type : 'array'});
      const firsSheetName = workBook.SheetNames[0];
      const woorkSheet = workBook.Sheets[firsSheetName];
      this.dataServicios = XLSX.utils.sheet_to_json(woorkSheet);
    })
    console.log('Soy tus servicios: ', this.dataServicios);
  }

  startCarousel() {
    setInterval(() => {
      this.slides[this.currentSlide].classList.remove('active');
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.slides[this.currentSlide].classList.add('active');
    }, 7000); // Cambia cada 10 segundos
  }

  getWhatsAppLink(servicioNombre: string){
    const phoneNumber = '593984677719'; // Reemplaza con tu número de WhatsApp
    const message = `Deseo realizar una recarga del servicio: ${servicioNombre}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }
}

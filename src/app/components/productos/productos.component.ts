import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  dataProducts: any[] = [];
  quantityMap: { [key: string]: number } = {};
  currentPage: number = 1;
  productsPerPage: number = 6;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('assets/bd/productos.xlsx', { responseType: 'arraybuffer' }).subscribe((response) => {
      const data = new Uint8Array(response);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      this.dataProducts = XLSX.utils.sheet_to_json(worksheet);
      this.initializeQuantities(); // Inicializa las cantidades después de cargar los productos
    });
  }

  initializeQuantities() {
    this.dataProducts.forEach(product => {
      this.quantityMap[product.nombreProduto] = 1; // Asigna 1 como cantidad inicial
    });
  }

  plusButton(id: string) {
    if (this.quantityMap[id] >= 10) {
      Swal.fire({
        icon:'info',
        iconColor: "#000000",
        title: 'No puedes pedir más de 10 unidades.',
        text:"Solo puedes pedir hasta 10 unidades por orden.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#000000",
        background: "#bb1c1c",
        color: "#ffffff",
      })
      return;
    }
    this.quantityMap[id] += 1;
  }

  minusButton(id: string) {
    if (this.quantityMap[id] <= 1) {
      alert("No puedes adquirir menos de 1 artículo");
      return;
    }
    this.quantityMap[id] -= 1;
  }

  onQuantityChange(event: Event, id: string) {
    const input = event.target as HTMLInputElement;
    const newValue = Number(input.value);

    if (newValue >= 1 && newValue <= 10) {
      this.quantityMap[id] = newValue;
    } else {
      alert("La cantidad debe estar entre 1 y 10.");
    }
  }

  submitCarShop(productoNombre: string) {
    Swal.fire({
      title: "¿Quieres solicitar este producto a través de WhatsApp?",
      text: "Para continuar, haz clic en 'Continuar'. ¡Estamos aquí para ayudarte!",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#7a7a79",
      background: "#bb1c1c",
      color: "#ffffff",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then(response => {
      if (response.isConfirmed) {
        const cantidad = this.quantityMap[productoNombre];
        const phoneNumber = '593984677719'; // Reemplaza con tu número de WhatsApp
        const message = `Requiero de este producto: ${productoNombre} con cantidad: ${cantidad}`;
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      }
    });
  }

  // Método para cambiar de página
  changePage(page: number) {
    this.currentPage = page;
  }

  // Método para obtener los productos que se deben mostrar en la página actual
  getPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    return this.dataProducts.slice(startIndex, startIndex + this.productsPerPage);
  }

  // Método para obtener el número total de páginas
  getTotalPages() {
    return Math.ceil(this.dataProducts.length / this.productsPerPage);
  }
}

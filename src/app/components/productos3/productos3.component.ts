import { Component } from '@angular/core';

@Component({
  selector: 'app-productos3',
  templateUrl: './productos3.component.html',
  styleUrls: ['./productos3.component.css']
})
export class Productos3Component {
  quantityMap: { [key: string]: number } = {};

  ngOnInit() {
    this.initializeQuantities();
  }

  initializeQuantities() {
    // Inicializa la cantidad para cada producto
    this.quantityMap['quantitySenaleticaPlastico'] = 1;
    this.quantityMap['quantityBotiquin'] = 1;
    this.quantityMap['quantityDetectorHumo'] = 1;
    this.quantityMap['quantityKitCarretera'] = 1;
    this.quantityMap['quantitySellosPlasticos'] = 1;
    this.quantityMap['quantitySellosMetalicos'] = 1;
    // Agrega más productos aquí si es necesario
  }

  plusButton(id: string) {
    if (this.quantityMap[id] >= 10) {
      alert("No puedes adquirir más de 10 artículos");
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

    if (newValue >= 0 && newValue <= 10) {
      this.quantityMap[id] = newValue;
      console.log('Quantity changed to:', this.quantityMap[id]);
    } else {
      alert("La cantidad debe estar entre 1 y 10.");
    }
  }

  submitCarShop(id: string) {
    alert("Estamos en desarrollo Prointe <3");
    return;
    const quantity = this.quantityMap[id];
    if (quantity <= 0) {
      alert("No puedes adquirir 0 productos.");
      return;
    }
    if (quantity > 10) {
      alert("No puedes adquirir más de 10 productos.");
      return;
    }
    alert("Producto agregado al carrito.");
  }
}

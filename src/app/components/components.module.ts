import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { Productos2Component } from './productos2/productos2.component';
import { Productos3Component } from './productos3/productos3.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../menu/menu.module';
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    ProductosComponent,
    Productos2Component,
    Productos3Component
  ],
  exports:[
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    ProductosComponent,
    Productos2Component,
    Productos3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MenuModule,
    FormsModule
  ]
})
export class ComponentsModule { }

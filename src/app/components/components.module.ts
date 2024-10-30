import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../menu/menu.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    ProductosComponent,
    ServiciosComponent
  ],
  exports:[
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MenuModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Productos2Component } from './components/productos2/productos2.component';
import { Productos3Component } from './components/productos3/productos3.component';

const routes: Routes = [
  {path:'', redirectTo:'home/dashboard', pathMatch:"full"},
  {path:'home', redirectTo:'home/dashboard', pathMatch:"full"},
  {path:'home', component:HomeComponent, children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'productos', component:ProductosComponent},
    {path:'productos2', component:Productos2Component},
    {path:'productos3', component:Productos3Component}
  ]},
  {path:'notFound', component:NotFoundComponent},
  {path:'**', redirectTo:'notFound', pathMatch:"full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

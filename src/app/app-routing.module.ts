import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'', redirectTo:'home/dashboard', pathMatch:"full"},
  {path:'home', redirectTo:'home/dashboard', pathMatch:"full"},
  {path:'home', component:HomeComponent, children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'productos', component:ProductosComponent}
  ]},
  {path:'notFound', component:NotFoundComponent},
  {path:'**', redirectTo:'notFound', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importacion de otros componentes
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import{Pagina404Component} from './components/pagina404/pagina404.component';

const routes: Routes = [
    {path:'' , component: HomeComponent},
    {path:'ingreso' , component: LoginComponent},
    {path: '404', component: Pagina404Component},
    {path:'**', redirectTo:'404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

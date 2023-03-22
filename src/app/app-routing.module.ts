import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BuildformComponent } from './pages/buildform/buildform.component';
import { BuynowComponent } from './pages/buynow/buynow.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'buildform',component:BuildformComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'buynow',component:BuynowComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConnexionComponent } from './connexion/connexion.component';




const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'creercompte',component:RegisterComponent},
{path:'connexion',component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

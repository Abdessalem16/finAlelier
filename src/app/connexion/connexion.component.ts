import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
password: any;
  constructor(private authService : AuthService,private router :Router){}
  seConnecter(email:string,password:string){
    this.authService.signIn(email,password).then(
      ()=>{
        alert('Bienvenu'+email);
        this.router.navigate(['films']);},
        (error)=>{
          console.log('Pb de connexion'+error);
          alert('votre compte est incorrect');
        }
    )

  }
}

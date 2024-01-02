import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private as:AuthService){}
  register(f: any){
    let data=f.value
    this.as.signup(data.email,data.password).then((user)=>{
      console.log('register')
      alert('compte créer avec succès')

    }).catch(()=>{
      console.log('error register')

    })

  }

}

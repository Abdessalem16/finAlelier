import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private sa:AuthService){}
  login(f:any){
    let data=f.value
    this.sa.signIn(data.email,data.password)
    .then((user)=>{
      console.log("login")
    })
     .catch(()=>{
      console.log('error login')
     })
  }

}

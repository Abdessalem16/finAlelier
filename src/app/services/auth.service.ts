import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'; // Make sure to import the correct module
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User | null> | undefined;

  constructor(private fa: AngularFireAuth) {
    this.user = this.fa.user;
  }

  signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.fa.createUserWithEmailAndPassword(email, password);
  }
  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.fa.createUserWithEmailAndPassword(email, password);
  }
  

  
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavmenuComponent,
    ConnexionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD6V3QpyojhVb-BYR5wt_5u0SrZmJ_uHhE",
      authDomain: "lahouelfirebase.firebaseapp.com",
      projectId: "lahouelfirebase",
      storageBucket: "lahouelfirebase.appspot.com",
      messagingSenderId: "711801033685",
      appId: "1:711801033685:web:b64ca69a957c7e1c5ca35c",
      measurementId: "G-28N73JMMEE"
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
 
  
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component'; // Добавьте AppComponent
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';



export const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(loginRoutes),
  ],
  
  declarations: [
    LoginComponent // Объявите AppComponent
  ],
    providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }





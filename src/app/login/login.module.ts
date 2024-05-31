import { NgModule, input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component'; // Добавьте AppComponent
import { LoginComponent } from './login.component';
// import { NewServiceService } from './new-service.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';




export const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(loginRoutes),
    CommonModule,
    HttpClientModule,

  ],
  exports: [InputComponent],
  
  declarations: [
    LoginComponent,// Объявите AppComponent
    InputComponent
  ],
    providers: [],
  bootstrap: [LoginComponent]

})
export class LoginModule {
  
}





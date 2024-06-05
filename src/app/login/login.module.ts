import { NgModule, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

export const loginRoutes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(loginRoutes),
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [LoginComponent, InputComponent],
  providers: [],
  bootstrap: [LoginComponent],
})
export class LoginModule {}

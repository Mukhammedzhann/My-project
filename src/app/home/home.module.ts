import { HomeComponent } from "./home.component";
import { NgModule, input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component'; // Добавьте AppComponent
// import { NewServiceService } from './new-service.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


export const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
    imports: [
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(homeRoutes),
      CommonModule,
      HttpClientModule,
    ],
    exports: [],
    // declarations: [HomeComponent],
    providers: [],
    // bootstrap: [HomeComponent],
  })
  export class HomeModule {}
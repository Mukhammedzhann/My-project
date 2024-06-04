import { HomeComponent } from "./home.component";
import { NgModule, input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component'; // Добавьте AppComponent
// import { NewServiceService } from './new-service.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";



export const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
    imports: [
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(homeRoutes),
      CommonModule,
      HttpClientModule,
      // NgClass,
      SharedModule,
    ],
    // exports: [],
    declarations: [HomeComponent],
    providers: [],
    // bootstrap: [HomeComponent],
  })
  export class HomeModule {
    isClicked = false;

  toggleButton() {
    this.isClicked = !this.isClicked;
  }
  }
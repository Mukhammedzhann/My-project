import { HomeComponent } from './home.component';
import { NgModule, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

export const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(homeRoutes),
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
  isClicked = false;

  toggleButton() {
    this.isClicked = !this.isClicked;
  }
}

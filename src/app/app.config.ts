import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from "@angular/router";
import { routes } from './app.routes';

// компоненты, которые сопоставляются с маршрутами
import { HomeComponent } from './home/home.component';
// import {AboutComponent} from "./about.component";
// import {NotFoundComponent} from "./not-found.component";

const appRoutes: Routes =[
  { path: "about", component: HomeComponent},
  // { path: "about", component: AboutComponent},
  // { path: "**", component: NotFoundComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

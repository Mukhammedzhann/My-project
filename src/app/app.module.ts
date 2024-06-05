import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MychartComponent } from './mychart/mychart.component';
import { MasterService } from './home/master.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [MasterService],
  declarations: [AppComponent,MychartComponent],
  bootstrap: [AppComponent, MychartComponent],
})
export class AppModule {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  
    // bootstrapApplication(LoginComponent)
    // .catch(err => console.error(err));
    
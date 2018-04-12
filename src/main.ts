import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//  Bootstraping is platform specific
//  we are running in the browser so we use the platformBrowserDynamic function to bootstrap our application
//  We can use ionic for mobile device

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

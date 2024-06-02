import { enableProdMode, PlatformRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideRouter } from '@angular/router';
import { provideStorage, StorageConfig } from '@ionic/storage-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

if (environment.production) {
  enableProdMode();
}

const storageConfig: StorageConfig = {
  name: 'my_app_db',
  storeName: 'tasks'
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideStorage(storageConfig), provideAnimationsAsync(), provideAnimationsAsync()
  ]
}).catch(err => console.log(err));






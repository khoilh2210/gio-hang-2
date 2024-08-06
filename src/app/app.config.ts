import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"hung-khoi","appId":"1:989692026104:web:12608b95e2cddda46f6f0d","storageBucket":"hung-khoi.appspot.com","apiKey":"AIzaSyD9ai3q5zAd3_Bh1_ybOYRs2OtYN7NCsMQ","authDomain":"hung-khoi.firebaseapp.com","messagingSenderId":"989692026104"})), provideAuth(() => getAuth())]
};

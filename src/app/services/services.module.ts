import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalsService } from './core/globals.service';
import { HttpServiceInterceptor } from '../interceptors/http-service.interceptor';


export function initializeApp(globals: GlobalsService) {
  return async (): Promise<void> => {
    globals.platform.ready()
    try {
      
      
    } catch (error) {
      console.log(error)
    }
  };
}

export const providers: Array<any> = [
  GlobalsService,
  { 
    provide: APP_INITIALIZER, 
    useFactory: initializeApp,
    deps: [ GlobalsService ], 
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpServiceInterceptor,
    multi: true,
  },
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: providers
})
export class ServicesModule { }

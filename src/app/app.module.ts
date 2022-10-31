import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule { 
constructor(private injector: Injector) {}

ngDoBootstrap() {
  const element = createCustomElement(AppComponent, { injector: this.injector });
  customElements.define('idwc-mfe-app', element);

}

}

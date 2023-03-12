import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CheckoutComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent, HeaderComponent,CheckoutComponent]
})

// const entryComponents =  [AppComponent, HeaderComponent,CheckoutComponent]
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {

    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('idwc-mfe-app', element);

    const element1 = createCustomElement(HeaderComponent, { injector: this.injector });
    customElements.define('idwc-mfe-app-header', element1);

    const element2 = createCustomElement(CheckoutComponent, { injector: this.injector });
    customElements.define('idwc-mfe-app-checkout', element2);

  }
}

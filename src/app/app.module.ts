import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {createCustomElement} from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents:[HelloWorldComponent],
  providers: [],
  /* bootstrap: [AppComponent] */
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);
  }

  ngDoBootstrap() {

  }
}

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule}   from '@angular/forms';
import {NgxAdminLteModule} from 'ngx-adminlte';
import {AppComponent} from "./app.component";

// Application wide providers
const APP_PROVIDERS = [];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent], // bootstrap component.
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxAdminLteModule.forRoot()
  ],
})
export class AppModule {
}
